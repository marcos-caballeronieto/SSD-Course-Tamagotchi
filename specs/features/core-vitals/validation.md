# Validation: Core Vitals

## 1. Automated Tests (Playwright/Vitest)
- [ ] **Unit Test: Stat Decay Calculation**: Verify that the decay formula correctly calculates the delta based on a given time difference.
- [ ] **Unit Test: Boundary Enforcement**: Verify that stats never drop below 0 or exceed 100.
- [ ] **E2E Test: Real-time Tick**: Observe the UI for 60 seconds and confirm stats decrease as specified.

## 2. Manual Verification
- [ ] **Persistence Check**: Close the browser tab, wait 5 minutes, and reopen. Verify that stats have decreased by the expected amount.
- [ ] **Empty State**: Verify that stats stay at 0 and do not become negative.
- [ ] **Full State**: Verify that stats do not overflow initial 100 on first load.
