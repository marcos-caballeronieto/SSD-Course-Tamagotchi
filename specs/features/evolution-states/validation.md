# Validation: Evolution & States

## 1. Automated Tests
- [ ] **Unit Test**: Growth increases correctly with time.
- [ ] **Unit Test**: Sickness triggers after 5 minutes of 0 vital state.
- [ ] **Unit Test**: Decay rates are multiplied while sick.
- [ ] **Unit Test**: Stage transitions to 'Adult' at growth 100.

## 2. Manual Verification
- [ ] **Size Progression**: Mock growth state to 40, 70, 100. Verify the sprite physically scales up in the UI.
- [ ] **Evolution Event**: Trigger growth 100. Verify the screen fills with particles and the sprite swaps.
- [ ] **Sickness**: Leave the tab open with 0 hunger. Wait for the green filter and sickness icon to appear.
- [ ] **Healing**: Click the new "Heal" button. Verify the filter disappears and decay returns to normal.
