# Validation Protocol: Dev Menu

## Objective
Verify that the `DevMenu` allows instantaneous manipulation of the pet's vital stats, evolution stage, sickness status, and timeline, specifically facilitating video demonstrations.

## 1. Unit/State Testing
- **Goal:** Ensure the store actions correctly clamp boundary values and immediately trigger reactivity.
- **Criteria:**
    - `setStat('hunger', -50)` resolves to `0`.
    - `setStat('hunger', 150)` resolves to `100`.
    - `fastForward(600)` triggers immediate stage change if starting as baby and `tick` handles the time leap properly.

## 2. Playwright E2E Scenario
- **Test File:** `app/e2e/dev-menu.spec.ts`
- **Scenario:**
    1. Start a game by naming the pet.
    2. Press `Shift + D` to open the dev menu.
    3. Assert the Dev Menu is visible.
    4. Move the Hunger slider to 0 (or trigger setStat programmatically if sliders are hard to test).
    5. Verify the UI reflects the "Hungry" or "Sick" logic immediately based on 0 hunger.
    6. Click the "+10m" button to fast forward.
    7. Verify the stage updates to "Adult".
    8. Hit the "Global Reset" button.
    9. Verify the user is taken back to the Naming Screen.

## 3. Manual UI Verification
- Ensure the dev menu is styled appropriately with a glassmorphism look.
- Verify that it sits on top of all other elements (`z-index` check).
- Ensure pressing `Shift + D` again closes it.
