import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface PetVitals {
  hunger: number;
  happiness: number;
  energy: number;
}

export interface PetState {
  vitals: PetVitals;
  lastUpdated: number;
  tick: () => void;
  // Actions to be implemented fully in Phase 3, added here as stubs or basic increments
  feed: () => void;
  play: () => void;
  rest: () => void;
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
      vitals: {
        hunger: 100,
        happiness: 100,
        energy: 100,
      },
      lastUpdated: Date.now(),

      tick: () => {
        const now = Date.now();
        const { vitals, lastUpdated } = get();
        
        // Calculate delta in seconds
        const deltaSeconds = Math.max(0, (now - lastUpdated) / 1000);

        if (deltaSeconds > 0) {
          set({
            vitals: {
              hunger: Math.max(0, Math.min(100, vitals.hunger - DECAY_RATES.hunger * deltaSeconds)),
              happiness: Math.max(0, Math.min(100, vitals.happiness - DECAY_RATES.happiness * deltaSeconds)),
              energy: Math.max(0, Math.min(100, vitals.energy - DECAY_RATES.energy * deltaSeconds)),
            },
            lastUpdated: now,
          });
        }
      },

      feed: () => {
        set((state) => ({
          vitals: { ...state.vitals, hunger: Math.min(100, state.vitals.hunger + 20) },
        }));
      },

      play: () => {
        set((state) => ({
          vitals: { ...state.vitals, happiness: Math.min(100, state.vitals.happiness + 20) },
        }));
      },

      rest: () => {
        set((state) => ({
          vitals: { ...state.vitals, energy: Math.min(100, state.vitals.energy + 40) },
        }));
      },
    }),
    {
      name: 'tiny-tamagotchi-storage',
    }
  )
);
