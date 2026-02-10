# 📝 Digital Scrapbook: An Interactive Letter
> "Don’t worry, wala akong nilagay na malware sa website na ‘to. Virus lang. Yung ILOVEYOU virus. Chariz."

A creative, "infinite canvas" personal introduction website designed as a digital workspace. This project moves away from traditional linear scrolling, allowing users to pan, zoom, and interact with a scattered collection of memories, music, and notes.

## ✨ Features
* **Infinite Canvas:** A 2000x2000px interactive desk. Drag to explore, pinch/scroll to zoom.
* **Sticky Note Intro:** A personalized greeting featuring the classic "ILOVEYOU virus" joke and custom handwriting.
* **Polaroid Gallery:** Clickable photo cards that expand into detailed views with smooth CSS transitions.
* **CD Disc Collection:** Circular, iridescent album art representing musical influences (e.g., Janet Jackson).
* **Movable Elements:** Draggable colored sticky notes and doodles that maintain their position on the desk.
* **Bullet Journal Aesthetic:** A clean, dotted-grid background with "washi tape" and "scrapbook" UI elements.

## 🛠️ Tech Stack
* **Frontend:** Vanilla HTML5, CSS3 (Flexbox/Grid, Custom Animations).
* **Interactions:** [Interact.js](https://interactjs.io/) for physics-based dragging and multi-touch gestures.
* **Typography:** Custom `@font-face` integration for a unique "handwritten" identity.

## 📁 Project Structure
```text
├── index.html      # Main entry point
├── style.css       # Layout, Polaroid/CD effects, and Transitions
├── script.js      # Zoom/Pan logic and Modal management
├── fonts/          # Custom handwriting font files
└── img/            # Photos, CD covers, and SVG doodles
