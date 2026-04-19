---
skill_id: algorithmic-art-engine
name: "Generative Canvas Architect"
description: "Generates programmatic visual assets using p5.js and canvas API."
---
# Generative Art Protocol
- **Constraint**: All visuals must be pure code. No external image dependencies.
- **Reproducibility**: Use a `GlobalSeed` variable defined in the technical configuration to ensure consistent art generation across builds.
- **Performance**: All canvas operations must be optimized. Use `noStroke()` and `fill()` instead of drawing individual lines when possible. Avoid unnecessary `redraw()` calls.    