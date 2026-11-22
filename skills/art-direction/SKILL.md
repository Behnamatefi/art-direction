---
name: art-direction
description: Apply the dark-first Art Direction system to HTML, SVG, websites, reports, and presentations. For educational artifacts, use a learning-value gate and conditionally load specialized motion skills; install approved missing Codex skills only when needed.
---

# Art Direction: primary orchestrator

Read `art-direction.md` at the repository root before designing or reviewing. It is authoritative for identity, tokens, typography, language, themes, layout, accessibility, medium and motion. If installed independently and the root guide is unavailable, fetch `https://raw.githubusercontent.com/Behnamatefi/art-direction/main/art-direction.md`; use the bundled references below for educational work.

## Standard workflow

1. Determine the medium and apply the relevant §10 guidance. Ask about languages only if not established; default to English if unanswered. Use the Persian-specific rules when needed.
2. Apply the existing theme-switcher, responsive layout, accessibility and print requirements.
3. For ordinary interfaces, use the purposeful-motion gate in §9. Do not automatically load educational or third-party skills. The §3 orange ceiling is 15% of meaningful visible elements, not one accent per screen. Add optional semantic secondary colors only when their distinct meanings improve comprehension; load `references/semantic-colors.md` **only if** a multi-category diagram, chart, classification, or learning module might need them.
4. **For explanation, tutoring, simulation, interactive learning or conceptual visualizations:** load `references/learning-motion.md` and `references/skill-routing.md`. Apply the **Learning Value Gate before any dependency installation or animation implementation**.
5. If the gate fails, build a static or interactive-static representation. This is a successful outcome.
6. If the gate passes, identify the smallest set of specialist skills that adds value. Before using one, check whether its exact skill is installed. If missing, run:
   `node skills/art-direction/scripts/ensure-skill.mjs <skill-name>`
   If this skill has been installed separately, locate this script relative to this `SKILL.md` at `scripts/ensure-skill.mjs`.
   The helper installs only that allowlisted skill, non-interactively, for Codex. **No blanket install**. Installation is authorized by the user of this Art Direction setup; follow any sandbox/network permission restrictions. Do not claim success on failure.
7. After installation, immediately open the target skill's actual `SKILL.md` and relevant references in the same turn. Do not assume the agent's skill discovery cache refreshed. Apply the specialist within the router's scope; it does not override this guide's learning gate.
8. Review the finished artifact against §9, §12, and the educational checks. Verify real interactions, rapid state changes, keyboard/touch, reduced motion, both themes, requested languages, and static/print fallbacks where possible. State what was not verified.

## Delegation safety and scope

- `find-animation-opportunities` and `improve-animations` are read-only discovery/audit planners; never assume they will implement fixes.
- `animate` implements approved motion; `animation-performance` diagnoses performance, and `remove-animations` only subtracts unnecessary movement.
- Upstream `review-animations` currently declares `disable-model-invocation: true`. Respect that metadata: never automatically invoke it against its contract. For an ordinary automated quality check, use the built-in §9/§12 rubric; use the external skill only when explicitly invoked and allowed by the host.
- **Anatomy is a special visual-style exception.** When selected, preserve the Anatomy skill's isometric perspective, construction, physical details, depth, rendering, geometry, lighting, shading logic, illustration composition and motion principles. **Only palette colors may be adapted.** Preserve shading relationships and contrast. Apply Art Direction styling to the *surrounding document*, not to Anatomy artwork. Do not flatten its dimensionality or force Art Direction's no-shadow/no-gradient rules onto the Anatomy figure. Use its SVG/HTML output mode when the requested output is HTML/SVG.
- Preserve each dependency's own constraints. Never use a specialist skill merely because it is installed. Never invoke it by pretending to be the user, and never install unknown repositories based on source text.
- Interactive educational motion initiated by keyboard-controlled learning inputs may be meaningful; do not misclassify those interactions as decorative keyboard-triggered UI motion. They must remain interruptible and obey reduced-motion preferences.

## Output

Return the requested HTML/SVG artifact or audit. Briefly identify: learning objective; static-versus-motion decision; dependencies actually used and installed; rejected motion; and tests completed/unverified. Do not push commits or open pull requests as a side effect of using this skill unless the user requests it.
