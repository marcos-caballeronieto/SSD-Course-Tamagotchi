# Feature: Core Vitals (Hunger, Happiness, Energy)

## 1. Feature Overview
This feature implements the underlying state and "ticking" engine for the pet's primary life signs.

## 2. Requirements
- **Stats Architecture**: Three distinct values (Hunger, Happiness, Energy) ranging from 0 to 100.
- **Ticking System**: 
  - Stats must decrease periodically based on real-time intervals.
  - Hunger: -1 every 30 seconds.
  - Happiness: -1 every 60 seconds.
  - Energy: -1 every 120 seconds.
- **Persistent Calculations**: When the app is opened, it must calculate the total decay since the last known timestamp.
- **Stat Caps**: Values cannot exceed 100 or drop below 0.

## 3. Out of Scope
- Health sickness (delegated to `evolution-and-states`).
- User actions to restore stats (delegated to `care-loop`).
