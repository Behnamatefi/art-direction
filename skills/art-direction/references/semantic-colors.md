# Conditional semantic color in Art Direction

**Load this reference only when a diagram, chart, interactive learning module, comparison or classification might benefit from distinct category colors.** Do not load it for every artifact and do not treat secondary hues as default decoration.

## Division of responsibility

- **Orange** is the primary focal color. It highlights important actions, selection, decision-critical results and teaching-critical focus. Limit orange-bearing *meaningful visible units* to **15% per viewport, slide or poster**; this is a maximum, not a target. Count a conceptual unit once, rather than counting individual DOM or SVG paths.
- **Semantic secondary hues** distinguish different concepts, groups, paths or stages whose identity matters to comprehension. They are **optional** and do not count against the orange-only 15% limit. They still require a clear reason and restrained coverage.
- **Grayscale** is the default for hierarchy, axes, secondary information, controls, backgrounds, inactive states and unrelated content.

## Secondary Color Gate

Before introducing each secondary hue, answer:

1. What distinct concept, variable, category or relationship does it encode?
2. What confusion does color resolve compared to a grayscale figure with labels, spatial grouping, shapes or patterns?
3. Will that mapping remain stable across every state, slide, theme, language and legend?
4. Can someone still understand it in monochrome, with color-vision differences, and in print?
5. Are its actual marks readable against their actual background? Measure contrast for important text and graphics.

If these answers are weak, **do not introduce the hue**. Do not generate rainbow UI, and do not color decorative headings or cards merely to fill space.

## Source palette

Extracted from the supplied `reforge-product-strategy-roadmap-v5.html`, whose categories are Feature, Growth, Scaling and Expansion.

| Role | Dark theme | Light theme | Reforge meaning |
|---|---|---|---|
| `--semantic-blue` | `#3987E5` | `#2A78D6` | Feature |
| `--semantic-green` | `#199E70` | `#1BAF7A` | Growth |
| `--semantic-amber` | `#C98500` | `#EDA100` | Scaling |
| `--semantic-violet` | `#9085E9` | `#4A3AA7` | Expansion |

**Optional semantic washes from Reforge** (use only for genuinely meaningful grouping, never to decorate containers):

| Role | Dark wash | Light wash |
|---|---|---|
| Blue | `rgba(57,135,229,.14)` | `rgba(42,120,214,.10)` |
| Green | `rgba(25,158,112,.14)` | `rgba(27,175,122,.12)` |
| Amber | `rgba(201,133,0,.16)` | `rgba(237,161,0,.14)` |
| Violet | `rgba(144,133,233,.16)` | `rgba(74,58,167,.10)` |

Keep text neutral and high-contrast. A tinted group requires labels and structural grouping even when color is unavailable.

**The role meanings are not universal.** Reuse this palette as a set of possible distinct categories, not as a rule that blue always means "Feature" in unrelated projects. Add only the CSS variables required for a particular artifact inside its theme token blocks. Preserve consistent category mappings from first to last state.

## Contrast cautions

On the original base pages, approximate WCAG relative contrast ratios of these stroke colors are:

| Role | Dark on `#0B0B0C` | Light on `#F3F2F0` |
|---|---:|---:|
| Blue | 5.41:1 | 3.95:1 |
| Green | 5.78:1 | 2.52:1 |
| Amber | 6.41:1 | 1.94:1 |
| Violet | 6.29:1 | 7.65:1 |

The original **light-theme green and amber fail 3:1** against that page background, and light-theme blue fails 4.5:1 for normal text. Do not use these hues as small text by default. Instead use neutral readable text labels and colored markers with adequate shape, contrast, and structural redundancy. If contrast is essential, create and validate a **color-only adjustment** for the specific artifact. Never assume the sample tokens are automatically accessible on every surface.

## Application examples

- **Justified:** An educational roadmap in which four recurring learning streams must be scanned and tracked across an interactive timeline. Give each stream one consistent hue plus a name and distinctive marker.
- **Justified:** A complex multi-series model where neutral overlapping curves are difficult to distinguish. Use the fewest meaningful category hues, direct series labels, accessible marks, and orange only to signal selected focus.
- **Not justified:** A single timeline whose stages are already obvious from their order and labels. Keep it neutral; orange can optionally indicate the current stage.
- **Not justified:** Coloring every card heading, metric, navigation item or divider with different hues to appear lively.

## Anatomy exception

When the external Anatomy skill is used, **do not impose this palette on its figure**. Keep its visual style, camera, lighting, shadows, shading, shapes, construction and motion intact. Palette adjustments are the **only** style change allowed, and even those are optional and must be justified. The outer Art Direction document follows the normal rules, but the inner figure is governed by Anatomy.
