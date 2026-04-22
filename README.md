# 🥚 Tiny Tamagotchi - SDD Agentic Framework Showcase

[![AI-Native](https://img.shields.io/badge/Architecture-AI_Native-blue.svg)](https://github.com/marcos-caballeronieto/SSD-Course-Tamagotchi)
[![Workflow](https://img.shields.io/badge/Workflow-Spec_Driven-success.svg)](#)
[![Ready for](https://img.shields.io/badge/IDE-Google_Antigravity_%7C_Claude_Code-black.svg)](#)

> **"Vibe Coding" is dead.** Writing random prompts and hoping the AI generates a scalable system no longer works. This project was built entirely using the **Spec-Driven Development (SDD)** methodology, orchestrating autonomous coding agents to build a complete, interactive web application without context decay.

---

## 🐣 What is this?

**Tiny Tamagotchi** is a fully functional virtual pet application built with React, Vite, TypeScript, Zustand, and Framer Motion. 

More importantly, this repository serves as a **production-ready demonstration of the SDD Framework**. It illustrates how an AI agent (like Claude 3.7 or Gemini 2.0) can build robust software in a deterministic and auditable way by strictly following documentation, constraints, and skills.

**Key features of the Pet:**
- **Lifecycle Management:** Egg -> Baby -> Teen -> Adult -> Senior -> Ghost.
- **Needs System:** Hunger, Happiness, Health, Energy, and Hygiene tracking.
- **Interactions:** Feed, Play, Heal, Clean, and Sleep interactions with cooldowns.
- **Sickness System:** Pet gets sick if vitals remain low, requires healing.
- **Animations:** Dynamic UI feedback utilizing Framer Motion.

---

## 🚀 How to Run the App

1. **Clone the repository:**
   ```bash
   git clone https://github.com/marcos-caballeronieto/SSD-Course-Tamagotchi.git
   cd Tamagotchi
   ```

2. **Navigate to the app directory:**
   ```bash
   cd app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 🧠 The SDD Architecture (Behind the Scenes)

This project isn't just about the code; it's about *how* it was built. The framework is designed for the AI to read hierarchically.

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
│   └── context7_docs.md      # Real-time documentation fetcher.
└── 💻 app/                   # Production code (The Tamagotchi React App).
```

---

## 🔄 The Development Loop (SDD Cycle) Used

The app was developed using this rigorous iterative process to prevent technical debt:

1. **Plan & Brainstorm**: Creating `feature_plan.md` using the agents.
2. **Implement Feature**: The agent wrote code in the `app/` directory following the approved plan.
3. **Update Specs & Roadmap**: Specs were updated as the design evolved, mitigating context drift.
4. **Re-plan & Iterate**: New phases were executed predictably based on `ROADMAP.md`.