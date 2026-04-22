# Feature: Final Polish & Persistence (Phase 5)

## 1. Feature Overview
This phase encapsulates the final touches required to ship the Tiny Tamagotchi. Since the core state persistence (via Zustand `localStorage`) and the offline catch-up logic are already successfully integrated, this phase focuses on game management (Restarting), mobile responsiveness, and final aesthetic audits.

## 2. Requirements
- **Game Management (Restart Mechanics)**:
  - Add an ability for the user to "Adopt a New Pet", which entirely wipes the current save file and brings them back to the original Naming Screen.
- **Offline Time Validation**:
  - The offline decay logic must be verified to correctly process edge cases (e.g., closing the tab for 10 hours must result in a sick pet and maxed growth when reopened).
- **Responsive Design & UX Polish**:
  - The UI must render flawlessly on mobile views (e.g., iPhone SE sizing at ~375px width).
  - Ensure interactive elements (buttons) are reachable and appropriately padded for touch targets.
  - Fix any unintended text wrapping or scrolling issues.

## 3. Out of Scope
- Backend infrastructure or cloud saves (this remains a purely client-side local storage game).
- Push notifications for sickness/hunger.
