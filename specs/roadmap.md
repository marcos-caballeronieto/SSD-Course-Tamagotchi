# 🗺️ Project Roadmap: Tiny Tamagotchi

This roadmap outlines the development phases for the Tiny Tamagotchi, focusing on the core pillars of living vitals, the care loop, and dynamic states while staying within the predefined scope.

## Phase 1: Foundation & Project Setup ✅
- [x] **Infrastructure**: Initialize the repository with the chosen tech stack.
- [x] **Global State**: Define the central state for the pet (Stats, Stage, Status).
- [x] **Naming Interface**: Implement the initial layout for naming the pet.
- [x] **Base UI Shell**: Create the main container and responsive layout for the app.

## Phase 2: Living Vitals & Ticking System ✅
- [x] **Feature: Vitals Engine**: Implement the logic for Hunger, Happiness, and Energy (0-100).
- [x] **Background Decay**: Create the "Tick" system to automatically decrease stats over time.
- [x] **Visual Meters**: Build the UI components for displaying stat levels.

## Phase 3: The Care Loop ⚪
- [ ] **Feature: Feed**: Implement button and logic to restore Hunger.
- [ ] **Feature: Play**: Implement button and logic to restore Happiness (at the cost of Energy).
- [ ] **Feature: Rest**: Implement "Sleep" state and button to restore Energy.
- [ ] **Action Feedback**: Add immediate visual changes during actions (Easter eggs/quirky reactions).

## Phase 4: Dynamic States & Evolution ⚪
- [ ] **Feature: Health States**: Implement the "Sick" state logic triggered by low vitals.
- [ ] **Feature: Recovery Path**: Implement the mechanism to restore health from the "Sick" state.
- [ ] **Feature: Evolution**: Implement the "Baby" to "Adult" transformation based on survival time.
- [ ] **Dynamic Sprites**: Integrate visual changes for Normal, Sick, and Evolved states.

## Phase 5: Persistence & Final Polish ⚪
- [ ] **State Persistence**: Implement LocalStorage syncing to save the pet's state between sessions.
- [ ] **UX Refinement**: Polish transitions, animations, and responsive behavior.
- [ ] **Final Integrity Audit**: Ensure the implementation strictly matches the specifications.