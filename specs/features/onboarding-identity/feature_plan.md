# Implementation Plan: Onboarding & Identity

## 1. Technical Approach
- Expand the existing `usePetStore` Zustand store with new properties (`name`, `stage`, `status`, `createdAt`) and a `setName(name)` action.
- Create a new `NamingScreen` React component with a controlled text input.
- Keep the `App.tsx` logic simple: use a conditional to return `<NamingScreen />` if `name` is null, else return the main layout.
- Update the layout Header in `App.tsx` to pull and display `name`, `status`, and `stage` from the store.

## 2. Tasks
- [x] Update `usePetStore.ts` types and state defaults.
- [x] Add the `setName: (name: string) => void` action.
- [x] Update `usePetStore.test.ts` to assert the new behaviors.
- [x] Build `NamingScreen.tsx` and `NamingScreen.module.css`.
- [x] Refactor `App.tsx` conditionally and add a visual header for Identity.

## 3. Dependencies
- Relies on the already configured Zustand persistent storage.
