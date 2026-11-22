# Art Direction

**A black document that reads like paper and is structured like an instrument.**

A single-file art direction spec, written to be handed to an AI. Point Claude, ChatGPT, Cursor or v0 at [`art-direction.md`](art-direction.md) and ask for a website, a deck, a poster or a report — the guide supplies the visual direction, theme behavior, and motion guidance.


## Progressive Learning-Motion Orchestrator (Codex)

The bundled `art-direction` agent skill can route educational HTML/SVG work to specialized animation skills **only when motion improves understanding**. A static explanation is a valid outcome. See [learning motion](skills/art-direction/references/learning-motion.md), [conditional semantic colors](skills/art-direction/references/semantic-colors.md), and [routing rules](skills/art-direction/references/skill-routing.md).

**Color guidance:** Orange is available for meaningful emphasis on up to **15% of visible content elements** per viewport or slide, not limited to one element. For educational work, Reforge-inspired blue, green, amber and violet can distinguish concepts **only when that improves comprehension**. These semantic colors are optional, require consistent mappings and accessible non-color cues, and are not a decorative palette.

**Lazy installation:** When an approved specialist is required but not installed, the skill runs the allowlisted [installer](skills/art-direction/scripts/ensure-skill.mjs). It installs **only the missing skill**, targeting Codex, instead of loading every dependency up front. This requires a Codex environment with network/install permissions and Node.js 22.20+ for the latest skills CLI. Installing a skill does not guarantee host skill-discovery refresh in the current turn; the agent reads its instructions directly. No third-party skill is bundled.

```sh
# Inspect a planned installation without changing anything
node skills/art-direction/scripts/ensure-skill.mjs animate --dry-run

# Install one missing approved specialist globally for Codex
node skills/art-direction/scripts/ensure-skill.mjs animate

# Optional project-local installation
node skills/art-direction/scripts/ensure-skill.mjs remove-animations --scope project

# Run installer tests
node --test skills/art-direction/scripts/ensure-skill.test.mjs
```

**Specialists:** `anatomy`, `animate`, `find-animation-opportunities`, `animation-performance`, `improve-animations`, `review-animations`, and `remove-animations`.

**Anatomy exception:** The original Anatomy art style is preserved. If Anatomy is chosen, only its palette colors may change; do not restyle its shape, isometric geometry, lighting, shading, depth, composition or motion. Art Direction applies to the surrounding page, not the Anatomy figure.

**Permissions and limits:** The auto-installer is an allowlisted third-party downloader, not a network bypass. Installation may fail in restricted/sandboxed environments, and the fallback is the core Art Direction guide. The upstream `review-animations` skill currently has `disable-model-invocation: true`, which the orchestrator honors.


## Quick start

Copy this prompt into your agent to set up the art direction in your project.

```text
Set up the Art Direction guide in this project.

1. Read https://raw.githubusercontent.com/Behnamatefi/art-direction/main/art-direction.md
   and save a local copy as art-direction.md in the project.
2. Add a short note to AGENTS.md, creating it if needed, instructing agents
   to read art-direction.md before creating or reviewing visual work.
   Preserve existing instructions.
3. Apply the guide's appropriate medium-specific guidance when building.
   Check the result against its acceptance checklist and report any
   checks you could not verify.
```

Then describe what you want to make. For example:

```text
Build a three-section landing page for a coffee shop using the art direction.
Include a menu, opening hours, and a contact section.
```

The [guide](art-direction.md) covers English and Persian, dark and light themes, mobile, and print. An [agent skill](skills/art-direction/SKILL.md) is also available for compatible tools.

![Specimen — presentation, web and poster in dark and light, with the palette and type tokens](docs/art-direction-specimen.jpg)

---

## What it is

Most "design systems" handed to an AI are a palette and a font list. The model then invents everything that actually determines how the result feels: shadow depth, radius scale, how often to use the accent, what to do when the language flips.

This file removes those decisions. It is written as a specification with pass/fail criteria, not as inspiration.

The direction in one paragraph:

> Black is a material with layers, never a backdrop. Depth is 1px hairlines and 2–6% luminance steps — no shadows anywhere. One orange-red accent, used meaningfully on up to 15% of visible content elements. Optional semantic blue, green, amber and violet are permitted only when distinctions between concepts become clearer. Three type registers: tight grotesque for display and numerals, uppercase tracked monospace for all metadata, one serif appearing exactly once. Density comes from ruled rows with a label gutter, never from card grids. Dark is the canonical theme; light is the same design with swapped variables. English is the default, with additional languages chosen by the user. Interactive artifacts have a theme changer and multilingual artifacts have a language changer. All CSS logical properties, no physical directions.

---

## How to use it

**Whole file.** Paste `art-direction.md` into the context and describe the artifact. This is the intended path — the file's §0 tells the model to declare its medium and base size first, and to self-audit against §12 afterward.

```
[contents of art-direction.md]

Build a landing page for a developer tools company. Three sections.
```

**Compressed.** When the context is tight, §0 contains a one-paragraph preamble that carries most of the identity. Quality drops, but the result is still recognisably on-system.

**As a project file.** Drop it in a repo as `CLAUDE.md`, `.cursorrules`, or an agent skill and it applies to everything built there.

**Reviewing existing work.** §12 is a checklist an AI can run against code it did not write. Several lines are literal grep tests.

**Proposals and reports.** Use the [long-form web document profile](art-direction.md#105-long-form-web-documents) for a chaptered document with a summary strip, ruled scope rows, an interactive scenario comparison, and a milestone timeline. The profile also specifies the compact chapter strip, the offline HTML option, and the A4 print view.

---

## Contents

| § | | |
|---|---|---|
| 0 | How to use this file | Instructions for humans and for AI; the compressed preamble |
| 1 | The invariants | Ten rules that hold in every medium, size, theme and script |
| 2 | The concept | The one-sentence thesis |
| 3 | Color system | Dark/light tokens; orange up to 15% of meaningful elements; optional secondary hues gated by learning value |
| 4 | Typography | Four faces; ten registers defined as multipliers of a per-medium base |
| 5 | Language & theme | English/Persian and dark/light; Persian-specific typesetting; bidi; **the topbar component** |
| 6 | Layout & grid | The label rail, measure, the 4px spacing scale, two breakpoints |
| 7 | Surface, depth & imagery | No shadows; the four radii; why cards are rationed |
| 8 | Data expression | A fixed vocabulary — level meters, dot bars, dotted tracks, timelines |
| 9 | Motion | Purpose, opportunity finding, implementation, and review |
| 10 | Medium translations | Web, presentations, posters/print, mobile & touch, and **long-form web documents** |
| 11 | What would break this | Eleven named failure modes |
| 12 | Acceptance checklist | Check each selected language and theme; report results |

---

## Two things worth reading even if you never use the rest

**§5.2 — Persian, specifically, not Arabic.** Persian and Arabic share a script family and nothing else that matters. This section lists what every AI gets wrong: Arabic-Indic digits (`٠١٢`) instead of Persian (`۰۱۲`), Arabic `ك`/`ي` instead of `ک`/`ی`, missing ZWNJ half-spaces, Arabic-first fonts. Most are greppable, so they appear in §12 as zero-hit tests.

**§4 — registers, not sizes.** Type is specified as ten named registers with multipliers against a base you set per medium. The same scale produces a 15px web document, a 24px slide and an A1 poster without a second table.

---

## Language and theme

The agent asks whether you want English only or multiple languages. English is the default when no answer is available. Interactive work includes a theme changer, with dark and light for each selected language. Static exports have both theme variants.

---

## Provenance

Distilled from a working art direction, then generalised across media. The topbar in §5.5 is the real component from [learn-roadmap.netlify.app](https://learn-roadmap.netlify.app/), transcribed rather than redesigned.

The long-form profile is based on the *Custom Packaging Platform* design proposal.

The specimen image above is generated from the spec's own tokens — see [`tools/specimen.js`](tools/specimen.js).

## License

MIT — see [LICENSE](LICENSE). Use it, fork it, change the accent to green. Attribution appreciated but the license is what governs.
