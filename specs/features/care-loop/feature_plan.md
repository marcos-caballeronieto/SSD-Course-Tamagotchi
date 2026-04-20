# Implementation Plan: The Care Loop

## 1. Technical Approach
- **Global State Modifications**:
  - Add `activeInteraction: 'idle' | 'sleeping' | 'eating' | 'playing'` to `PetState` to handle global UI locks.
  - Implement full mathematical logic inside the stubbed `feed()`, `play()`, and `rest()` actions in `usePetStore.ts`.
- **UI Components**:
  - Build `ActionBar.tsx` containing the three interaction buttons.
  - Conditionally disable buttons based on `activeInteraction` or stat guards (e.g., playing requires at least 10 Energy).
- **Framer Motion Micro-animations**:
  - **Feed**: A food particle drops or arcs towards the center. The interaction lock clears upon completion.
  - **Play**: The pet sprite undergoes an energetic bounce/spin sequence.
  - **Rest**: The immediate Tamagotchi container gracefully transitions to a dark hue (`var(--surface-main)` to near black). Floating "Zzz" particles ascend. The lock holds for exactly 5 seconds.

## 2. Tasks
- [ ] Update `usePetStore` to handle `activeInteraction` tracking and specific math for each action.
- [ ] Add unit tests in `usePetStore.test.ts` for the Care Loop constraints.
- [ ] Build the `ActionBar` UI component.
- [ ] Create an `InteractionLayer.tsx` component (or handle it inside `App.tsx`) using `framer-motion` to render contextual animations over the pet sprite.
- [ ] Integrate component states so screen "dims" precisely while `activeInteraction === 'sleeping'`.
