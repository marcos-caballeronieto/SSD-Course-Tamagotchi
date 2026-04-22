# Requirements: Dev Menu (QA 工具)

## 1. Goal
Provide a hidden-ish or easily accessible debug panel for developers to instantly modify the pet's state. This is essential for showcasing specific lifecycle events (Evolution, Sickness, Death/Ghost) in a recorded demo without waiting for real-time decay.

## 2. User Stories
- **As a Developer/Presenter**, I want to instantly set Hunger to 0 so I can see the "Hungry" and "Sick" states.
- **As a Developer/Presenter**, I want to skip time or increase "Age" (Survival Time) to trigger the Evolution stages.
- **As a Developer/Presenter**, I want to toggle Sickness on/off manually.

## 3. Functional Requirements
- **Toggle Visibility**: The Dev Menu should be hidden by default but accessible via a specific keyboard shortcut (e.g., `Shift + D`) or a non-obtrusive button in the settings.
- **Stat Sliders**: 
    - Hunger (0-100)
    - Happiness (0-100)
    - Energy (0-100)
    - Health (0-100)
- **State Selection**:
    - Force "Sick" status.
    - Set current lifecycle stage (Baby, Teen, Adult, etc.).
- **Global Reset**: Ability to clear storage and start over immediately.
- **Immediate Feedback**: The Zustand store must update in real-time, and UI components must reflect the changes instantly without page reload.

## 4. Constraints
- **Styling**: Must match the premium aesthetic of the project (Glassmorphism, dark mode friendly).
- **Isolation**: The menu should only appear during development or when explicitly triggered; it should not clutter the main game loop UI.
