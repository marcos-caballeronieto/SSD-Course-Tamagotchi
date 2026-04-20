# Validation: Care Loop

## 1. Automated Tests
- [ ] **Unit Test (Feed)**: Assert `feed()` increases Hunger by exactly 20 (up to a max of 100) and marks `activeInteraction` as 'eating'.
- [ ] **Unit Test (Play)**: Assert `play()` increases Happiness by exactly 20, decreases Energy by exactly 10, and throws an error/noop if energy is < 10.
- [ ] **Unit Test (Rest)**: Assert `rest()` locks `activeInteraction` to 'sleeping' and properly coordinates time adjustments over 5 seconds.

## 2. Manual Verification
- [ ] **Lockout Mechanism**: Verify that rapidly clicking buttons is physically impossible due to dynamic disabling states when `activeInteraction !== 'idle'`.
- [ ] **Visual Polish**: Observe that the physics layout correctly triggers Framer Motion variants. 'Feed' looks like eating, 'Rest' legitimately darkens the environment for 5 seconds.
- [ ] **Condition Guards**: Validate the 'Play' button grays out strictly when Energy drops below 10.
