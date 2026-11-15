# Rahul Hira — A painted garden

A separate portfolio direction: a continuous painted 3D landscape with natural objects as the navigation. The flower opens projects, a stone arch opens writing, and the pool’s water lily opens About. A compact garden index offers the same content without precise pointing.

The terrain renderer and painted textures are adapted from Rahul’s own [Response to the Intelligence Age](https://rahulashwinhira.github.io/response-to-the-intelligence-age/) website. The sculptures, camera controls, picking, interface, and portfolio content were created for this alternative. The original essay website is unchanged.

Run `python3 -m http.server 4174 --directory dist` and open localhost:4174. This is a buildless static site; `dist/` is the complete deployable output. There are no package dependencies or external scripts.

Controls: wheel to travel, drag to look around, pinch to zoom, and the index to visit a landmark. Keyboard arrows travel/look, +/− zoom, and Escape closes a note. The wind control pauses animation. Reduced-motion settings and hidden tabs pause ambient rendering. Capped resolution, shared texture atlases, and batched geometry keep the scene small in draw-call count.

Natural objects replace floating text, painted surfaces stay tied to world coordinates, and field-note content is revealed on demand. Direct text navigation offers access to all content.
