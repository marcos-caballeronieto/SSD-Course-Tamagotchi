# Feature: Onboarding & Identity

## 1. Feature Overview
This feature covers the initial user experience when they first open the app, capturing the pet's name and establishing the full shape of the global state (including age/stage and status).

## 2. Requirements
- **Global State Variables**:
  - `name`: string | null (starts as null)
  - `stage`: 'Baby' | 'Adult' (starts as Baby)
  - `status`: 'Normal' | 'Sick' (starts as Normal)
  - `createdAt`: Unix timestamp | null (set when pet is named)
- **Naming Interface**: 
  - An input field to type the pet's name.
  - A form or button to "Start Journey".
  - Basic validation to prevent empty names.
- **Routing/Conditioning**: If the pet has no name, the app strictly shows the naming screen. If it has a name, it advances to the main dashboard.
- **Display**: The pet's name and current stage/status must be visible in the main UI shell (the header area).
