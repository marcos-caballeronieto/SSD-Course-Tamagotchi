# Implementation Plan: Dev Menu (QA 工具)

## 1. Technical Approach

### Store Expansion (`usePetStore.ts`)
- **Debug Actions**:
    - `setStat(stat: string, value: number)`: Generic setter for hunger, happiness, energy, health.
    - `setStage(stage: string)`: Force the pet's evolution stage.
    - `setStatus(status: string)`: Force the status (Normal, Sick, etc.).
    - `fastForward(seconds: number)`: Simulate elapsed time.

### UI Component (`DevMenu.tsx`)
- Create a new component `DevMenu.tsx` in `app/src/components/`.
- Use a `fixed` positioning to overlay on the side of the screen.
- Styling: Use `backdrop-filter: blur(10px)` and a semi-transparent background for a modern "Glass" feel.
- Input Controls: `input type="range"` for sliders, set of buttons for stage/status forcing.

### Trigger Logic
- Add a global event listener in `App.tsx` (or a custom hook) to listen for `Shift + D`.
- Toggle a local React state `isDevMenuOpen` based on the shortcut.

## 2. Tasks
- [ ] Add `setStat`, `setStage`, `setStatus` actions to `usePetStore.ts`.
- [ ] Implement `DevMenu.tsx` with sliders and buttons linked to store actions.
- [ ] Add the `Shift + D` keyboard shortcut listener in the main `App` entry point.
- [ ] Style the Dev Menu to be non-intrusive and visually consistent with the app theme.

## 3. Verification Plan
- **Manual Test**: Open the app, press `Shift + D`.
- **Stat Test**: Slide Hunger to 0. Verify the "Hungry" status and HP decay.
- **Evolution Test**: Change stage to "Adult". Verify the sprite changes instantly.
- **Sickness Test**: Force status to "Sick". Verify the "Heal" action becomes available.
