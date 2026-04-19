# Feature: Evolution & States

## 1. Feature Overview
This feature manages the life stages (Baby -> Adult) and health states (Normal, Sick).

## 2. Requirements
- **Evolution Trigger**: Survival for 24 hours (real time) triggers evolution to Adult.
- **Sickness Trigger**: If any vital is below 10 for more than 5 minutes.
- **Sickness Effect**: All stats decay 25% faster while sick.
- **Recovery Path**: A "Heal" action appears only when sick; restores health status.

## 3. Validation
- [ ] Verify visual change when evolving.
- [ ] Verify "Heal" action restores normal decay rates.
- [ ] Verify "Sick" state persists on reload.
