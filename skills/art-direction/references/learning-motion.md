# Learning-driven motion for HTML and SVG

This reference extends `art-direction.md` §9 and §12 for educational artifacts. It is not a license to animate ordinary functional data or decorate documents.

## First decision: what must be understood?

Identify a precise, observable objective: what could the learner *explain, compare or predict* after interacting? Identify the misconception or relationship that is hard to grasp. Treat any promise of improved learning as a hypothesis until evaluated.

## Learning Value Gate

For each candidate, compare (a) prose or static diagram, (b) interactive static diagram, (c) user-controlled animated diagram, (d) controlled playback.

Accept motion only when:
1. The motion communicates a temporal sequence, transformation, state dependency, continuity, propagation, or causal relationship that is materially harder to see without movement.
2. A static representation is insufficient for the same learning objective, or motion is a materially clearer representation.
3. The representation and intermediate states are truthful and appropriately scaled.
4. Motion does not create more distraction, latency, cognitive demand or accessibility cost than learning value.

If uncertain, choose static. Never invent an animation quota. Interactive static input is often better than autoplay motion.

## Learner-controlled exploration

Use **Observe → Predict → Manipulate → Compare → Explain** when appropriate, not as a compulsory wizard. Give the learner direct control over relevant variables, time, branching choices, or scenarios where the concept benefits from it.

Controls can include sliders, parameter fields, timeline scrubbers, pause/replay, step forward/back, reset and before/after. Include only controls that reveal learning-relevant differences.

Update semantic state and text values immediately; use animation only to connect relevant states. Prevent stale animations from overriding the latest user input. Make scrubbing and repeated reversals interruptible, and never block interaction.

### Pattern selection

| Pattern | Use when | Reject when |
|---|---|---|
| Timeline scrubbing | Time/sequence influences understanding | Only chronological labels are needed |
| Parameter exploration | Relationships can be tested by changing inputs | Values are independent or purely decorative |
| Cause/effect propagation | A change travels through dependent states | Causality is not established by the source |
| State transition | Continuity between states helps build a mental model | Only the final status matters |
| Scenario comparison | Tradeoffs benefit from direct counterfactual inspection | A compact static table is clearer |
| Progressive explanation | Learners need staged causal exposition | Hidden steps prevent scanning or reading |
| Mechanical/isometric metaphor | Physical construction concretely explains a mechanism | The metaphor distorts an abstract concept |

## Color and comprehension

Default to grayscale and the purposeful orange accent, which may mark up to **15% of meaningful visible elements**, not just one element. Introduce optional Reforge-inspired semantic blue/green/amber/violet only when distinct concepts, stages, paths, or categories become materially easier to compare. Read `semantic-colors.md` only if that decision arises. Keep stable labels and shapes for color-independent comprehension; check dark/light contrast. Color alone does not justify a motion candidate.

## Technical model and visual truth

- Use one authoritative data/model state for geometry, labels, output values and controls.
- Distinguish observations, assumptions, estimates and fictional examples.
- Do not imply causal certainty from correlation, or meaningful continuity between categorical states.
- Avoid interpolating numerical values when intermediate values would falsely represent actual observations.
- Use SVG `viewBox`, semantic HTML controls, direct labels, unit annotations, stable axes, and appropriate descriptions.
- Use CSS/WAAPI for simple transitions; use JS or `requestAnimationFrame` only when needed for a genuine continuous explainer. Avoid unnecessary animation dependencies.
- For SVG paths, geometry or simulation requiring repaint, measure the result rather than promising compositor-only animation.
- Preserve theme, typography, bidirectional text, print and offline fallbacks required by the main guide.

## Accessibility

- Every learning control must work with keyboard and touch without demanding precision pointing.
- Keyboard-triggered *learning simulation* may animate to convey a concept; keyboard-triggered *repeated UI navigation* should not.
- Respect `prefers-reduced-motion` by providing discrete step transitions, static comparison or instant results that preserve learning, not by hiding necessary information.
- Ensure a meaningful initial static state is readable when JS fails.
- Make focus, value, and selected state legible without motion or color. Throttle live-region announcements during continuous scrubbing; announce meaningful committed updates.
- Keep a representative static/print view with descriptions, units and assumptions.

## Brief design contract (significant visualizations only)

Concept; observable learning objective; static baseline; motion justification; manipulable input(s); model and assumptions; initial and changed states; reduced-motion alternative; meaningful completion criterion.

## Validation

Validate with three cases:
A. A simple definition: reject animation, preserve clear text/diagram.
B. Compounding vs linear growth: interactive parameter changes, mathematically correct comparable curves, never fabricated data.
C. A dependent staged process: step-by-step explanation with interruption, backward navigation and reset.

For real projects also inspect the output at representative mobile/desktop sizes and both themes, RTL and LTR when requested, reduced motion, rapid reversals, disabled JS, offline behavior when needed, and print. Report `PASS`, `FAIL` or `NOT TESTED` accurately.
