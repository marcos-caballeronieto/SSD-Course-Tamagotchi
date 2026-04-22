# Implementation Plan: Evolution & States

## 1. Technical Approach
- **Store Updates (`usePetStore.ts`)**:
  - Add `growth: number` (0-100) to state.
  - Implement `checkSickness()` logic inside the `tick` function: keep a `sickTimer` (seconds) in the store that increments if (hunger < 10 || energy < 10) and resets otherwise. If `sickTimer > 120`, set status to 'Sick'.
  - Update `tick` to apply faster decay if `status === 'Sick'`.
  - Add `heal()` action which triggers a 3s `activeInteraction === 'healing'` lockout, then resets `sickTimer`, returns status to 'Normal', and boosts vitals to 50.
- **Visual Logic**:
  - Store the "evolution" event as a transient state to trigger the Framer Motion animation once.
  - Use a derived value function to determine `scale` based on `growth`.
- **UI Components**:
  - Update `App.tsx` pet sprite container to use dynamic scaling.
  - Add a "Heal" button to `ActionBar.tsx` that only renders when `status === 'Sick'`.
  - Add the "Evolution Sequence" component/animation.

## 2. Tasks
- [x] Add `growth` and sickness tracking logic to `usePetStore.ts`.
- [x] Implement `heal()` action in store.
- [x] Update `tick()` logic to handle sickness triggers and intensified decay.
- [x] Create a `TransformOverlay` component for the final evolution animation.
- [x] Update pet sprite styling to handle `growth` scaling and sickness filters.
- [x] Add "Heal" button to `ActionBar` with conditional visibility.

## 3. Dependencies
- Framer Motion for the transformation sequence.
- Lucide React for a medical/heal icon.
