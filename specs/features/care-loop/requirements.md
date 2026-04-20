# Feature: Care Loop (Actions)

## 1. Feature Overview
This feature allows the user to interact with the pet to restore its vitals.

## 2. Requirements
- **Actions Interface**: Interactive buttons for `Feed`, `Play`, and `Rest`.
- **Feed Logic**: Restores +20 Hunger instantly.
- **Play Logic**: Restores +20 Happiness but costs -10 Energy.
- **Rest Logic**: Restores +40 Energy slowly (locks interactions for 5 seconds).
- **Cool-downs & Lockouts**: Actions are disabled during an ongoing interaction (e.g., while eating or sleeping).
- **Physical Feedback (Approach 3)**:
    - Must use Framer Motion for dynamic aesthetics.
    - Actions should trigger micro-animations (e.g., food particle flying towards the pet, sleep "Zzz" particles rising, and screen dimming during sleep).

## 3. Validation
- [ ] Clicking `Feed` increases Hunger but stops at 100.
- [ ] `Play` is disabled if Energy is below 10.
- [ ] `Rest` triggers a "Sleeping" state/animation.
