---
skill_id: spec-integrity-v2
name: "Spec Integrity Protocol"
description: "Eliminates technical debt and context drift by enforcing strict alignment between specs and implementation."
version: "2.0.0"
---

# Spec-Driven Integrity (SDI) Protocol

## 1. The Implementation Cycle
1.  **Read & Digest**: Load `mission.md` and the target `specs/features/[feature].md`.
2.  **Sync-Check**: Before writing code, ensure `techstack.md` is up to date with the latest architectural decisions.
3.  **Draft Implementation Plan**: Create the `[dd-mm-yy_feature_plan.md]` as per the `superpowers.md` skill.
4.  **Execute**: Implement in atomic blocks, verifying each against its spec requirement.

## 2. Handling Ambiguity & Conflicts
- **Ghost Features**: Any code found in `app/` that is NOT explicitly defined in a spec file is considered "Technical Debt". It must be either specified or removed.
- **Ambiguity Protocol**: If a requirement is unclear:
    - Draft 3 possible technical interpretations.
    - Present pros/cons for each to the USER.
    - **Crucial**: Once a decision is made, update the spec file BEFORE continuing the implementation.
- **Conflicts**: If technical specs conflict, the `mission.md` acts as the ultimate tie-breaker, asking the user is also a must when conflicts appear.

## 3. Definition of Done (DoD)
A task is only "Done" when:
- [ ] Every requirement in the feature spec is implemented and verified.
- [ ] Code follows the patterns in `techstack.md`.
- [ ] UI matches the system tokens (verified via `theme_factory` audit).
- [ ] The `ROADMAP.md` and other documents are updated.
- [ ] Tests in `test/` pass with 100% coverage for the new logic.

## 4. Orchestration Commands
- **/audit-integrity**: Performs a "Diff Audit" between `specs/` and `app/`. It generates a report of Missing Features (spec exists, no code) and Ghost Features (code exists, no spec).
- **/spec-sync**: Automatically scans the latest implementation plan and updates the corresponding feature spec with any technical discoveries or changed constraints encountered during coding.

## 5. Constraints
- **Spec-First**: Never patch a bug or add a feature without first verifying if the `specs/` need an update.
- **Naming Alignment**: Variable names, API endpoints, and database schemas MUST match the definitions in `techstack.md` literally, if instructions about them exist.