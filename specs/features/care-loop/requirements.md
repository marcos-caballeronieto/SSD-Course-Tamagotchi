# Feature: Care Loop (Actions)

## 1. Feature Overview
This feature allows the user to interact with the pet to restore its vitals.

## 2. Requirements
- **Actions Interface**: Buttons for `Feed`, `Play`, and `Rest`.
- **Feed Logic**: Restores +20 Hunger.
- **Play Logic**: Restores +20 Happiness but costs -10 Energy.
- **Rest Logic**: Restores +40 Energy (takes 5 seconds of interaction time).
- **Cool-downs**: Actions cannot be spammed (0.5s debounce).

## 3. Validation
- [ ] Clicking `Feed` increases Hunger but stops at 100.
- [ ] `Play` is disabled if Energy is below 10.
- [ ] `Rest` triggers a "Sleeping" state/animation.
