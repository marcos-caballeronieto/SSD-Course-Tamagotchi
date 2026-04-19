# Validation: Onboarding & Identity

## 1. Automated Tests
- [ ] **Unit Test**: `setName` correctly updates the `name` property and transitions the store out of its initial null state; asserts `createdAt` is correctly assigned.
- [ ] **Unit Test**: New state defaults correctly evaluate to `stage === 'Baby'` and `status === 'Normal'`.

## 2. Manual Verification
- [ ] **Lockout Check**: Reloading the app without submitting a name forces the user to stay on the Naming Screen. No progress bars or pets are visible here.
- [ ] **Form Validation**: Attempting to submit an empty name disables the submission or shows an inline error.
- [ ] **Persistence Check**: Supplying a name ("Chonk"), successfully advancing to the main view, and then reloading the page ensures the app loads directly to the dashboard with "Chonk" visible in the header.
