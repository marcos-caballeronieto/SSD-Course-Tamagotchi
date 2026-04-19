# Implementation Plan: Core Vitals (Hybrid Ticking Engine)

This plan implements a persistent, real-time vital signs engine using a Hybrid Ticking approach.

## 1. Technical Approach
- **State Management**: Zustand store to hold `hunger`, `happiness`, `energy`, and `lastUpdated`.
- **Hybrid Logic**:
    - **Initialization (Catch-up)**: On store initialization, calculate `timeDelta = Date.now() - lastUpdated`. Apply decay for the entire delta.
    - **Heartbeat (Real-time)**: A 1-second interval inside a React provider will call the `tick` action to apply a 1-second decrement.
- **Persistence**: Zustand middleware (`persist`) will sync the state to `localStorage` on every change.

## 2. Tasks
- [ ] **Data Model**: Define `PetVitals` interface with strict number typing (0-100).
- [ ] **Decay Constants**: Define `DECAY_RATES` (e.g., Hunger: 1 unit / 30s).
- [ ] **Store Implementation**:
    - [ ] Create `usePetStore` with `vitals` state.
    - [ ] Implement `applyTotalDecay(seconds)` helper.
    - [ ] Implement `tick()` action for the 1s decrement.
- [ ] **UI Integration**:
    - [ ] Create `VitalsMonitor` component (headless) that runs the `useEffect` heartbeat.
    - [ ] Create `VitalsDashboard` component to render the progress bars.
- [ ] **Edge Case Handling**:
    - [ ] Ensure `Math.max(0, ...)` is used to prevent negative stats.
    - [ ] Handle `lastUpdated` initialization for a brand new pet.

## 3. Technical Constraints
- No double-ticking: The initialization catch-up must happen exactly once before the heartbeat starts.
- Performance: Use `requestAnimationFrame` or a stable `setInterval` for the heartbeat to minimize CPU usage when tab is inactive.
