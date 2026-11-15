# Rahul Hira — After Hours

A minimal white-text portfolio with three separate atmospheres in one layout:

- **Moonlight:** a textured lunar crescent, a few stars, and a faint constellation.
- **Tide:** fine contour-like water lines with slow changes in light and motion.
- **Ember:** warm charcoal, a low glow, and a few rising sparks.

A brief personal introduction leads to inline Work, Writing, and About notes. The theme picker works with pointer or keyboard and remembers the last selection locally. Theme effects respond subtly to link focus or hover. Motion can be paused and respects reduced-motion preferences; hidden tabs stop rendering.

Inspired by the direct, personal prose and restrained layout of guptasf.com. All styling, effects, artwork, and copy here are original for Rahul. No rainbow or bubble effects are used.

This is a buildless static site. Serve `dist/` with `python3 -m http.server 4175 --directory dist`. It uses no package dependencies, external fonts, image downloads, or trackers. The background is procedural Canvas 2D with a capped drawing resolution; portfolio content stays usable without the canvas.
