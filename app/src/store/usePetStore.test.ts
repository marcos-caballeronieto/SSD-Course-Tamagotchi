import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { usePetStore } from './usePetStore';

describe('usePetStore Vitals Decay', () => {
  beforeEach(() => {
    // Reset state before each test
    usePetStore.setState({
      name: 'TestPet',
      stage: 'Baby',
      status: 'Normal',
      createdAt: Date.now(),
      vitals: { hunger: 100, happiness: 100, energy: 100 },
      lastUpdated: Date.now(),
    });
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize with 100 for all vitals', () => {
    const state = usePetStore.getState();
    expect(state.vitals.hunger).toBe(100);
    expect(state.vitals.happiness).toBe(100);
    expect(state.vitals.energy).toBe(100);
  });

  it('should calculate decay correctly over time difference', () => {
    const initialTime = Date.now();
    usePetStore.setState({ lastUpdated: initialTime });
    
    // Simulate advancing time by 60 seconds
    vi.setSystemTime(initialTime + 60000);
    
    // Trigger tick
    usePetStore.getState().tick();
    
    const state = usePetStore.getState();
    // Hunger decays 1 every 30s -> 2 in 60s
    expect(state.vitals.hunger).toBeCloseTo(98);
    // Happiness decays 1 every 60s -> 1 in 60s
    expect(state.vitals.happiness).toBeCloseTo(99);
    // Energy decays 1 every 120s -> 0.5 in 60s
    expect(state.vitals.energy).toBeCloseTo(99.5);
  });

  it('should enforce boundary condition (cannot drop below 0)', () => {
    const initialTime = Date.now();
    usePetStore.setState({ lastUpdated: initialTime });
    
    // Advance time by a huge amount (e.g., 200 hours)
    vi.setSystemTime(initialTime + 200 * 3600 * 1000);
    
    // Trigger tick
    usePetStore.getState().tick();
    
    const state = usePetStore.getState();
    expect(state.vitals.hunger).toBe(0);
    expect(state.vitals.happiness).toBe(0);
    expect(state.vitals.energy).toBe(0);
  });

  it('play should increase happiness, decrease energy, and lock interaction for 1.5s', () => {
    usePetStore.setState({
      vitals: { hunger: 50, happiness: 50, energy: 50 },
      activeInteraction: 'idle',
    });

    usePetStore.getState().play();
    
    let state = usePetStore.getState();
    expect(state.vitals.happiness).toBe(70);
    expect(state.vitals.energy).toBe(40);
    expect(state.activeInteraction).toBe('playing');

    // Should not allow another action while playing
    usePetStore.getState().feed();
    state = usePetStore.getState();
    expect(state.activeInteraction).toBe('playing'); // remain playing
    expect(state.vitals.hunger).toBe(50); // feed didn't work

    vi.advanceTimersByTime(1500);
    expect(usePetStore.getState().activeInteraction).toBe('idle');
  });

  it('rest should lock interaction for 5s before restoring energy', () => {
    usePetStore.setState({
      vitals: { hunger: 50, happiness: 50, energy: 50 },
      activeInteraction: 'idle',
    });

    usePetStore.getState().rest();
    
    let state = usePetStore.getState();
    expect(state.activeInteraction).toBe('sleeping');
    // Energy isn't restored until 5 seconds later
    expect(state.vitals.energy).toBe(50);

    vi.advanceTimersByTime(5000);
    state = usePetStore.getState();
    expect(state.vitals.energy).toBe(90);
    expect(state.activeInteraction).toBe('idle');
  });

  it('play should be blocked if energy is strictly below 10', () => {
    usePetStore.setState({
      vitals: { hunger: 50, happiness: 50, energy: 9 },
      activeInteraction: 'idle',
    });

    usePetStore.getState().play();
    const state = usePetStore.getState();
    expect(state.vitals.happiness).toBe(50);
    expect(state.activeInteraction).toBe('idle');
  });
});

describe('usePetStore Onboarding & Identity', () => {
  it('should initialize with null name and newborn defaults', () => {
    // Force reset to absolute initial state
    usePetStore.setState({
      name: null,
      stage: 'Baby',
      status: 'Normal',
      createdAt: null
    });
    
    const state = usePetStore.getState();
    expect(state.name).toBeNull();
    expect(state.stage).toBe('Baby');
    expect(state.status).toBe('Normal');
    expect(state.createdAt).toBeNull();
  });

  it('setName should transition store out of null state and set createdAt', () => {
    usePetStore.setState({ name: null, createdAt: null });
    
    usePetStore.getState().setName('Chonker');
    const state = usePetStore.getState();
    
    expect(state.name).toBe('Chonker');
    expect(state.createdAt).toBeTypeOf('number');
  });
});
