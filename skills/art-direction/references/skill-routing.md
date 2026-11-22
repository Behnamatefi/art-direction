# Progressive skill routing for Codex

This is an **agent-orchestrated workflow**, not a programmatic skill-to-skill API. The agent reads this guide, chooses a needed skill, runs the installer if missing, then reads that skill's instructions. Do not imply installation guarantees the host will refresh its skill menu in the current turn.

## Order of decisions

1. Apply the educational Learning Value Gate. Reject decorative or unnecessary motion.
2. If a specialist is beneficial, select by **task**, not by popularity or availability.
3. Check the installed skill; install only the selected allowlisted skill when missing.
4. Read the installed `SKILL.md` and any references needed for the current task.
5. Execute only permitted behavior. A read-only analysis skill cannot silently become an implementation tool.
6. Validate and report what was actually invoked.

## Routing table

| Need | Skill | Can modify output? |
|---|---|---|
| Discover useful motion in unanimated work | `find-animation-opportunities` | No, read-only |
| Make a purposeful animation | `animate` | Yes |
| Model a physical/mechanical explanation using crafted isometric figures | `anatomy` | Yes; preserve entire visual language, palette-only adaptation |
| Diagnose stutter, frame drops or overly expensive properties | `animation-performance` | Follow its diagnostic scope |
| Audit existing motion and plan improvements | `improve-animations` | Planning only, except explicit upstream delegated execution |
| Remove animations that fail purpose/frequency gates | `remove-animations` | Only subtract |
| Dedicated review of existing motion | `review-animations` | Review-only; upstream currently blocks automatic model invocation |

For a single artifact, usually use no specialist or one specialist. Do not run all seven. `anatomy` is **not** the default for SVG; most diagrams should remain simple SVG.

## Anatomy-specific precedence

When selected, Anatomy is authoritative for the **inner illustration**: its isometric geometry, precision, camera, depth, dimensional shading, lighting, layout, mechanical detail, and animation craft remain intact. The **only** allowed adaptation of its visual style is palette recoloring. Color changes must preserve the rendering's multiple-tone depth relationships and accessibility. Art Direction applies to the surrounding page and controls. Do not override Anatomy with the main guide's flat-illustration, 15% outer-page orange ceiling, optional category palette, no-shadow/no-gradient or card limits inside the figure. Color recoloring is optional; never recolor merely to force brand consistency. Prefer Anatomy SVG/HTML output for HTML/SVG tasks; do not bring in WebGL/3D unless separately warranted by the output requirements.

## Auto installation

Use bundled `scripts/ensure-skill.mjs` when a required skill is not installed:

```sh
node skills/art-direction/scripts/ensure-skill.mjs anatomy
node skills/art-direction/scripts/ensure-skill.mjs animate
node skills/art-direction/scripts/ensure-skill.mjs remove-animations
```

The helper:
- Accepts only the seven hardcoded GitHub-backed skill names.
- Checks local project and global Codex paths before installing.
- Installs just the requested missing skill, using the official skills CLI with noninteractive `--skill`, `--agent codex`, `--global` and `--yes`.
- Defaults to a global Codex installation so the current project need not be modified; `--scope project` is available when preferred.
- Never reinstalls an existing skill or silently substitutes another source.
- Reports errors such as unavailable Node/npm, disabled network, denied write access and missing skill after installation. Does not bypass sandbox restrictions.
- Supports `--dry-run` and `--json` for inspection/testing.

It is intentional that an auto-installer executes a third-party package and fetches external skill content. Use only allowlisted known sources. Review any newly fetched skill instructions before executing their nontrivial workflows. Future upstream changes may affect behavior.

## Invocation permissions

The current upstream `review-animations` includes `disable-model-invocation: true`. Installing it does not grant permission to auto-invoke it. For routine automated checks use §9/§12 instead. If the host explicitly permits invocation through a user request, follow that route without modifying the upstream skill.

When unavailable or installation fails, use Art Direction's native motion standards as fallback and explicitly report the limitation. Do not call this a successful specialist invocation.
