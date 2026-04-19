# Technical Stack Specification

## 1. Core Development Stack
- **Frontend Framework:** React 19 + Vite
- **Language:** TypeScript 5.x (Strict Mode)
- **Styling:** Vanilla CSS + CSS Modules (Custom HSL color system + CSS Variables)
- **State Management:** Zustand (Lightweight store for game vitals and transitions)
- **Animations:** Framer Motion (For life-like pet movement and UI transitions)
- **Icons:** Lucide React

## 2. AI & Orchestration Layer
- **Primary Model:** Gemini 3.0 / Claude 4.6
- **Context Management:** Context7 MCP (For real-time documentation retrieval)

## 3. Data & Persistence
- **Database:** N/A (Client-side focus)
- **Caching/Persistence:** Browser LocalStorage (Automatic state syncing)

## 4. Testing & Quality Assurance
- **Unit Testing:** Vitest
- **E2E Testing:** Playwright (Mandatory for SDD validation)
- **Linter / Formatter:** ESLint + Prettier

## 5. Infrastructure & Deployment
- **Hosting:** Vercel / Netlify
- **CI/CD:** GitHub Actions (Automated Playwright checks)

## 6. Development Constraints
- **No External Assets:** All visual elements must be SVGs or pure CSS/Canvas.
- **Type Safety:** 100% TypeScript coverage. No `any`.
- **Component Pattern:** Functional components with Hooks. Store logic stays in Zustand.
- **Animation Standard:** Every interactive element must have a `:hover` and `:active` state with smooth transitions.
- **State Integrity:** Vitals must be recalculated based on elapsed time since the last logout/save to simulate real-time decay.

## 7. Executable Commands
- **Install:** `npm install`
- **Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Test:** `npm run test` (Vitest)
- **E2E Test:** `npx playwright test`