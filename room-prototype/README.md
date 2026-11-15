# A little room

An original, wordless 3D room concept for Rahul Hira. Three.js renders the room and Cannon-es simulates its six loose desk objects. All models and textures are generated locally.

## Explore

- Press a loose desk object to lift it, drag to move it, and release to drop or toss it.
- Drag empty space to orbit; scroll or pinch to zoom.
- Four icon buttons show the whole room, move closer to the desk, reset objects, and toggle the lamp. The lamp itself also toggles when clicked.
- Keyboard: focus the scene and use arrows to orbit, plus/minus to zoom, R to reset, L for the lamp, and Escape to release an object.

There is no visible text: no headings, labels, tooltips, portfolio panels, or lettering on the objects. Icon buttons and the canvas retain invisible accessible descriptions. Furniture is fixed; the notebook, mug, ball, phone, pencil, and die are movable.

## Run locally

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
npm run preview
```

`dist/` is a static site that supports root or subdirectory hosting.

## Physics and rendering

The simulation uses a 120 Hz fixed step, bounded catch-up, mass-scaled spring dragging, velocity limits, and sleeping. Rendering stops when objects and the camera settle, and pauses when hidden. Resolution is capped, static meshes are merged by material, and only one light casts shadows.

Cannon quaternions must be interpolated within Cannon before copying to Three. Passing a Cannon quaternion directly to Three's `slerp` yields non-finite render transforms, which previously corrupted ray hits and object dragging. Invalid grab points are now rejected and non-finite body states recover safely. Pointer capture is cleared without recursive release, and pickup starts immediately on pointer down.

## Verification

Eight automated tests cover desk/floor collisions, stacking, frame-rate independence, pickup/release, reset, finite rendered transforms and ray hits, repeated edge grabs of thin props, and invalid-coordinate recovery. Browser checks cover dragging, dropping, camera controls, lamp controls, wordless presentation, and a narrow viewport. Narrow-screen checks use browser emulation rather than a physical phone.

## Publication

This prototype has its own hosted Site. Source is also kept in `room-prototype/` on the `codex/room-portfolio` branch of the personal GitHub repository. The public domain homepage remains on `main`.
