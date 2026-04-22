# Validation: Evolution & States

## 1. Automated Tests
- [x] **Unit Test**: Growth increases correctly with time.
- [x] **Unit Test**: Sickness triggers after 2 minutes of < 10 vital state.
- [x] **Unit Test**: Decay rates are multiplied while sick.
- [x] **Unit Test**: Stage transitions to 'Adult' at growth 100.

## 2. Manual Verification
- [x] **Size Progression**: Mock growth state to 40, 70, 100. Verify the sprite physically scales up in the UI.
- [x] **Evolution Event**: Trigger growth 100. Verify the screen fills with particles and the sprite swaps.
- [x] **Sickness**: Leave the tab open with low hunger/energy. Wait for the green filter and sickness icon to appear.
- [x] **Healing**: Click the new "Heal" button. Verify the filter disappears and decay returns to normal.
