# Rahul Hira — A little room

An interactive, original 3D room concept for Rahul’s personal portfolio, inspired by the tactile objects in Underfoot. It uses Three.js for rendering and Cannon-es for rigid-body physics. No assets or source code from Underfoot are distributed here.

## Explore

- Drag empty space to orbit through 360 degrees; scroll or pinch to zoom.
- Drag a loose desk object to lift it with a spring; release to drop or toss it.
- Click the laptop for Work, notebook for Notes, phone for About, or lamp to switch the light.
- Room and Desk move between camera views. Tidy up restores all props.
- Keyboard: focus the scene, then use arrows to orbit and +/− to zoom. R resets props, L toggles the lamp, and Esc closes details. Navigation buttons provide direct access to every portfolio panel.

The content is deliberately small: a GitHub link and a few concept panels. The notebook is explicitly empty; no fictional resume or projects are included.

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

`dist/` is a static site; it can be served at a domain root or under a subdirectory.

## Performance

Six dynamic bodies, primitive collision shapes, a 120 Hz fixed physics step with a bounded catch-up, mass-scaled spring dragging, and body sleeping. Rendering stops when objects and the camera settle, and pauses when the tab is hidden. Device resolution is capped, static meshes are merged by material, and only one light casts a shadow. All textures and models are generated locally, so there are no external model downloads or tracking services.

## Verification

Physics tests cover falling onto the desk, stacking, consistent simulation at different render rates, dragging/release, and reset. Browser checks cover a 391 × 844 layout, desktop orbit, zoom presets, object dragging, lamp and laptop interactions, details panels, and idle rendering. Mobile layout was checked with browser viewport emulation, not a physical phone.

## Preview and publication

This is a design prototype. The private preview is hosted separately; the existing public `rahulhira.com` homepage stays on `main`. This branch does not change domain DNS or GitHub Pages settings. To publish this Vite application on GitHub Pages later, deploy the built `dist/` output through a Pages workflow and retain the custom domain.
