# Painted Studio

A separate, wordless version of Rahul’s interactive room, opened into an impressionist meadow. The desk, chair, rug, record player, lamp, plant, laptop, and loose objects retain their original shapes. The wall painting stands on an easel. All visible furniture materials carry surface-anchored brushwork and raised pigment detail, using the painted material atlas from Rahul’s Intelligence Age essay.

The meadow has rolling painted ground, short brush-shaped grass, small wildflowers, cypress-like trees, and a painted sky. Its textures stay attached to the surfaces as the camera moves. No screen-space blur or static screenshot substitutes for the 3D world.

## Interaction

Press and drag the notebook, mug, ball, phone, pencil, or die to pick it up. Held objects keep their orientation and move over a level plane. Release restores gravity and rotational physics. Furniture is fixed.

Drag empty space to orbit, scroll or pinch to zoom. Icon buttons choose the wide view, desk view, reset, and lamp. Keyboard arrows rotate the camera, plus/minus zoom, R resets, L toggles the lamp, and Escape releases a held object.

There are no visible words, labels, or object lettering. Accessible control descriptions are retained invisibly.

## Development

```sh
npm ci
npm run dev
npm test
npm run build
```

The static `dist/` output can be hosted at the root or in a subdirectory. Ten regression tests cover physics, finite render transforms, and stable pickup orientation. Browser checks cover rendering, brush textures, object pickup and release, camera and reset controls, and a narrow viewport. Rendering sleeps when nothing moves and pauses when hidden. Grass and wildflowers use instancing; resolution is capped.

The original room and other portfolio alternatives are separate Sites. This source does not change the public domain homepage.
