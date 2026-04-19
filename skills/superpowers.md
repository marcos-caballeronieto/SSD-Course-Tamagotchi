---
skill_id: superpowers-workflow
name: "Dev Superpowers Toolkit"
description: "Enables advanced planning and execution commands for professional software engineering."
version: "1.2.0"
---

---
skill_id: superpowers-workflow-v2
name: "Advanced Dev Superpowers"
description: "High-level orchestration for Spec-Driven Development, including planning, execution, and integrity audits."
version: "2.1.0"
---
# Superpowers Protocol

## Planning & Execution
- **/brainstorm**: Analyze `specs/mission.md` or a feature in `specs/features/` and suggest 3 architectural approaches with explanations and pros/cons.
- **/write-plan**: Create `feature_plan.md` and `validation.md` inside the feature's specific folder in `specs/features/`.
- **/review-plan**: Review the implementation plan for logic gaps, security flaws, or tech-stack violations.
- **/execute-plan**: Implement changes incrementally. After every logical block, verify against `specs/techstack.md`.
- **/update-specs**: Sync `mission.md` and the feature's `requirements.md` with any architectural changes discovered during implementation.

## Quality & Integrity
- **/create-tests**: Delegate to the `playwright_testing` skill to generate relevant test suites for the active plan.
- **/verify-implementation**: Trigger the `playwright_testing` skill to ensure the current code matches the active plan. If tests fail, automatically invoke `/review-specs`.
- **/review-specs**: Cross-reference code, mission, and features. Fix inconsistencies. Ensure no "ghost features" (code without specs) exist.
- **/update-roadmap**: Automatically update `ROADMAP.md` based on completed plans and verified implementations.

## Context & Maintenance
- **/context-snapshot**: Create a brief summary of the current project state (what was done, what's next, and current blockers) to prevent "context decay" during long sessions.
- **/refactor-check**: Analyze the `app/` folder for technical debt or deviations from the `techstack.md` style guide and suggest a cleanup plan.

## Constraints
- **Strict SDD**: Never write production code without an approved plan in `specs/features/`.
- **Complexity Gate**: Features labeled "Complex" require a `/review-plan` from a second agent instance or user confirmation before `/execute-plan`.

## Multi-Agent Orchestration
- **/delegate-qa**: Hand over the `app/` folder and `specs/features/` to a secondary QA agent. The primary agent stays idle until the QA agent confirms the `playwright_testing` results are 100% green.
- **/second-opinion**: Use when stuck. Spawns an agent with "fresh eyes" that only reads the `mission.md` and the current `ROADMAP.md` to suggest a new direction.

- **/peer-review**: Spawn a secondary agent as a **Senior Architect**. 
    - **Input**: Provide the current `[dd-mm-yy_feature_name_plan.md]`.
    - **Action**: The Architect must look for hallucinations, over-engineering, or violations of the `techstack.md`.
    - **Output**: A "Review Report" that the primary agent must address before proceeding to `/execute-plan`.

- **/red-team**: Invoke a **QA specialist agent** to find edge cases.
    - **Goal**: Identify logic flaws (e.g., "What happens if the API returns a 500?", "What if the user clicks twice?").
    - **Requirement**: The Red Team agent does not see the implementation plan, only the `mission.md` and the final code in `app/`. This ensures an unbiased "Black Box" test.

- **/specialist-consult**: Call an expert agent based on the required domain.
    - **Domains**: [Security, Web-Performance, Accessibility, Database-Optimization].
    - **Workflow**: The specialist audits the `specs/features/` and provides specific "Hard Constraints" to be added to the technical spec.