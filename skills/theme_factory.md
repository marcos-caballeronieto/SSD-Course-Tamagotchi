---
skill_id: theme-factory-v2
name: "Design Orchestrator"
description: "Automates brand identity extraction, design token management, and aesthetic enforcement."
version: "2.1.0"
---

# Design Orchestration Protocol

## 1. Visual Discovery & Extraction
- **/recommend-style**: Analyze `mission.md` and target audience to suggest 3 distinct design directions (e.g., "Minimalist Professional", "Vibrant Tech", "High-Contrast Enterprise").
- **/visualize-moodboard**: Use `generate_image` to create a "Premium UX/UI Moodboard" (4k, high-fidelity) based on the chosen direction.
- **/extract-palette**: Analyze the moodboard or user feedback to define 10-step HSL scales for `primary`, `secondary`, and `accent`.
- **/generate-tokens**: Automatically update `app/styles/tokens.css` or `tailwind.config.js` with semantic tokens.

## 2. Premium Aesthetic Standards
Every UI generated must adhere to these "First Impression" rules:
- **Depth**: Use layered shadows (`shadow-sm` to `shadow-2xl`) and Backdrop Blurs (`glassmorphism`).
- **Surface**: Never use pure black or white. Use `surface-low`, `surface-mid`, and `surface-high` based on HSL lightness.
- **Gradients**: Use "Mesh Gradients" or "Subtle Linear" for primary actions. No flat color buttons.
- **Micro-Interactions**: Every interactive element MUST have a `:hover` and `:active` state with a 200ms `cubic-bezier` transition.

## 3. Semantic Token Matrix
Move beyond literal names to specific use-cases:
- **Brand**: `brand-primary`, `brand-secondary`, `brand-accent`.
- **Feedback**: `status-success`, `status-warning`, `status-error`, `status-info`.
- **Surface**: `bg-main`, `bg-card`, `bg-overlay`, `border-subtle`.
- **Content**: `text-title`, `text-body`, `text-muted`, `icon-active`.

## 4. Integrity & Maintenance
- **Source of Truth**: Whenever a style decision is made or changed (via any command above), ensure it is documented in the relevant feature spec or technical documentation.
- **/audit-ui**: Scan `app/components/` and `app/pages/` for hardcoded color codes (hex/rgb) or arbitrary pixel values. Replace them with system tokens.
- **/styleguide**: Generate or update `specs/STYLEGUIDE.md` which renders a visual preview of all tokens and base components.

## 5. Constraints
- **Accessibility Gate**: All text/background combinations must pass WCAG AA contrast checks. Use `mcp_playwright_browser_evaluate` to run an a11y audit.
- **Font-Load**: Ensure typography uses modern stacks (Inter, Montserrat, or Outfit) as defined in `techstack.md`. No browser defaults.
