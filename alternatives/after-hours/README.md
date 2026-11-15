# Rahul Hira

A small personal letter on a black background, with white serif text. The introduction, paragraphs, links, and sign-off share one type size and weight. There are no oversized headings, captions, branding labels, drawers, or background illustrations. The single-column spacing is based on the supplied guptasf.com reference; copy and cursor effects are original.

Three icon buttons in the bottom corner select cursor effects:

- Starlight: fine silver trails and tiny stars.
- Water: flowing pale blue strands.
- Ember: warm sparks with inertia and gravity.

The cursor responds to movement, changes shape over links, and emits a burst on click. Effects fade and stop rendering when idle, disappear on touch, and respect reduced-motion preferences. Theme selection persists locally and via `?theme=moonlight`, `?theme=tide`, or `?theme=ember`.

The two inline links lead directly to Rahul’s illustrated essay and GitHub profile. There are no dependencies, external fonts, image assets, trackers, or build steps. Serve `dist/` with `python3 -m http.server 4175 --directory dist`.

Validation: JavaScript syntax check plus desktop and narrow-screen browser checks for consistent typography, cursor movement, all three effects, theme persistence, link targets, and idle rendering.
