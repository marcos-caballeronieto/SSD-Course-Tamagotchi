# Validation: Final Polish & Persistence

## 1. Automated Tests
- [x] **Unit Test**: `resetGame()` functions correctly and restores the store precisely to its absolute initial values (Name back to `null`, Growth `0`, Vitals `100`).

## 2. Manual Verification
- [x] **Long Offline Simulation**: 
    1. Set pet vitals to 100/100/100.
    2. Close application (or mock time forward by 10 hours by changing local storage `lastUpdated`).
    3. Reload. Verify pet is instantly `Sick` and `Adult`, with all vitals at `0`.
- [x] **Reset Integration**: Click the Reset button, confirm in the dialog, and verify the user is smoothly routed back to the `NamingScreen`. 
- [x] **Responsiveness**: Open DevTools, set viewport to iPhone SE (375x667). Validate no horizontal scrolling, action buttons fit in one row, and typography scales appropriately.
