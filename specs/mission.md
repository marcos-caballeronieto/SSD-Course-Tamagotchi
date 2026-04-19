# Project Specification: Tiny Tamagotchi

## 🎯 Project Overview
Build a tiny virtual pet web app. The goal is to create a living system with clear logic, stats, and evolution.

### Core Features
To create a digital companion that feels alive, focus on these four pillars:
- **Living Vitals:** Create meters for Hunger, Happiness, and Energy that automatically “tick” down over time to simulate a real-time need for care.
- **The Care Loop:** Provide simple actions like Feed, Play, and Rest to replenish stats and keep the pet healthy.
- **Dynamic States:** Use Normal, Sick, and Evolved states to give the player immediate visual feedback on their caretaking success.
- **Personal Touches:** Add small “Easter eggs” or quirky reactions to give your pet a unique personality beyond just the numbers.

## 📋 Project Scope
To keep the focus on the workflow rather than over-engineering, please adhere to the following scope for the game requirements:

| Required | Not Allowed |
| :--- | :--- |
| **Pet:** Naming, 1 user, 1 evolution, 1 recovery path | Authentication and multiple users, multiple pets, inventories, or currencies |
| **Stats (0–100):** Hunger, Happiness, Energy | Mini-games, social features, or notifications |
| **Actions:** Feed, Play, Rest | Admin features or complex evolutions |
| **States:** Normal, Sick, Evolved | Permanent death mechanics |

### Technical Guidelines:
- **State Persistence:** Make choices for state persistence (local storage, etc.).
- **Architecture:** Decide between single-page application vs. multi-page application.
- **Tech Stack:** Choose an appropriate framework and libraries.

## 📊 Quality Requirements
- **Completeness:** Mission, audience, constraints, user flows, and success criteria must be defined. Edge cases must be addressed.
- **Clarity and Specificity:** Decision points (algorithms, thresholds, lifecycles) must be explicitly stated.
- **Internal Consistency:** Files must be internally consistent with each other and with the core protocols.
- **Testability:** Validation strategies must test explicitly stated principles and features.