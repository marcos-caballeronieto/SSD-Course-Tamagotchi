# ⚙️ Spec-Driven Development (SDD) Agentic Framework

[![AI-Native](https://img.shields.io/badge/Architecture-AI_Native-blue.svg)](https://github.com/tu-usuario/sdd-framework)
[![Workflow](https://img.shields.io/badge/Workflow-Spec_Driven-success.svg)](#)
[![Ready for](https://img.shields.io/badge/IDE-Google_Antigravity_%7C_Claude_Code-black.svg)](#)

> **"Vibe Coding" is dead.** Writing random prompts and hoping the AI generates a scalable system no longer works. This repository is a **Meta-Framework** designed to orchestrate autonomous coding agents, eliminating hallucinations and context decay through rigorous specification.

---

## 🧠 What is this?

This repository is not a code template (React, Python, etc.). It is an **Operating System for AI Agents**. It provides the documentary structure, constraints, and skills (Skills) necessary for any model (Claude 3.7, Gemini 2.0) to build complex software in a deterministic and auditable way.

**It solves the 3 main problems of AI-driven development:**
1. **Context Loss:** Resolved through the strict separation of `Mission`, `TechStack`, and `Roadmap`.
2. **Spaghetti Code:** Resolved through the "Planning before Execution" protocol (`/write-plan`).
3. **Lack of Verification:** Resolved through the mandatory use of automated testing MCPs (Playwright).
4. **Documentation Lag:** Resolved through the integration of **Context7 MCP** for real-time API documentation.

---

## 🚀 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tu-usuario/sdd-framework.git
   cd sdd-framework
   ```

2. **Setup your environment:**
   Ensure you are using an AI-native editor like **Google Antigravity** or **Claude Code**.

3. **Initialize the Agent:**
   Feed the `specs/agents.md` file to your AI agent. This acts as its "System Prompt" and operational manual.

4. **Follow the Workflow:**
   Always use the `/write-plan` command (defined in `skills/superpowers.md`) before any implementation to ensure alignment with the specifications.

---

## 📂 System Architecture (The Backbone)

The framework is designed for the AI to read hierarchically. Never let the agent write code without having read its "Constitution" first.

```text
├── 📜 README.md              # This document.
├── 🗺️ ROADMAP.md             # The AI's short-term memory (Current state and blockers).
├── 🤖 specs/                 # The absolute source of truth (The "What").
│   ├── agents.md             # The Constitution: Who the AI is and what rules it follows.
│   ├── mission.md            # The Purpose: Why the project exists.
│   ├── techstack.md          # The Tools: Allowed libraries and architecture.
│   └── features/             # Feature-specific folders (Requirements, Plan, Validation).
├── 🛠️ skills/                # Agent tools and commands (The "How").
│   ├── superpowers.md        # Development workflow and custom commands (/brainstorm, /write-plan).
│   ├── playwright_testing.md # QA protocol and mandatory validation.
│   ├── context7_docs.md      # Real-time documentation fetcher.
│   └── [Other Skills]        # MCP integrations (Rube, Document Suite, etc.).
└── 💻 app/                   # Production code (100% generated and managed by the AI).
```

---

## 🔄 The Development Loop (SSD Cycle)

The framework enforces a rigorous iterative process to prevent technical debt and context drift:

1. **Plan & Brainstorm**:
   Use the `/brainstorm` or `/write-plan` commands to define *how* a feature will be built. The agent must reference `specs/` to ensure compatibility.

2. **Implement Feature**:
   The agent writes code in the `app/` directory following the approved plan. Small, atomic commits/edits are preferred to keep the context clean.

3. **Update Specs & Roadmap**:
   If the implementation changes the system's behavior or uncovers new edge cases, update the corresponding file in `specs/`. Mark the task as completed in `ROADMAP.md`.

4. **Re-plan & Iterate**:
   Never start a new feature without updating the state of the project first. The loop begins again by reading the updated `ROADMAP.md` and creating the next plan.

---

## 🏚️ Legacy Projects Integration

Applying SSD to an existing codebase requires a "Reverse-Engineering" phase:

1. **Document the Baseline**: 
   Before making changes, the agent must read the current codebase and fill out `specs/techstack.md` and `specs/mission.md` to establish the current "Source of Truth".

2. **Map the Application Folder**: 
   If your project doesn't use an `app/` directory (e.g., it uses `src/` or `components/`), update the pointer in the system architecture to reflect your actual structure.

3. **Incremental Migration**: 
   Do not attempt to spec the entire legacy app at once. Only create `specs/features/` for the specific modules you are currently refactoring or expanding.

4. **Baseline Testing**: 
   Before any `/execute-plan`, create a Playwright test that covers the *existing* behavior. This ensures that the SSD loop doesn't introduce regressions in legacy logic.