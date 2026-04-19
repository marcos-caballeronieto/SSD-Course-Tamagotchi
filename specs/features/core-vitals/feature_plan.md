# Implementation Plan: Core Vitals

## 1. Technical Approach
- Use a Zustand store to manage `vitals` state.
- Use a `useEffect` on the root component to trigger a 1-second interval "heartbeat".
- The heartbeat will compare the current timestamp with `lastUpdated` and apply the decay logic.

## 2. Tasks
- [ ] Create `usePetStore.ts` with vitals state and a `tick` action.
- [ ] Implement the `calculateDecay(timeDelta)` helper function.
- [ ] Create the `VitalsDisplay` component to show the state in the UI.
- [ ] Integrate the heartbeat monitor in the main app layout.

## 3. Dependencies
- techstack: Zustand, React, TypeScript.
