import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PetVitals {
  hunger: number;
  happiness: number;
  energy: number;
}

export interface PetState {
  name: string | null;
  stage: 'Baby' | 'Adult';
  status: 'Normal' | 'Sick';
  createdAt: number | null;
  activeInteraction: 'idle' | 'sleeping' | 'eating' | 'playing' | 'healing' | 'evolving';
  vitals: PetVitals;
  lastUpdated: number;
  tick: () => void;
  setName: (name: string) => void;
  feed: () => void;
  play: () => void;
  rest: () => void;
  heal: () => void;
  growth: number;
  sickTimer: number;
}

// Rates are represented as units decayed per second
export const DECAY_RATES = {
  hunger: 1 / 30,    // 1 unit every 30 seconds
  happiness: 1 / 60, // 1 unit every 60 seconds
  energy: 1 / 120,   // 1 unit every 120 seconds
};

export const usePetStore = create<PetState>()(
  persist(
    (set, get) => ({
      name: null,
      stage: 'Baby',
      status: 'Normal',
      createdAt: null,
      activeInteraction: 'idle',
      growth: 0,
      sickTimer: 0,
      vitals: {
        hunger: 100,
        happiness: 100,
        energy: 100,
      },
      lastUpdated: Date.now(),

      tick: () => {
        const { name } = get();
        if (!name) return; // Do not decay before the game starts

        const now = Date.now();
        const { vitals, lastUpdated, status, sickTimer, growth, stage } = get();
        
        // Calculate delta in seconds
        const deltaSeconds = Math.max(0, (now - lastUpdated) / 1000);

        if (deltaSeconds > 0) {
          const decayMultiplier = status === 'Sick' ? 1.5 : 1;
          const newHunger = Math.max(0, Math.min(100, vitals.hunger - DECAY_RATES.hunger * deltaSeconds * decayMultiplier));
          const newHappiness = Math.max(0, Math.min(100, vitals.happiness - DECAY_RATES.happiness * deltaSeconds * decayMultiplier));
          const newEnergy = Math.max(0, Math.min(100, vitals.energy - DECAY_RATES.energy * deltaSeconds * decayMultiplier));
          
          let newSickTimer = sickTimer;
          let newStatus = status;

          if (newHunger < 10 || newEnergy < 10) {
            newSickTimer += deltaSeconds;
            if (newSickTimer >= 120 && newStatus === 'Normal') {
              newStatus = 'Sick';
            }
          } else {
            newSickTimer = 0;
          }

          let newGrowth = growth;
          let newStage = stage;
          let triggerEvolve = false;

          if (stage === 'Baby') {
            // Evolve in approx 10 minutes of elapsed time
            newGrowth = Math.min(100, growth + deltaSeconds * (100 / 600)); 
            if (newGrowth >= 100) {
              newStage = 'Adult';
              triggerEvolve = true;
            }
          }

          set({
            vitals: { hunger: newHunger, happiness: newHappiness, energy: newEnergy },
            sickTimer: newSickTimer,
            status: newStatus,
            growth: newGrowth,
            stage: newStage,
            lastUpdated: now,
          });

          if (triggerEvolve) {
             set({ activeInteraction: 'evolving' });
             setTimeout(() => {
                if (get().activeInteraction === 'evolving') set({ activeInteraction: 'idle' });
             }, 4000); // 4s evolution animation
          }
        }
      },

      setName: (name: string) => {
        set({ 
          name, 
          createdAt: Date.now(), 
          lastUpdated: Date.now() // Reset timer so they don't lose stats from sitting on naming screen
        });
      },

      feed: () => {
        const state = get();
        if (state.activeInteraction !== 'idle') return;
        
        set({
          activeInteraction: 'eating',
          vitals: { ...state.vitals, hunger: Math.min(100, state.vitals.hunger + 20) },
        });

        setTimeout(() => {
          if (get().activeInteraction === 'eating') set({ activeInteraction: 'idle' });
        }, 1500); // 1.5s lock for the eating animation
      },

      play: () => {
        const state = get();
        if (state.activeInteraction !== 'idle' || state.vitals.energy < 10) return;
        
        set({
          activeInteraction: 'playing',
          vitals: {
            ...state.vitals,
            happiness: Math.min(100, state.vitals.happiness + 20),
            energy: Math.max(0, state.vitals.energy - 10),
          },
        });

        setTimeout(() => {
          if (get().activeInteraction === 'playing') set({ activeInteraction: 'idle' });
        }, 1500); // 1.5s lock for play animation
      },

      rest: () => {
        const state = get();
        if (state.activeInteraction !== 'idle') return;
        
        set({ activeInteraction: 'sleeping' });

        setTimeout(() => {
          const current = get();
          if (current.activeInteraction === 'sleeping') {
            set({
              activeInteraction: 'idle',
              vitals: { ...current.vitals, energy: Math.min(100, current.vitals.energy + 40) },
            });
          }
        }, 5000); // 5s sleep lock
      },

      heal: () => {
        const state = get();
        if (state.activeInteraction !== 'idle' || state.status !== 'Sick') return;
        
        set({ activeInteraction: 'healing' });

        setTimeout(() => {
          const current = get();
          if (current.activeInteraction === 'healing') {
            set({
              activeInteraction: 'idle',
              status: 'Normal',
              sickTimer: 0,
              vitals: {
                ...current.vitals,
                hunger: Math.max(50, current.vitals.hunger),
                energy: Math.max(50, current.vitals.energy),
              },
            });
          }
        }, 3000); // 3s heal lock
      },
    }),
    {
      name: 'tiny-tamagotchi-storage',
      partialize: (state) => ({
        name: state.name,
        stage: state.stage,
        status: state.status,
        createdAt: state.createdAt,
        growth: state.growth,
        sickTimer: state.sickTimer,
        vitals: state.vitals,
        lastUpdated: state.lastUpdated,
      }),
    }
  )
);
