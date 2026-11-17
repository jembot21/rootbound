# ROOTBOUND

**A little root. A last hope.** A self-contained, illustrated survival game about the root of the last sunflower. Explore six layers of living soil, drink hidden water, and draw closed loops around pests to crush them. Reach the deep water beneath Stonehog to bring back spring.

[![make.fun · best-game-01](https://make.fun/badge/best-game-01.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![rank](https://make.fun/badge/best-game-01/jembot21/rootbound/rank.svg)](https://make.fun/bounty/best-game-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)
[![reward](https://make.fun/badge/best-game-01/jembot21/rootbound/reward.svg)](https://make.fun/bounty/best-game-01?utm_source=github&utm_medium=readme&utm_campaign=best-game-01)

## Play

Open `game/index.html` directly in desktop Chrome, or run `node serve.ts` and visit `http://localhost:8080`. There is no build, dependency installation, remote asset, or game network request.

- Enter or click starts. Mouse aims the continuously growing tip; A/D or left/right arrows bend it directly.
- Hold Space or the mouse button to surge. Surge spends water faster.
- Cross your earlier root path to close a loop around a pest. Stonehog needs three separate coils.
- Drink teal pockets, collect gold nutrient orbs, and avoid rocks, thorns and thirsty sand.
- Reach the water seam at the bottom to choose one of three upgrades. Press 1–3 or click a card.
- P/Esc pauses; M toggles synthesized sound. Empty water or a completed sun crossing ends the run.

Six beds: Topsoil Dawn, Clay Hollow, Sandfall Dry, Fossil Deep, Crystal Dark, The Deep Water. Eight pests and twelve persistent upgrade choices. Stonehog guards beds three and six. A seed parameter reproduces bed layouts.

## Module map

| File | Responsibility |
| --- | --- |
| `game/src/rng.js` | Seeded worlds and geometry helpers |
| `game/src/drawing.js` | Storybook drawing primitives and botanical sprites |
| `game/src/beds.js` | Six beds, eight bestiary entries, twelve upgrade effects |
| `game/src/audio.js` | WebAudio rustles, chimes, squeeze, rumble and fanfares |
| `game/src/soil.js` | Soil strata, fossils, crystals, rocks, brambles and sky |
| `game/src/particles.js` | Soil crumbs, petals and reward popups |
| `game/src/pests.js` | Eight expressive pest sprites and movement behaviours |
| `game/src/water.js` | Drinking, water pockets, nutrient collection and seams |
| `game/src/roots.js` | Steering, surge, collisions, segment intersection and polygon coils |
| `game/src/hud.js` | Resource meters, depth, score and pest field notes |
| `game/src/screens.js` | Instruction poster, upgrades, pause, victory and wilt |
| `game/src/main.js` | Input, run state, bed progression and deterministic staged scenes |

## Handover and validation

`MAKEFUN_OUTPUT_DIR=/tmp/bg3-out node main.ts` copies game and screenshots and builds the canonical dossier with the unchanged kit vendor. `node tools/verify-game.cjs` exercises scene drawing and core gameplay logic without browser dependencies.

`shots.json` specifies four deterministic scene URLs. **The checked-in JPEGs are fallback rasterizations of the actual game canvas commands, not headless Chrome screenshots.** This session's sandbox denied socket creation for the HTTP server and Chrome's crashpad startup. `tools/render-scenes.cjs` records game drawing commands and `tools/rasterize-scenes.py` rasterizes them with Pillow. All four were visually inspected. Browser rendering, browser input/audio and the requested Chrome captures remain unverified. Recapture the four staged URLs in Chrome before submission when a browser-capable environment is available.

The fallback recorder also renders the default title without a shot parameter. Logic checks cover segment closure, polygon containment/exclusion, three Stonehog hits, drinking, progression, pause, revival, defeat and victory. The `.git` directory was read-only in the session, preventing staging, commit and push.
