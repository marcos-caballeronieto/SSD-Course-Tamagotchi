# Feature: Evolution & States (Phase 4)

## 1. Feature Overview
This feature adds depth to the life cycle and health of the pet. The pet grows in size periodically, eventually evolving into an adult with a full visual transformation. It also introduces sickness logic based on care quality.

## 2. Requirements
- **Growth System**:
  - A hidden `growth` stat (0-100) that increases over time (e.g., +1 per 3 hours survival).
  - **Intermediate Stages**: size increases at `growth` thresholds:
    - 0-33: `scale: 1.0` (Small)
    - 34-66: `scale: 1.2` (Medium)
    - 67-99: `scale: 1.5` (Large)
- **Final Evolution**:
  - At `growth === 100`, the `stage` changes from 'Baby' to 'Adult'.
  - Trigger a "Transformation Event": High-energy particles, scaling motion, and a sprite change (e.g., 🥚 -> 🐥).
- **Health States (Sickness)**:
  - **Trigger**: If **Hunger < 10** OR **Energy < 10** continuously for more than **2 minutes**.
  - **Effect**: Decay rates for all vitals increase by 1.5x while sick.
  - **Visuals**:
    - **Sprite Change**: Baby (🥚 -> 🤢), Adult (🐥 -> 🤒).
    - **Filter**: Apply a sickly green hue-rotate filter to the pet area.
    - **Particles**: Spawn 🤢 and 🤒 particles periodically.
- **Recovery**:
  - A new "Heal" action appears *only* when sick.
  - **Heal Interaction**: Triggers a 3-second healing animation (lockout).
  - **Effect**: Restores status to 'Normal', resets decay rates, and sets Hunger/Energy to **50** (if they were lower).
  - **Visuals**: A medical cross particle sequence and a pulse animation.

## 3. Out of Scope
- Multiple evolution paths (we are sticking to a single Baby -> Adult path).
- Death (the pet stays at 0/Sick but doesn't disappear in this scope).
