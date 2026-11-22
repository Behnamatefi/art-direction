# ART DIRECTION — GENERAL ORDINANCE

Authoritative. Applies to every artifact: websites, web apps, reports, presentations, posters, print, social graphics, diagrams. Do not deviate. When a medium is not named here, derive from §1–§9 rather than inventing.

---

## 0. HOW TO USE THIS FILE

**For a human:** §1 is the thesis. §2–§9 are the invariant system. §10 translates it per medium. §11 is what kills it. §12 is the pass/fail gate.

**For an AI:** treat this as a specification, not inspiration. Ask whether the user wants English only or multiple languages unless their request already specifies the answer. If clarification is unavailable, use English only. State the medium and base size, implement the theme changer, and check dark and light at relevant sizes. When multiple languages are requested, confirm which ones and verify each in both themes. After producing anything, run applicable §12 checks and report failures and checks that could not be verified.

For a proposal or report with several chapters, use the long-form web document profile in §10.5. Its palette, navigation, and interaction rules apply only to that profile. Run its additional checks in §12.

**Compressed preamble** (paste this above any prompt when the full file is too long):

> Black is a material with layers, never a backdrop. Depth is 1px hairlines and 2–6% luminance steps — no shadows anywhere. One orange-red accent, used where meaningfully helpful on up to 15% of visible content elements. Optional blue, green, amber and violet semantic colors distinguish educational concepts only when labels and grayscale alone are insufficient. Three type registers: tight grotesque for display and numerals, uppercase tracked monospace for all metadata, one serif appearing exactly once. Density comes from ruled rows with a label gutter, never from card grids. **Dark is the canonical theme; light is the same design with swapped variables.** **English is the default. Ask whether additional languages are wanted. Every interactive artifact has a theme changer; add a language changer when multiple languages are requested.** All CSS logical properties, no physical directions. English and Persian achieve the same effects by different native means, never by imitation.

---

## 1. THE INVARIANTS

These hold in every medium, at every size, in both themes, in both scripts. Everything else in this document is an implementation of them.

1. **Black is a material with layers, never a backdrop.** Surfaces separate by 2–6% luminance steps and 1px hairlines. Nothing casts a shadow. Not once.
2. **Orange communicates priority, not scarcity for its own sake.** Up to **15% of meaningful visible elements** can use orange, never as a quota or as a percentage of pixels. Use it for salient actions, selection, critical values and learning-critical states. Optional secondary semantic colors may distinguish concepts only when doing so materially improves comprehension. Keep the rest neutral; avoid decorative color, glows and saturated backgrounds.
3. **Type is zoned into three registers, hard.** A tight grotesque for display and numerals (near-zero to negative tracking); an uppercase monospace with wide tracking for *all* metadata; a single serif that appears exactly once per artifact. Numerals get the largest optical treatment — tabular, slashed zero.
4. **Density comes from ruled rows with a label gutter, not from boxes.** Category label in the rail, name in the content column, hairline under every row, micro-action flush to the end edge.
5. **Dark is canonical; light is the same design with swapped variables.** Design in dark, verify in light. Off-white, not white. Warm paper gray, not `#FFF`.
6. **English is the default.** Ask whether the user wants multiple languages. When requested, author complete parallel payloads for the selected languages. Apply the Persian rules in §5 when Persian is requested.
7. **A theme changer is present by default.** Interactive artifacts offer dark and light. Add a language changer when multiple languages are requested. For static exports, provide both theme variants.
8. **Every direction is logical, never physical.** `margin-inline-start`, `border-inline-start`, `text-align: start`. RTL must come free.
9. **Respect each script.** English and Persian reach the same effect by different native means when both are requested.
10. **Nothing announces itself.** Motion is a courtesy. Texture appears once. Restraint is the aesthetic, not a constraint on it.

---

## 2. THE CONCEPT

A black document that reads like paper and is structured like an instrument: everything is ruled, labelled and quiet. Orange marks consequential actions, selected states, important information and teaching-critical relationships without exceeding the 15% element budget. Secondary semantic colors are optional tools for genuine conceptual differentiation, not decoration.

The register is *executive-technical*. It should feel like a well-made measuring device or a private research memo — authoritative, unhurried, unbranded. It should never feel like a dashboard, a startup landing page, a slide template, or a conference poster.

---

## 3. COLOR SYSTEM

Every value is a custom property. **No literal color may appear anywhere except in the token block.** This includes SVG fills, chart colors, inline styles, and canvas draws.

**Dark is canonical.** It is the default state, the state you design in, and the state every review and screenshot happens in. Light is a derived variable set — never a separate design, never a separate stylesheet, never a layout fork. If a decision looks right in one theme and wrong in the other, the decision is wrong; fix the design, not the token.

### Tokens

**DARK — canonical, default on first load**

```
--surface-page      #0B0B0C
--surface-raised    #121214
--surface-sunken    #08080A
--surface-inset     #1A1A1D
--line-hairline     #202024
--line-strong       #2E2E33
--text-primary      #EFEDEA
--text-secondary    #A3A09B
--text-tertiary     #8A8681
--text-quiet        #5A5752
--accent            #FF4A1C
--accent-ink        #0B0B0C
--accent-text       #FF6B3D
--accent-wash       rgba(255,74,28,0.10)
```

**LIGHT — derived, second state**

```
--surface-page      #F3F2F0
--surface-raised    #FFFFFF
--surface-sunken    #EAE8E5
--surface-inset     #E6E4E1
--line-hairline     #E0DEDA
--line-strong       #C6C2BC
--text-primary      #111112
--text-secondary    #56534E
--text-tertiary     #6B6862
--text-quiet        #B4B0AA
--accent            #F0430F
--accent-ink        #0B0B0C
--accent-text       #B8330A
--accent-wash       rgba(240,67,15,0.08)
```

`--accent-wash` exists for one purpose: the fill behind a genuinely destructive confirmation, and print-safe highlighting. It is not a card background and not a hover state.

### The accent law

**BUDGET: at most 15% of meaningful visible elements may use orange** in any viewport of a scrolling document, slide or poster. This is a maximum, not a target, and is an element count rather than pixel-area coverage. More than one orange element is allowed when several meaningful priorities or learning states benefit. There is no mandatory minimum.

**Count consistently:** A meaningful element is a perceptually distinct content unit such as an action, label, metric, status, diagram concept, plotted data series or selected scenario. A cohesive component communicating one idea counts once, even if composed of SVG paths, text and a border. Ignore structural wrappers, invisible elements and repeated decorative geometry. Do not split neutral content into artificial elements to inflate the denominator. For each visible composition, enforce `orange units / meaningful units ≤ 0.15`; when strict integer counts are needed, use `floor(0.15 × meaningful units)`. Check responsive and interactive states independently. Even under the limit, avoid huge orange-filled regions that dominate the composition.

**Orange is permitted when it conveys:**

1. **Action and selection:** consequential primary action, selected tab, active scenario or current step. Use solid `--accent` with `--accent-ink` when a filled control is appropriate, or a restrained mark, edge or label.
2. **Decision-critical information:** important number, change, comparison result, urgent deadline or high-severity state. Multiple consequential units may be orange when the 15% budget permits them.
3. **Explanatory focus:** the active or changing part of an SVG diagram, user-controlled variable, key causal connection or selected data series when this helps the learner track the explanation.
4. **Functional orientation:** the current location in a learning flow, timeline or navigation when neutral styles would obscure it.

**Keep neutral unless explicitly meaningful:** ordinary body text, non-selected controls, incidental metadata, decorative icons, separators, backgrounds, broad panels, generic cards, repeated statuses and unrelated chart series. Do not make every header, link, KPI, legend item or hover state orange. Focus indicators remain `2px solid var(--text-primary)` with `outline-offset: 2px`, independent of selection. No accent gradients, glows, box shadows, flashing or hue-cycling animation. `--accent-wash` stays reserved for destructive confirmation and print-safe highlighting.

### Conditional semantic secondary colors

The default remains grayscale plus orange. **Secondary hues are optional and must materially improve learning**, not merely make an artifact more colorful. Introduce them only when they clarify distinct concepts, interacting systems, category recognition, multi-series comparisons or causal paths, and shape/labels/grayscale alone would communicate less clearly.

The Reforge Product Strategy learning document uses a reusable **reference palette** with four stable category mappings:

| Semantic token | Dark | Light | Reforge example |
|---|---|---|---|
| `--semantic-blue` | `#3987E5` | `#2A78D6` | Feature |
| `--semantic-green` | `#199E70` | `#1BAF7A` | Growth |
| `--semantic-amber` | `#C98500` | `#EDA100` | Scaling |
| `--semantic-violet` | `#9085E9` | `#4A3AA7` | Expansion |

For educational grouping, the Reforge example also uses low-opacity role washes (dark/light, respectively): blue `rgba(57,135,229,.14)` / `rgba(42,120,214,.10)`; green `rgba(25,158,112,.14)` / `rgba(27,175,122,.12)`; amber `rgba(201,133,0,.16)` / `rgba(237,161,0,.14)`; violet `rgba(144,133,233,.16)` / `rgba(74,58,167,.10)`. **Use these optional washes only on bounded category regions when the resulting grouping materially improves comprehension**, never as generic card or page decoration. Preserve readable neutral text and visible boundaries over any wash.

Add only the roles actually required as CSS custom properties in the dark and light theme token blocks. The Reforge category names are examples, **not universal meanings**. Define a stable category-to-color mapping for each new artifact and keep it consistent across legends, diagrams, scenarios, themes and languages.

**Secondary Color Gate:** Before using any hue, name the precise distinction it clarifies, justify why non-color encoding alone is less clear, and specify what the hue always represents. If no explanation is possible, leave it neutral. Use semantic hues sparingly on conceptual marks, plotted series, short labels, connections and meaningful learning states, **not** as generic backgrounds, decorative typography or rainbow UI. The **15% ceiling applies to orange alone**, not these conditional secondary colors. Secondary hues have no fixed percentage quota, but every use must pass the gate.

**Accessible equivalence:** Color is never the only way to distinguish categories. Also use explicit labels, distinct shapes, stroke styles or patterns; validate grayscale and print output. Verify contrast in the actual context (normally 4.5:1 for small text and 3:1 for essential graphics). These reference hues do not automatically meet text contrast in both themes, so adapt their application or add neutral-color labeling when necessary.

**Anatomy exception:** The Anatomy skill's original visual construction, isometric geometry, materials, lighting, shading, composition and motion are preserved. **Only palette colors may be adapted**, and only when justified. Art Direction's color rules apply to the surrounding page; neither the orange budget nor this semantic palette mandates recoloring the internal Anatomy figure.

### Grayscale is the working palette

Grayscale is the default hierarchy: `--text-primary` → `--text-secondary` → `--text-tertiary` → `--text-quiet` → `--line-strong` → `--line-hairline`. Orange identifies important or active units under its 15% limit. When teaching-critical distinctions cannot be clearly encoded using grayscale and labels alone, introduce only the necessary semantic secondary hues after the Secondary Color Gate.

---

## 4. TYPOGRAPHY

### Faces

One request:

```
Inter+Tight:wght@400;500;600
IBM+Plex+Mono:wght@400;500
Newsreader:ital,opsz,wght@0,16..72,400;1,16..72,400
Vazirmatn:wght@300;400;500;700
```

```
--font-latin: "Inter Tight", -apple-system, "Helvetica Neue", Arial, sans-serif;
--font-mono:  "IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace;
--font-serif: "Newsreader", Georgia, "Times New Roman", serif;
--font-fa:    "Vazirmatn", "Inter Tight", Tahoma, sans-serif;
```

- **Inter Tight** — grotesque; tabular figures and slashed zero via `font-feature-settings: "tnum" 1, "zero" 1`.
- **IBM Plex Mono** — the metadata voice. Tracked-out caps. Never used for running prose.
- **Newsreader** — appears **exactly once per artifact**: the single lead passage (executive summary, poster abstract, opening statement slide). Nowhere else, ever. Its scarcity is what separates "executive" from "technical".
- **Vazirmatn** — Persian, all registers. **Vazirmatn or nothing.** Arabic-first faces (Noto Naskh Arabic, Cairo, Tajawal, Almarai, Amiri, Dubai, IBM Plex Sans Arabic) are forbidden: they carry Arabic letterforms for ک / ی / گ / چ / پ / ژ, default to Arabic-Indic digits, and make Persian text read as foreign. Vazirmatn is also the only face in the stack with true Persian tabular numerals.

### Registers, not sizes

Sizes are derived, not memorized. Set one **base** (= BODY) per medium (§10), then apply the multiplier.

| Register | Face / weight | ×BODY | Line height | Tracking | Role |
|---|---|---|---|---|---|
| DISPLAY-XL | grotesque 600 | 4.0–8.0 | 0.98 | −0.035em | One statement per artifact. Slides & posters only. |
| DISPLAY | grotesque 600 | 2.93 | 1.06 | −0.03em | Title. One per screen. |
| NUMERAL | grotesque 600, tabular | 2.40 | 1.00 | −0.04em | Quantities. The largest optical treatment. |
| LEAD | **serif** 400 | 1.33 | 1.62 | −0.005em | The one serif passage. Once per artifact. |
| ITEM | grotesque 600 | 1.13 | 1.35 | −0.011em | Row and card titles. |
| BODY | grotesque 400 | 1.00 | 1.62 | −0.006em | Prose. |
| SECTION | **mono** 500 UPPER | 0.87 | 1.20 | +0.14em | Structural headers. |
| DATA | **mono** 400, tabular | 0.83 | 1.40 | +0.02em | Dates, counts, codes, IDs. |
| META | **mono** 500 UPPER | 0.73 | 1.40 | +0.16em | Labels, attribution, eyebrows. |
| MICRO | **mono** 500 UPPER | 0.67 | 1.20 | +0.12em | Badges, ticks, legends. |

There are **ten registers and no others.** If something doesn't fit, it belongs to one of these — decide which.

### Persian counterpart

Persian is derived from the Latin step by three mechanical rules, applied without exception:

1. **Size × 0.93** of the Latin px at every step.
2. **Line height +0.25 to +0.40** (Latin BODY 1.62 → Persian 1.92; Latin ITEM 1.35 → Persian 1.72). This keeps ruled rows the same height in both languages, which is the entire point.
3. **`[dir="rtl"] * { letter-spacing: 0 !important; }`** — tracking shatters Arabic-script joins.

Weights shift up: Persian carries structure with weight where Latin uses case and tracking.

| Latin register | Persian equivalent |
|---|---|
| DISPLAY 600 −0.03em | Vazirmatn 700, 0 tracking, +0.32 line height |
| NUMERAL 600 tabular | Vazirmatn 700 tabular, **Persian digits** |
| LEAD serif 400/1.62 | Vazirmatn **300** at 1.10× the Latin line height (~2.0) + extra air |
| SECTION mono UPPER +0.14em | Vazirmatn **700**, 0 tracking, +0.12 size |
| META mono UPPER +0.16em | Vazirmatn **500** + `--text-tertiary` + the rail rule |
| DATA mono tabular | Vazirmatn 500 tabular, Persian digits |
| MICRO mono UPPER | Vazirmatn 700 |

---

## 5. LANGUAGE & THEME

### 5.1 The two axes

English is the default language. Ask whether the user wants English only or multiple languages, unless already specified. If no answer is available, proceed in English. Each selected language has dark and light states, all of which must be verified:

| Axis | Primary | Second |
|---|---|---|
| Language | **English** (`en`, `ltr`) | **Persian** (`fa`, `rtl`) |
| Theme | **Dark** | **Light** |

Default state on first load: **English + Dark.** English-primary means English is the default content language. When Persian is selected, provide complete Persian content as described in §5.4.

### 5.2 Persian, specifically — not Arabic

Persian and Arabic share a script family and nothing else that matters here. Treating Persian as "Arabic support" is the single most common failure and it is visible to any Persian reader within one line.

**Digits.** Persian digits are **U+06F0–U+06F9** — ‏۰۱۲۳۴۵۶۷۸۹‏. Arabic-Indic digits (U+0660–U+0669, ٠١٢٣٤٥٦٧٨٩) are **forbidden**; ۴ ۵ ۶ in particular are drawn differently and are the giveaway. Convert at the data layer, never via a font feature or CSS.

**Letterforms.** Use Persian codepoints: **ک U+06A9** (never Arabic ك U+0643) and **ی U+06CC** (never Arabic ي U+064A or ى U+0649). Normalize input: any Arabic ك/ي arriving from a paste or an API must be mapped to ک/ی before render. Persian-only letters پ چ ژ گ must render in their Persian forms.

**ZWNJ is mandatory, not optional.** The half-space **U+200C** binds prefixes and suffixes: ‏می‌رود‏, ‏کتاب‌ها‏, ‏بزرگ‌تر‏, ‏نمی‌شود‏. Writing ‏میرود‏ or ‏کتاب ها‏ is a spelling error, not a style choice. Never allow a line break at a ZWNJ.

**Punctuation.** ‏،‏ (U+060C) not `,` · ‏؛‏ (U+061B) not `;` · ‏؟‏ (U+061F) not `?` · guillemets ‏«…»‏ for quotation, never `"…"`. Brackets and parentheses mirror automatically under bidi — **never hand-swap them**.

**Numeric separators.** Decimal ‏٫‏ (U+066B), thousands ‏٬‏ (U+066C), percent ‏٪‏ (U+066A). Not `.` `,` `%`.

**Dates.** Jalali (Shamsi) is the Persian calendar and the primary date system in Persian blocks: ‏۱۴۰۵/۰۵/۲۳‏. The Gregorian equivalent appears only where a mixed audience needs it, in parentheses, in `--text-tertiary`. English blocks use ISO `2026-08-14`. Never a Gregorian date in Persian digits, and never a Jalali date in Latin digits.

**Never** apply Arabic tashkeel/diacritics, Arabic-style justification with kashida, or Arabic month names.

### 5.3 The thesis

**The two scripts achieve the same effects by different native means, never by imitation.**

- English says *"label"* with uppercase + wide tracking + mono. Persian has no case and no monospace tradition, so it says *"label"* with weight 500 + `--text-tertiary` + the rail rule.
- English says *"calm considered passage"* with a serif. Persian says it with Vazirmatn Light at generous leading and extra air.
- English numerals: `2026-08-14` in mono. Persian numerals: ‏۱۴۰۵/۰۵/۲۳‏ in Vazirmatn tabular.
- Relative tokens: `in 13 d` / ‏۱۳ روز مانده‏.

Neither script is ever asked to perform the other's tricks.

### 5.4 Document language vs. block direction

Two independent mechanisms. Confusing them is the source of most bidi bugs.

**Document language** is the toggle state. It sets `lang` and `dir` on the root, selects which side of every content payload renders, and switches `--font-latin` → `--font-fa` in the type stack. It is a user choice.

**Block direction** is a property of the content itself and overrides the document language for that block only. An English document quoting a Persian sentence still renders that sentence `dir="rtl" lang="fa"`; a Persian document citing an English product name still renders it `dir="ltr" lang="en"`.

Detection is **per content block, not per document**: compute the Perso-Arabic character ratio of the string; ≥ 0.35 → `dir="rtl" lang="fa"` on that block, plus Persian digit conversion on that block. `dir="auto"` is insufficient — mixed numerals defeat it.

**Content architecture.** Every string in the artifact lives in a data layer as a pair:

```js
{ en: "Open action items", fa: "کارهای باز" }
```

Never a machine translation performed at render time. Never a missing `fa` silently falling back to English in production copy — a missing Persian string is a build failure, not a degradation. Numbers, dates and units are stored once, in a neutral form, and formatted per language at render.

**Layout must not reflow when the language changes.** Row heights, section heights and grid tracks stay identical. This is precisely what the ×0.93 size rule and the +0.25–0.40 line-height rule in §4 exist to guarantee — verify it by toggling and watching whether any hairline moves. If one does, the type scale was applied wrong.

### 5.5 The two toggles

**The theme changer is present by default.** Add the language button only for multilingual artifacts. The topbar holds the available preference controls. The example below shows a multilingual configuration.

#### The topbar — reference implementation

This is the canonical component. Reproduce it; do not redesign it.

```html
<header>
  <div class="topbar">
    <div class="topbar-actions">
      <button class="theme-btn" id="langBtn" aria-label="Switch language">فارسی</button>
      <button class="theme-btn icon" id="themeBtn" aria-label="Light mode" title="Light mode">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <circle cx="12" cy="12" r="4.6" fill="currentColor" stroke="none"/>
          <path d="M12 2v2.6M12 19.4V22M4.93 4.93l1.84 1.84M17.23 17.23l1.84 1.84
                   M2 12h2.6M19.4 12H22M4.93 19.07l1.84-1.84M17.23 6.77l1.84-1.84"/>
        </svg>
      </button>
    </div>
  </div>
</header>
```

```css
.topbar         { display: flex; justify-content: flex-end; align-items: center; gap: 14px; }
.topbar-actions { display: flex; align-items: center; gap: 8px; }

.theme-btn {
  appearance: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding-inline: 14px;
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 12px;
  color: var(--text-quiet);
  background: var(--surface-inset);
  border: 1px solid var(--line-hairline);
  border-radius: 0;
  transition: color .14s ease, transform .1s ease;
}

/* Uppercase + tracking are scoped to Latin. Persian never receives either. */
html[lang="en"] .theme-btn { text-transform: uppercase; letter-spacing: .06em; }

.theme-btn.icon      { width: 38px; padding-inline: 0; }
.theme-btn.icon svg  { display: block; }
.theme-btn:active    { transform: scale(.97); }
.theme-btn:focus-visible { outline: 2px solid var(--text-primary); outline-offset: 2px; }

/* Hover is an enhancement, never the only affordance. */
@media (hover: hover) and (pointer: fine) {
  .theme-btn:hover { color: var(--text-primary); }
}

/* Touch: 38px is below the 44px minimum target. */
@media (pointer: coarse) {
  .theme-btn      { height: 44px; padding-inline: 16px; }
  .theme-btn.icon { width: 44px; }
}
```

**Why it is built this way**

- **Square buttons, not a segmented pill.** `border-radius: 0`. The topbar is the one place the system's squareness is most visible, and rounding it would make it read as chrome. It is **not** one of the 999px elements.
- **38×38 for the icon button, 38px tall for the text button.** One height, two widths.
- **`--surface-inset` fill on a `--line-hairline` border.** The buttons sit *into* the page, not on top of it — depth by luminance step and hairline, per §7.
- **Resting color is `--text-quiet`; hover lifts to `--text-primary`.** That is the entire state model. No background change, no border change, no accent, ever. Hover is behind `(hover: hover) and (pointer: fine)` — on touch it simply does not exist, and the `:active` press carries the feedback.
- **44px on coarse pointers.** 38px is a mouse dimension. The topbar never becomes a hamburger, a drawer, or an overflow menu — at any width the available controls stay at the inline-end.
- **`transform: scale(.97)` on `:active`, 100ms.** A subtle press affordance, subject to the frequency and accessibility guidance in §9.
- **`html[lang="en"]` scoping is the mechanism, not a detail.** Uppercase and `.06em` tracking live behind the Latin selector so Persian gets neither, automatically. This is §5.7 enforced in CSS rather than by discipline.

**Labels**

- **Language button** shows the language you will switch **to**, written in its own script: ‏فارسی‏ while English is active, `English` while Persian is active. Never a flag, never a globe icon, never a two-letter code.
- **Theme button** shows the theme you will switch **to**: a sun (15×15, `stroke-width: 2.2`, `currentColor`) while dark is active, a moon while light is active. `aria-label` and `title` name the destination, e.g. `"Light mode"`.

**Behaviour**

- Theme and any selected language persist to `localStorage`. With no stored preference, use **English + Dark**. If storage is unavailable, controls still work for the current page.
- Real `<button>` elements, keyboard-operable, labelled in the current document language.
- Theme change is a 180ms cross-fade of color variables only. Language change is a hard swap. Keep preference changes immediate for frequent and keyboard use.
- **Hidden in print and in any exported static form** (`display: none`) — the export has already resolved to one state.

**Placement, per medium** — always logical, never `right:` or `left:`:

| Medium | Placement |
|---|---|
| Web | In flow, first child of `<header>`. `justify-content: flex-end` puts it at the inline-end; RTL mirrors it for free. Not fixed, not sticky. |
| Presentation | In the footer spine, at the **inline-end** of the hairline, opposite the section index. Identical on every slide, never animated. |
| Poster (screen/HTML) | Same as web — top of the header block, inline-end. |
| Poster (print) | Cannot exist — see §10.3 for the four-variant export set. |

### 5.6 Direction hygiene

**No physical CSS directions anywhere.** Every margin, padding, border, alignment, radius pair and transform origin must be logical:

- `margin-inline-start` / `margin-inline-end`, never `margin-left` / `margin-right`
- `padding-block-start`, `border-inline-start`, `inset-inline-end`
- `text-align: start` / `end`, never `left` / `right`
- `border-start-start-radius` for asymmetric corners

Grid + logical properties means the rail flips automatically. **Never write a separate RTL grid.** If you find yourself writing `[dir="rtl"]` overrides for layout, the LTR layout is wrong.

### 5.7 Persian prohibitions

- No `text-transform: uppercase` (silently no-ops; the label loses its only signal).
- No `letter-spacing`, ever.
- No Vazirmatn Light below 15px on a dark surface.
- No Latin digits inside a Persian sentence — and no Arabic-Indic digits anywhere.
- No Arabic ك / ي codepoints; no Arabic-first font; no tashkeel; no kashida justification.
- No missing ZWNJ in prefixed or suffixed words.
- No monospace face for Persian metadata.
- Motion respects the reading direction (see §9).
- No English left in a Persian render because the string was never translated.

---

## 6. LAYOUT & GRID

### The rail

One column of content with a **label rail doing real work** — this is the signature structure and it survives into every medium.

```
grid-template-columns: 180px minmax(0, 720px);
column-gap: 48px;
max-width: 948px;
margin-inline: auto;
padding-inline: 32px;
```

The rail holds: section index (`03` / ‏۰۳‏), count chip, owner, date, status. The content column holds prose and titles only. The eye scans one clean column of metadata down the page.

### Measure

Latin body never exceeds **68ch**. Persian body never exceeds **640px**. Prose never spans the full content column width — the difference between the rule and the text is part of the design.

### Rhythm

- **Spacing scale (4px base):** `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. **No other values exist.** Not 10, not 18, not 20-except-as-noted, not 40.
- **Rows:** 20px block padding, hairline separator, no margin.
- **Cards:** 20px 24px padding.
- **Sections:** 64px top, 64px bottom, closed by a hairline that **bleeds past the content column to the page edge minus 32px**. A full-width rule against a narrow text column reads as instrument panel, not blog. This single move does more than any other.
- **Header:** 96px top padding; title; then a metric strip as an *n*-up grid of cells separated by **vertical hairlines only** — no boxes, no cards. A rule **above** the numerals, not below. Label in mono caps above the numeral.

### Breakpoints

**Two breakpoints. Exactly two.** Each has one job. Resist adding a third.

| Breakpoint | Name | What changes |
|---|---|---|
| **≤ 900px** | Rail collapse | The rail collapses; its contents become an inline mono meta line above the item title, joined by ` · `. Page inline padding 32 → 24px. Section padding 64 → 48px. |
| **≤ 640px** | Compact | Phone. Multi-column strips stack, display type steps down, touch targets grow. Page inline padding 24 → 20px. Section padding 48 → 32px. |

Everything between and above is fluid — `minmax()`, `clamp()` and the 68ch measure do the work. Full mobile specification in **§10.4**.

---

## 7. SURFACE, DEPTH & IMAGERY

**`box-shadow` does not appear anywhere in this stylesheet.** Depth = 1px hairline + 2–4% luminance shift + negative space. There is no other mechanism.

### Radii

| Value | Applies to |
|---|---|
| **0** | Rules, table cells, metric strips, header block, full-bleed elements, images |
| **4px** | Chips, initials tiles, status squares, small tokens |
| **10px** | Cards and interactive rows |
| **999px** | Exactly one element: the overdue/urgent pill. Nothing else in the system is round — the topbar toggles are radius 0 (§5.5). |

Nothing else is round. Never 6, 8, 12, 16, 20.

### Cards are rationed

Only sections whose items are **genuinely heterogeneous and non-comparable** get cards — typically no more than three per artifact (risks, open questions, qualitative insights). Everything comparable and scannable — people, topics, decisions, tasks, dates, steps — is **hairline-ruled rows directly on the page**.

This is the highest-leverage decision in the direction. Card grids turn a report into an admin panel.

### Texture

**One texture, one place.** A 1px dot grid at 24px pitch, 3% opacity, radial-gradient, on the header block only. §10.5 may place its single grid on the page instead. Hidden in print. There is no second texture, no noise layer, no gradient mesh, no blur.

### Imagery

Images are rare and always earned. When present:

- Full-bleed or hairline-framed. Radius 0. No shadow, no rounded corners, no border-radius mismatch with the grid.
- Desaturated toward the palette: `filter: grayscale(1) contrast(1.05)` as the default treatment; full color only when the image *is* the content.
- Never behind text without a solid `--surface-page` block carrying that text.
- **No photographic avatars.** Identity is a 24px rounded-square (4px radius) initials tile, `--surface-inset` fill, mono 10px uppercase / Vazirmatn 11px 700, `--text-secondary`, with the name beside it.

### Icons

Prefer type and rules. When unavoidable: 1.25px stroke, `currentColor`, sizes 16 / 20 / 24 only, never decorative. An icon may use orange or a semantic hue only when it itself conveys a meaningful selected, urgent or concept-coded state and satisfies §3. An icon that could be a word should be a word.

### Interaction

- **Hover:** row background steps to `--surface-inset` over 120ms. No transform, no border change, no color change, no shadow.
- **Focus:** `2px solid var(--text-primary)`, `outline-offset: 2px`. Never accent. Never a glow.
- **Active/selected:** a 3px `border-inline-start` in `--text-primary`, or `--accent` if it helps distinguish selection and remains within the 15% visible-element budget.
- **Disabled:** `--text-quiet` and nothing else. No opacity tricks.

---

## 8. DATA EXPRESSION

A fixed vocabulary of devices. Use these; do not invent new ones.

**LEVELS / SEVERITY — a meter, not a colored blob.** Three bars, 4×10px, 3px apart, radius 1px. High = 3 filled `--accent`; Medium = 2 filled `--text-primary`; Low = 1 filled `--text-tertiary`; unfilled = `--line-strong`. The word beside it in MICRO. The row carries `border-inline-start: 3px solid` — `--accent` for high, `--line-strong` for medium, `transparent` for low. Severity is a **structural edge**: it survives monochrome print, and being a logical property it never breaks in RTL.

**COUNTS.** Headline counts in NUMERAL, tabular, slashed zero, under a META label, above a hairline ceiling. Per-section counts as an end-aligned chip on the section header: `--surface-inset` fill, 4px radius, mono 11px, no border.

**DATES.** Always tabular. `2026-08-14` in mono for Latin blocks; ‏۱۴۰۵/۰۵/۲۳‏ in Vazirmatn for Persian blocks. Followed by a relative token in `--text-tertiary`.

**TIMELINES / DEADLINES ARE NOT A LIST OF ROWS.** One hairline running the width of the content column; dates as 1px tick marks above it; labels below; "now" as a 1px accent vertical with a 5px accent square at its head. Overdue items sit before the marker and may carry an accent pill where meaningful and within the 15% budget. Educational timelines may also apply stable semantic category colors when they pass the §3 gate.

**PROGRESS / SHARE.** A 2px rule under the title: the filled portion in `--text-secondary`, the remainder as `border-bottom: 2px dotted var(--text-quiet)`. Dotted/dashed tracks are the system's language for *remaining / elapsed*. Never a rounded progress bar. A decision-critical progress state may use orange within the 15% budget; routine progress stays neutral.

**MAGNITUDE.** A dot bar — up to 12 solid 3px squares at 3px pitch in `--text-secondary`, overflow as `+n` in mono. Small solid squares are the system's data atoms.

**BINARY STATUS.** A 14px square, `1px solid var(--line-strong)`, 3px radius. Done = filled `--text-primary` with a `--surface-page` checkmark. **Never accent — completion is not urgency.**

**CHARTS.** Grayscale by default, hairline axes, no grids except a baseline, direct labels where practical, tabular mono figures and restrained geometry. A chart is a ruled table that happens to have geometry. Orange can identify the active/critical series within §3's budget. Conditional secondary hues can distinguish educationally meaningful categories only after the Secondary Color Gate; retain labels or patterns for non-color comprehension. Functional data stays static; §9 permits explicitly educational transitions when truthful.

**THE CALM SECTION.** At least one section must have no device at all beyond the rail: index, title, one-line rationale in `--text-secondary`. Build it in deliberately. It is what makes the instrumented sections legible.

---

## 9. MOTION

Motion makes a change legible, confirms an action, establishes spatial relationships, or explains a concept. Match the visual language and the frequency of use. A rare editorial moment can be expressive when it serves the content.

### Find opportunities

Inspect the product, its interaction frequency, existing motion tokens, and user flows. Consider press feedback, changing states, popovers, occasional list changes, gestures, and first-use moments. Gate each candidate by frequency, purpose, timing, and whether it helps the task. Reject frequently repeated or keyboard-triggered motion and decorative movement of information users need to read. Suggest up to five high-value opportunities with location, purpose, frequency, exact properties, timing, easing, and reduced-motion behavior. Mention representative rejected candidates and why. An opportunity review is read-only unless the user also asks for implementation.

### Craft and implementation

- Use a responsive ease-out such as `cubic-bezier(0.23, 1, 0.32, 1)` for entrances and exits, and `cubic-bezier(0.77, 0, 0.175, 1)` for deliberate on-screen movement. Use immediate state changes for frequently repeated and keyboard-triggered actions.
- Start press feedback around 100–160ms, tooltips at 125–200ms, and dropdowns at 150–250ms. Keep ordinary UI transitions under 300ms. Rare explanatory sequences can run longer when needed and must never delay interaction.
- Prefer transforms and opacity. Profile paint-heavy effects and layout animation on target devices when unavoidable. Avoid `transition: all`, unnecessary layers, and unsupported claims that any animation technique is always GPU accelerated.
- Make rapidly toggled and gesture-driven motion interruptible. Prefer transitions for retargetable UI and use springs when gesture physics add value. Anchored surfaces originate at their trigger. Dialogs originate at their center. Avoid scaling from zero.
- Use subtle press feedback, such as `scale(.97)`, where it fits. Keep focus, labels, state, and essential content available immediately. Only use hover motion for fine pointers that support hover.
- Respect reading direction when motion conveys direction. Use small, purposeful staggers only for occasional grouped entrances. Avoid looping decoration and animated numerical data in functional interfaces.
- Honor `prefers-reduced-motion`: remove spatial movement and offer an immediate or gentle opacity transition. Ensure animated content remains accessible if scripts fail and appears in print.

### Review

Review each motion for purpose, frequency, timing, easing, origin, interruption, performance, reduced motion, and cohesion. Prefer removing or reducing unnecessary motion before polishing it. Inspect rapid reversal, keyboard and touch behavior, and reduced-motion states. When visual feel cannot be observed, report it as unverified; inspect slowed playback and real devices where feasible. For an explicit motion review, report findings in a Before / After / Why table with locations and a verdict.


### Educational motion and progressive skill routing (HTML/SVG)

For tutoring, conceptual explainers, simulations and interactive learning, use `skills/art-direction/references/learning-motion.md` and `skills/art-direction/references/skill-routing.md`. If the full repository is not available, use the companion files supplied with the installed skill. The rest of §9 remains the default for ordinary interfaces.

**Learning Value Gate before motion:** State what the learner should be able to explain or predict. Compare static explanation, interactive-static diagram, controlled playback and interactive animation. Motion is permitted only when it communicates meaningful temporal/causal relationships, transformations, sequences or dependencies more clearly than a static alternative, without misleading intermediate states or accessibility costs. If unsure, choose static. An unanimated explanation is a successful outcome.

**Prefer interactive learning when educationally justified.** Learners should be able to change relevant inputs, inspect outcomes, compare scenarios or step through a process, with interruption, reversal and reset where valuable. Do not require play/pause or sliders when they add nothing. Maintain a single authoritative model for controls, geometry, numbers and labels. Use semantic HTML and accessible SVG; preserve static/print and reduced-motion alternatives.

**Chart exception:** The §8 ban on gratuitous chart animation remains in force for dashboards, reports and functional data. Educational charts may interpolate between explicitly user-selected states only when a transition genuinely teaches a relationship, does not fabricate observations, maintains stable axes and units, and makes exact values immediately available. These may use orange to focus attention or carefully selected semantic category colors after §3's Secondary Color Gate. Animating every mount, refresh or readout remains forbidden.

**Optional specialist skills:** The Art Direction skill acts as a progressive orchestrator in Codex. It routes only approved, necessary tasks to the specific installed skills `find-animation-opportunities`, `animate`, `anatomy`, `animation-performance`, `improve-animations`, `remove-animations`, and `review-animations`. Missing allowlisted skills may be installed on demand by `skills/art-direction/scripts/ensure-skill.mjs`, subject to Codex sandbox and network permission. Never silently install all skills or claim automatic invocation that the host prohibits. `review-animations` currently disables model invocation; respect this restriction.

**Anatomy artwork exception:** When the Anatomy specialist is justified, retain its exact visual character, isometric composition, materials, lighting, depth, shadows, shading structure, components and animation craft. Only color palette adaptation is permitted. The Art Direction rules govern the surrounding page, not the inner Anatomy figure. Within the figure, Anatomy-specific visual directives take precedence over the default flat/grayscale, no-shadow or no-gradient restrictions. Preserve tonal relationships when changing colors.


---

## 10. MEDIUM TRANSLATIONS

The system is invariant; base size, canvas and purposeful color application vary by medium. The 15% ceiling for orange and the optional semantic-color gate apply across all media. **Every interactive medium ships a theme changer** (§5.5), defaults to **English + Dark**, and is verified in both themes for each selected language. Static exports include both theme variants.

### 10.1 WEB / HTML

**Base (BODY):** 15px for documents and reports; 17px for marketing and landing pages.
**Canvas:** 948px max; inline padding 32 → 24 → 20px; breakpoints at 900px and 640px (§6, §10.4).
**Accent budget:** up to 15% of meaningful visible elements per viewport. Semantic secondary hues are opt-in under §3.

- The full §6 rail applies as written.
- Section-closing hairlines bleed to page edge minus 32px.
- Header block carries the dot grid; nothing else does.
- The topbar (§5.5) is the first child of `<header>`, in flow, inline-end aligned. Nothing on the page is `position: fixed` or sticky.
- Everything is a hairline-ruled row unless §7 earns it a card.
- No sticky headers, no scroll-spy, no back-to-top button, no cookie-banner-shaped anything.
- Language switching must not scroll-jump: preserve scroll position by anchoring to the nearest section, not by pixel offset — the two languages have identical section heights but not identical intra-paragraph heights.

Long proposals and reports may use the chapter navigation and document components in §10.5.

**PRINT (applies to any web artifact):**

```
@page { size: A4; margin: 16mm 14mm; }
```

Print defaults to the light palette and hides the controls. Provide dark and light variants for static deliverables. This is not a preference overriding dark-canonical — ink is not light, and a dark artifact printed on white stock is a different object. The dark theme is the screen truth; light is the paper truth. Print in whichever language is currently active; to deliver both, export twice. Keep the accent with `print-color-adjust: exact`. `break-inside: avoid` on cards and item rows; `break-after: avoid` on section headers. Hairlines become `0.5pt solid #C9C6C1`. Dot grid, theme toggle and hover affordances become `display: none`. **Force `.reveal { opacity: 1 !important; transform: none !important; }`** — an un-fired `IntersectionObserver` is the classic cause of a blank printed PDF.

### 10.2 PRESENTATIONS

**Canvas:** 1920×1080 (16:9). All geometry in px at that canvas, scaled as a unit.
**Base (BODY):** 24px. → DISPLAY 70px, NUMERAL 58px, LEAD 32px, ITEM 27px, SECTION 21px, DATA 20px, META 17.5px, MICRO 16px. DISPLAY-XL 96–192px for statement slides.
**Margins:** 96px all sides. Content never enters the margin. Bottom 128px reserved for the rail line and slide index.
**Accent budget:** up to 15% of meaningful visible elements per slide, with no minimum and no mandated quota of orange-free slides. Use color where it improves clarity; otherwise keep it neutral.

- **The rail becomes a persistent footer rule:** a hairline across the full canvas 128px from the bottom, with section index, section title in META, and slide number in DATA below it at the inline-start, and **the theme control and any language control at the inline-end**. It is the deck's spine — identical on every slide, never animated. In RTL the whole spine mirrors for free.
- **For multilingual decks, use one document with parallel language payloads.** Slide count, slide order and slide archetypes are identical in both; only the payload changes. If a slide only works in English, it is not a slide.
- **Slide archetypes, and only these:**
  1. **Statement** — DISPLAY-XL, one line, `--text-primary`, on `--surface-page`. Nothing else on the slide. No subtitle.
  2. **Lead** — the serif passage. Occurs exactly once in the deck, usually slide 2.
  3. **Metric strip** — 2–4 NUMERAL cells separated by vertical hairlines, META labels above, a rule above the numerals. A consequential metric can use an orange block when it helps reading and stays within the 15% per-slide limit.
  4. **Ruled list** — up to 7 rows, hairline separators, rail label at the start edge of each row. Never bullet glyphs; the hairline is the bullet.
  5. **Two-column** — 180px rail + content, exactly as §6, scaled.
  6. **Full-bleed image** — radius 0, no caption overlay; caption sits below in META on `--surface-page`.
  7. **Section divider** — SECTION register centered on `--surface-sunken`, with the index numeral in NUMERAL at `--text-quiet`.
- **Never:** a 3-up card grid of equal boxes. A bulleted list with glyphs. A logo on every slide. Slide-number chrome beyond the DATA numeral. Speaker photos. Icons standing in for concepts.
- **Transitions:** use a hard cut or purposeful motion following §9. Keep slide content immediately accessible.
- **Dark is the default deck.** Light is one toggle away for a bright room or a printed handout — never a separately built deck.
- **Build decks as HTML, not `.pptx`, whenever possible.** The toggles, the logical properties and the per-block direction detection are the whole system, and none of them survive a slide binary. If a `.pptx` is contractually required, export each selected language in dark and light — and treat the HTML as the source of truth.

### 10.3 POSTERS & PRINT

**Base (BODY):** long edge ÷ 70. (A2 ≈ 24pt, A1 ≈ 34pt, A0 ≈ 48pt.)
**DISPLAY-XL:** long edge ÷ 14 to ÷ 9.
**Margins:** long edge ÷ 20, equal on all sides.
**Accent budget:** up to 15% of meaningful visible elements across the poster, focused on the most important information; zero orange is valid.

**Source, states and deliverables.** A poster is authored as **one HTML file with the theme changer and, when multilingual, the language changer live** — that is the source of truth, the review artifact, and the screen deliverable. Print is an export from it, not a separate build. The print deliverable set is **PDFs for each selected language in dark and light**, with the toggles hidden. Which one goes to the printer is a production decision (stock, ink coverage, budget), not an art-direction one.

- **Dark remains canonical on screen.** For paper, light is the practical default — full-coverage black on large format is expensive, unreliable and shows every handling mark. Dark print is reserved for genuinely black stock or a controlled press run.
- **The rail becomes a column of the grid:** a fixed-width metadata column running the full height at the start edge, carrying the index, the date, the authorship, the section labels — with a single hairline separating it from the content column, running the full poster height. This is the structural signature at poster scale.
- **Ruled rows scale up.** A poster is a document read from 1.5m, not a collage. Sections close with full-bleed hairlines exactly as §6.
- The single serif LEAD passage is the abstract or standfirst. Set it at 1.33× BODY with generous air around it — the air is what makes it read as the entry point.
- **Never:** boxes, panels, or "sections" with fills. Rotated type. Text on images. More than one texture. Any decorative element that is not carrying information.
- Hairlines print at 0.5pt; anything thinner disappears. Keep the accent with `print-color-adjust: exact` and specify it as a spot or a CMYK-safe conversion.
- Bleed 3mm, crop marks on, `--surface-page` extends into the bleed.

### 10.4 MOBILE & TOUCH

Mobile is not a fourth medium. It is a **rendering context that every medium must survive**, and it is where this direction is most fragile: the rail has nowhere to go, hairlines get lost on small dense screens, and hover — which the system uses for its only interaction feedback — does not exist.

**Design mobile at 390×844 first, then widen.** The rail is a reward for having space, not a starting assumption. A layout designed at 1440 and squeezed always ends up with a meta line that wraps to three rows.

#### Device foundations

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

```css
html { -webkit-text-size-adjust: 100%; }
body { min-height: 100dvh; -webkit-tap-highlight-color: transparent; }

.page {
  padding-inline: max(20px, env(safe-area-inset-left), env(safe-area-inset-right));
  padding-block-end: max(32px, env(safe-area-inset-bottom));
}
```

- **`100dvh`, never `100vh`.** `100vh` is wrong by the height of the mobile URL bar and produces a scroll no one asked for.
- **`env(safe-area-inset-*)` applied symmetrically** via `max()`, so the notch never shifts the layout asymmetrically and RTL is unaffected. These are the only physical-direction tokens permitted anywhere in the system, and only inside `max()`.
- **`-webkit-tap-highlight-color: transparent`.** The grey iOS flash is replaced by the `:active` `scale(.97)` from §9.
- **`overflow-x: hidden` is not a fix.** It hides a bug. Find the element that overflows — it is almost always a `min-width: auto` grid child missing `minmax(0, …)`.
- **Never disable zoom.** No `maximum-scale`, no `user-scalable=no`.

#### Touch

- **Minimum target 44×44 CSS px, with 8px of clear space between adjacent targets.** 44 is a platform constant, not a spacing value — it is the single exemption from §6's scale.
- **Every hover state sits behind `@media (hover: hover) and (pointer: fine)`.** A hover state that is also the only way to discover something is a defect on touch.
- Row `:active` = background to `--surface-inset`, instantly. The 120ms hover transition is a pointer nicety; touch needs the state now.
- **Avoid unnecessary custom gestures and pull-to-refresh interception. Use accessible, interruptible gesture interactions when the product needs them.** The artifact is a document; it scrolls.
- No `:hover`-revealed micro-actions in rows. If an action matters it is always visible; if it does not, it is not in the row.

#### Type on mobile

Registers do not change — only their base and, for the two largest, their multiplier.

- **BODY never goes below 15px**, in either script. Below that, Vazirmatn Light is already banned (§5.7) and iOS zooms form fields.
- **DISPLAY and DISPLAY-XL compress; everything else holds.** Fluid, not stepped:

```css
--display:    clamp(30px, 7.2vw, 44px);   /*  2.0× → 2.93× BODY */
--display-xl: clamp(44px, 12vw, 80px);
--numeral:    clamp(28px, 6.5vw, 36px);
```

- **META, DATA and MICRO never shrink.** They are already at the legibility floor, and tracked-out 10px mono on a phone is the first thing to become unreadable. If a metadata line does not fit, cut words — not size.
- Persian keeps ×0.93 and the +0.25–0.40 line-height at every step. The larger Persian leading matters more on narrow screens, not less.
- Latin's 68ch measure is unreachable below ~640px and simply stops binding; the container is the measure.

#### Layout at ≤ 640px

| Element | Desktop | Mobile |
|---|---|---|
| Rail | 180px column | Collapsed at ≤900px into an inline META line above the item title, joined by ` · `. At ≤640px it may wrap to two lines — never three. Cut fields before allowing a third. |
| Metric strip | *n*-up, vertical hairlines | 2-up grid with vertical **and** horizontal hairlines. Below 400px, stacked rows separated by horizontal hairlines. The rule above the numerals survives in both. |
| Cards | 10px radius, grid | Full-bleed width, radius 10px kept, stacked. Never a horizontal scroller. |
| Timeline / deadline rule | Horizontal hairline, ticks above | **Rotates to vertical**: one hairline running the block axis at the inline-start, ticks as 1px marks off it, labels in flow. The "now" marker becomes a horizontal 1px accent line with its 5px square at the inline-start. |
| Section hairline | Bleeds to page edge − 32px | Bleeds to page edge − 20px. It must still bleed; a hairline that stops at the text column loses the whole instrument-panel effect. |
| Progress / share rules | 2px under title | Unchanged. These scale down better than any other device. |
| Dot bar (magnitude) | up to 12 squares | Cap at 8, overflow as `+n`. |
| Owner tile | 24px in the rail | 24px inline, first item on the collapsed META line. |
| Tables | — | Never. They were already ruled rows (§7); that is why this section is short. |

- Section padding steps 64 → 48 → 32px. Row padding stays 20px — compressing it is what turns a document into a settings screen.
- Hairlines stay 1px. Do not "improve" them to 0.5px on high-DPI: they disappear at arm's length outdoors, and the system has no shadow to fall back on.
- **The topbar does not change shape** — theme and any language buttons stay inline-end, 44px tall on touch. No hamburger.

#### Presentations on mobile

A 16:9 deck does not reflow. It scales.

- Render slides onto a fixed **1920×1080 stage** and scale it as a unit: `transform: scale(min(100vw/1920, 100dvh/1080))` with `transform-origin: center`. All the geometry in §10.2 then holds unchanged.
- Portrait letterboxes onto `--surface-sunken`. Do not rotate the phone for the user, do not show a "please rotate" screen.
- **Offer a portrait reading mode**: the same slide payload rendered as stacked ruled sections — one slide per section, footer spine becomes the section rail. Statement slides become DISPLAY headings; metric strips become the mobile 2-up. This is a re-render of the same data layer, not a second deck.
- Advance by tap zones (inline-start third = back, rest = forward) or by scroll in reading mode. No swipe.

#### Posters on mobile

A poster fit to a 390px screen is unreadable — DISPLAY-XL at long-edge ÷ 12 becomes 32px and BODY becomes 5px.

- **Never ship a poster to mobile as a fit-to-width image or PDF embed.**
- The HTML source (§10.3) renders instead as a **stacked reading view**: the full-height metadata column becomes an inline META line, sections stack in reading order, DISPLAY-XL falls to the mobile `--display-xl` clamp, and the purposeful color hierarchy remains legible with the 15% orange ceiling.
- Offer the print PDF as an explicit download, not as the mobile view.

#### Motion on mobile

- Entry reveals follow §9 and cap the stagger at **3 steps** — a long stagger on a short viewport means the last item animates after the user has already scrolled past it.
- Avoid continuous scroll-linked decoration on mobile. Profile any necessary scroll-linked explanation.
- Theme cross-fade stays 180ms. Language swap stays hard.
- `prefers-reduced-motion` is more commonly set on phones. Verify the reduced path is the one you would ship.

### 10.5 LONG-FORM WEB DOCUMENTS

Proposals and reports with several independently readable sections can use this profile. It is derived from the *Custom Packaging Platform* design proposal. Use the content hierarchy and interaction patterns with the current document's own data, scope, and terms.

**Base (BODY):** 16px. **Canvas:** up to 1120px for the document itself, with up to 256px reserved at inline-start when the chapter rail fits. Keep the prose measures in §6. Use the §5.5 topbar in flow with the document wordmark at inline-start and the theme control and any language control at inline-end.

#### Palette and opening

The following token overrides are local to this profile. Other roles inherit from §3.

| Token | Dark | Light |
|---|---|---|
| `--surface-page` | `#0B0B0C` | `#F2F2F0` |
| `--surface-raised` | `#141416` | `#FFFFFF` |
| `--line-hairline` | `#303034` | `#CDCDCA` |
| `--line-strong` | `#77777C` | `#80807B` |
| `--text-primary` | `#F2F1EE` | `#161617` |
| `--text-secondary` | `#B4B3B0` | `#53534F` |
| `--text-tertiary` | `#969692` | `#656560` |
| `--accent` | `#FF5A26` | `#FF5A26` |
| `--accent-ink` | `#101011` | `#101011` |
| `--scenario-mark` | `#FF8058` | `#AD330B` |
| `--texture-dot` | `rgba(150,150,150,.12)` | `rgba(105,105,100,.15)` |

- Place the eyebrow and date above a statement and a short lead. When there is a primary decision number, pair it with its unit and a short qualification in one square-cornered callout. It sits beside the lead on wide screens and follows it in the reading order on compact screens. Put two to four supporting facts in the ruled summary strip below.
- Allocate orange where it matters most: decision number, active scenario, or current step, under the 15% visible-element ceiling. The scenario explorer may use `--scenario-mark` for active bars and endpoints, plus optional semantic hues for genuinely distinct teaching concepts when the §3 gate passes. Inactive data, reference ticks and supporting UI stay neutral. The selected scenario remains identifiable without color.
- Use `--texture-dot` for one subtle dot field at 26px pitch. It may extend over the page canvas. Opaque content surfaces stay solid, and print removes the texture.
- Use `--text-secondary` for resting control labels and `--line-strong` where a control boundary carries meaning. Keep the keyboard focus treatment from §7.

#### Chapter navigation

- Use one labelled `<nav>` with native fragment links in document order. On a viewport at least 1200px wide and taller than 690px, center a fixed chapter rail within the reserved inline-start space. If the labels follow a shallow arc, keep their hit areas clear of each other and of the document. Mark the current chapter with a neutral square and a visible label treatment.
- When the rail no longer fits, use a sticky single-row chapter strip with its own inline scrolling and an obvious current label. The page itself must fit without horizontal scrolling. Account for the sticky strip in fragment offsets and keep the current link in view inside the strip. Keep the 900px and 640px content breakpoints in §6.
- Use `aria-current="location"` on at most one link and update it as a section crosses the reading line. Mark the final section when the reader reaches the end. Clicking a link updates the fragment and puts focus on the destination heading or section. Direct links and Back/Forward resolve to the right place. Keyboard focus remains distinct from the section currently in view.
- Apply logical placement and mirror the arc for RTL. In the absence of script, use plain in-flow anchor navigation. Keep the skip link and anchor destinations operable in all states.

#### Content and data

- **Scope.** Give each workstream a title, a short description, and end-aligned values with units. Follow with a ruled total and any qualifications that change how the figures should be read. On compact screens the description takes the first line and the labelled values take a second row. Preserve the programmatic association between each value and its label.
- **Scenarios.** Store per-workstream quantities and the unit rate once. Derive costs, totals, bar lengths, reference ticks, fallback content, and print values from that data. Display the recommended scenario first. All scenarios share one zero-based scale, labelled quantities, and directly readable totals. Explain any rounding or assumptions that affect interpretation.
- **Preview and selection.** Use native buttons in a labelled group. Click, tap, Enter, or Space commits a selection and updates `aria-pressed`. Hover with a fine pointer or move keyboard focus to preview. Show whether values are previewed or selected in text and restore the committed values on leaving the group or pressing Escape. Announce the name and totals in a polite status region on commit. With no script, the recommended scenario and its numbers remain readable.
- **Plan and cadence.** Show ordered phases as ruled steps. Use a timeline for milestones or deadlines, with a horizontal hairline and labels below on wide screens. At the compact breakpoint, place the line on the inline-start and the labels alongside it. Keep cadence, due dates, and decisions in text so the sequence survives without geometry or color.
- **Close.** Give the next decision a short closing section and keep at least one section free of devices beyond the rail.

#### Motion, standalone HTML, and print

- Chapter emphasis may move between discrete chapter changes. Scenario geometry may interpolate when displayed values change. Scope these exceptions to the rail and chart, keep transitions at or below 400ms, and update the text values immediately. Favor an ease-out without overshoot. Reduced motion snaps both directly to their final states. Keep page content independent of continuous scroll position and all initial content visible before script runs.
- A subject-specific, hairline-framed illustration may introduce the document. If it opens as a brief splash, provide a visible keyboard-operable skip button and an Escape action. Dismiss automatically within 1.25 seconds, with each transition at or below 400ms. Skip the splash on direct chapter links, restored history entries, reduced motion, and print. The reading view must already exist beneath it, and an unavailable or interrupted enhancement must leave that view accessible.
- When delivering a standalone HTML file, bundle the fonts, licenses, and art with the document. The reading view and recommended numbers must work offline and with script disabled.
- Use the A4 light print rules in §10.1. Remove chapter navigation, the splash, texture, toggles, and scenario controls. Print a labelled table of the recommended scenario with its units and totals, regardless of the last preview or selection. Keep the scope and milestone rows together and the chapter headings with their first content.

---

## 11. WHAT WOULD BREAK THIS DIRECTION

1. **Using color without meaning, or refusing useful color.** Orange on more than 15% of meaningful visible elements, or arbitrary secondary colors without distinct conceptual roles, weakens hierarchy. Equally, refusing an explanatory accent or useful category hue solely to preserve the obsolete one-accent rule can reduce comprehension. Apply both §3 gates.
2. **Reaching for a card grid.** `repeat(3, 1fr)` of equal boxes is the failure mode in every medium: the three-column feature section, the three-card slide, the three-panel poster. Ruled rows with a label gutter carry density while staying calm.
3. **Making Persian wear Latin's clothes.** No `text-transform: uppercase`. No `letter-spacing`. No Vazirmatn Light below 15px on black. No Latin digits inside a Persian sentence. No monospace face for Persian metadata. And no physical CSS directions anywhere.
4. **Shipping "Arabic support" and calling it Persian.** Arabic-Indic digits, an Arabic ك or ي, an Arabic-first font, a missing ZWNJ — any one of these tells a Persian reader in the first line that nobody who reads the language looked at this. It is not a localisation bug; it reads as contempt.
5. **Shipping incomplete translations.** When multiple languages are requested, every selected language must cover the user-facing content.
6. **Designing in light and checking dark afterward.** Dark is canonical: hairline contrast, luminance steps and the accent's weight are all calibrated for it. Work derived from light and inverted always shows — the hairlines go muddy and the accent goes hot.
7. **Introducing a shadow "just for this one element."** The moment one element floats, hairlines stop reading as structure and start reading as an omission. There is no exception, including modals, dropdowns and tooltips — those get `--surface-raised` + `--line-strong`.
8. **Letting the serif appear twice.** Its authority is entirely a function of being unique. A second use halves it; a third destroys it.
9. **Adding a spacing value.** `18px` looks like nothing. Twenty of them look like an artifact assembled by committee.
10. **Treating mobile as the desktop layout, narrowed.** The rail is the system's signature and it has nowhere to go on a phone — if the collapsed META line wraps to three rows, or the metric strip's vertical hairlines survive into a 2-up they were never drawn for, the instrument reads as a broken table. Design at 390px first.
11. **Leaving an interaction on hover alone.** The system's only feedback is a colour lift on hover. On touch that state does not exist, so anything discoverable only by hovering is invisible to half the audience. Every hover goes behind `(hover: hover) and (pointer: fine)` and has a visible counterpart.

---

## 12. ACCEPTANCE CHECKLIST

Run applicable checks in dark and light for every selected language. Mark language-specific checks not applicable when that language is absent. Report PASS / FAIL. Any FAIL is a defect, not a preference.

**Language & theme (gate — check these first)**

- [ ] Topbar has a theme button and, when multilingual, a language button. Buttons have radius 0, are 38px tall and 44px on coarse pointers, per §5.5.
- [ ] Uppercase and tracking on the buttons are scoped behind `html[lang="en"]`, not applied globally.
- [ ] First load resolves to **English + Dark** absent a stored preference.
- [ ] Theme and any selected language persist to `localStorage` and survive reload.
- [ ] Toggles are keyboard-operable, `aria-pressed` correct, never accent-colored, hidden in print.
- [ ] Every user-facing string exists in each requested language. When Persian is selected, its render has no untranslated strings.
- [ ] When multilingual, verify language changes preserve reading position and produce no clipped content.
- [ ] Toggling theme changes color variables only; zero layout or structure difference.

**Color**

- [ ] Zero literal color values outside the token block — including SVG, charts, inline styles.
- [ ] Orange appears on at most 15% of meaningful visible elements in every viewport / slide / poster and relevant interaction state. Count meaningful units, not raw DOM/SVG primitives; no minimum is imposed.
- [ ] Orange meaningfully identifies actions, selection, critical data or explanatory focus, rather than decorative accents.
- [ ] Every secondary hue passes the §3 Secondary Color Gate, maps consistently to a concept, and is never used as decorative UI color. Charts follow §8; generic accent glows, gradients and shadows remain prohibited.
- [ ] Focus ring is `2px solid var(--text-primary)`, offset 2px, everywhere.
- [ ] Light and dark differ only by token values — no `[data-theme]` layout or structure overrides.
- [ ] Colored diagrams and series remain distinguishable using labels/shapes/patterns without color, and semantic marks/text meet applicable contrast requirements.

**Type**

- [ ] Every text element maps to exactly one of the ten registers.
- [ ] The serif appears exactly once.
- [ ] All numerals are tabular with slashed zero.
- [ ] All metadata is uppercase tracked mono (Latin) / weight-500 tertiary (Persian).
- [ ] Latin body ≤ 68ch; Persian body ≤ 640px equivalent.

**Persian, specifically** (when Persian is requested)

- [ ] Block direction set by Perso-Arabic ratio ≥ 0.35 per block, not `dir="auto"`, and independent of the document toggle.
- [ ] `[dir="rtl"] * { letter-spacing: 0 !important; }` present.
- [ ] Grep for Arabic-Indic digits `[٠-٩]` → **zero hits.** Persian digits `[۰-۹]` used throughout Persian blocks.
- [ ] Grep for Arabic `ك` (ك) and `ي` (ي) → **zero hits.** Only ک `ک` and ی `ی`.
- [ ] ZWNJ `‌` present in prefixed/suffixed words (‏می‌‏, ‏‌ها‏, ‏‌تر‏). No space standing in for it.
- [ ] Persian punctuation: ‏،‏ ‏؛‏ ‏؟‏ ‏«»‏ — no `,` `;` `?` `"` in Persian text.
- [ ] Persian numerics use ‏٫‏ ‏٬‏ ‏٪‏.
- [ ] Dates: Jalali in Persian blocks, ISO in English blocks. No cross-contamination.
- [ ] Font stack for Persian is Vazirmatn-first; no Arabic-first face anywhere in the stack.
- [ ] Grep the stylesheet for `margin-left|margin-right|padding-left|padding-right|border-left|border-right|text-align:\s*(left|right)|left:|right:` → **zero hits.**

**Structure**

- [ ] `box-shadow` appears zero times.
- [ ] Every spacing value is in `{4,8,12,16,24,32,48,64,96,128}`.
- [ ] Every radius is in `{0, 4, 10, 999}`; 999 used on at most one element.
- [ ] Cards used in at most three places; everything comparable is a ruled row.
- [ ] Section-closing hairlines bleed past the content column.
- [ ] Exactly one texture, in exactly one place.
- [ ] No card grid of equal boxes anywhere.

**Mobile & touch** (verify at 390×844 and 320×568, in each selected language and theme)

- [ ] `viewport-fit=cover` meta present; zoom not disabled; no `maximum-scale`.
- [ ] `100dvh` used, never `100vh`. `-webkit-text-size-adjust: 100%` set.
- [ ] Safe-area insets applied via `max()`, symmetric. No other physical directions.
- [ ] Zero horizontal scroll at 320px — and not because of `overflow-x: hidden`.
- [ ] Every interactive target ≥ 44×44 with ≥ 8px separation.
- [ ] Every `:hover` rule sits inside `@media (hover: hover) and (pointer: fine)`, and nothing is hover-only.
- [ ] BODY ≥ 15px in both scripts; META / DATA / MICRO not shrunk below their desktop size.
- [ ] Collapsed rail META line wraps to at most two rows.
- [ ] Section hairlines still bleed past the content column at mobile padding.
- [ ] Content reflows at 900px and 640px. §10.5 may also switch chapter navigation based on available width and height.
- [ ] Topbar retains the theme button and any language button at the inline-end.
- [ ] Decks scale a fixed 1920×1080 stage; posters render as a stacked reading view, not a fit-to-width image.

**Motion & output**

- [ ] Motion has a purpose and suits its frequency. Ordinary UI transitions finish under 300ms. Longer explanatory motion has a reason and never blocks interaction.
- [ ] Functional data remains readable, interactive motion is interruptible, and accent colors stay constant during transitions.
- [ ] `prefers-reduced-motion` handled.
- [ ] Print defaults to light and supports requested static theme variants; reveal states forced visible; `break-inside: avoid` on rows and cards.
- [ ] The artifact still reads correctly in pure monochrome — severity, status and emphasis all survive.


**Educational motion (when explanatory HTML/SVG is requested)**

- [ ] A concrete learning objective and static baseline were considered before animation.
- [ ] Every animated candidate passed the Learning Value Gate; unnecessary candidates were rejected.
- [ ] Learner interactions manipulate meaningful states or inputs rather than trigger decorative playback.
- [ ] State, visual geometry, text labels, numeric results, units and scales use one consistent model; intermediate states are truthful.
- [ ] Rapid input/reversal and reset leave no stale frames; reading and keyboard/touch control are never blocked.
- [ ] Reduced-motion and non-script/print alternatives preserve the explanation.
- [ ] Any external skill was genuinely installed/available and used within its permitted scope. Installation and missing dependencies are reported accurately.
- [ ] An Anatomy figure, if used, retains its native visual composition, depth, lighting, shapes, shading and motion; only palette colors were adapted.
- [ ] Explicitly allowed external review-only skills did not mutate implementation; `review-animations` was not auto-invoked against its metadata.

**Long-form web documents (§10.5)**

- [ ] Check the chapter rail and the sticky strip at wide, short, and compact viewports. Fragment links, Back/Forward, focus, and the final active chapter work in both directions. The rail and strip never obscure content.
- [ ] The scope and scenario totals reconcile with their source quantities and rate. All scenario tracks use the same scale and selected values stay legible at 320px.
- [ ] Pointer and keyboard previews restore the committed values on exit or Escape. Click, tap, Enter, and Space commit, and the pressed state and announced totals match the committed scenario.
- [ ] With script disabled, the chapter links, document text, and recommended figures still work. When standalone HTML is required, check the file offline.
- [ ] Reduced motion shows the final state immediately. A splash, if present, can be skipped and disappears within 1.25 seconds. Direct chapter links open without it.
- [ ] Print after selecting a different scenario. The A4 output uses the active language, forces light, and includes the labelled recommended-scenario table and its totals.
