# Implementation Plan: Final Polish & Persistence

## 1. Technical Approach
- **Store Updates (`usePetStore.ts`)**:
  - Add `resetGame()` action piece. This action should just `set` the entire store state back to the initial defaults (null name, Normal status, Baby stage, 100 vitals). 
  - Ensure the `tick` logic correctly handles extreme offline `deltaSeconds` without exploding `NaN` math or bypassing the sickness locks. (Our use of `Math.min` and `Math.max` should already govern this, but we will audit it).
- **UI Components**:
  - Add a small `TopNav.tsx` or settings gear icon to the main header, which spawns a "Reset Game" confirmation dialog (using `window.confirm` for simplicity).
  - Update `App.css`, `ActionBar.module.css`, and `index.css` to feature responsive `@media` rules ensuring padding doesn't overflow mobile boundaries.

## 2. Tasks
- [x] Implement `resetGame()` inside `usePetStore.ts`.
- [x] Create simple `SettingsMenu` button to trigger the reset.
- [x] Audit and inject CSS `@media (max-width: 480px)` fixes to ensure true mobile formatting.
- [x] Manual deep-dive test for extreme "Time Travel" logic (simulate the app being closed for a day).

## 3. Dependencies
- Native `window.confirm` API.
