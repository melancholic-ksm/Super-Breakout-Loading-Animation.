<div align="center">

# 🎮 Super Breakout Loading Animation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A sleek, elegant loading animation inspired by the classic Super Breakout game**

![Loadingv2.0 Preview](https://raw.githubusercontent.com/melancholic-ksm/Super-Breakout-Loading-Animation./refs/heads/main/etc/v2.0.gif)

[🚀 Live Demo](#versions) • [📖 Documentation](#documentation) • [🎨 Customization](#customization) • [🤝 Contributing](#contributing)

</div>

---

## ✨ Features

- 🎯 **Pure HTML/CSS/JS** - No external dependencies required
- 🤖 **Smart AI Paddle** - Intelligent bot that tracks ball trajectory
- 🎮 **Manual Mode** - Take control with 3 clicks or touch the paddle
- ✨ **Particle Effects** - Beautiful sparkle animations on brick destruction
- 📱 **Mobile Friendly** - Touch controls for mobile devices
- ⚡ **Lightweight** - Minimal file size for fast loading
- 🎨 **Customizable** - Easy to modify colors, text, and behavior

---

## 🎬 Versions

### Version 2.0 (Recommended)

The latest and most feature-rich version with enhanced animations and controls.

**[📁 Loadingv2.html](./Loadingv2.html)**

![Loadingv2 Demo](https://res.cloudinary.com/dv3cp6bda/image/upload/v1756896420/Recording_2025-09-03_153150_xiiqbg.gif)

**Features:**
- ✨ Particle effects on brick breaks
- 🎮 Manual control mode (3 clicks or touch paddle)
- 🤖 Improved AI paddle logic with speed boost
- 🔄 Automatic brick reset on ball loss
- 📱 Full touch support for mobile

### Version 1.0 (Legacy)

The original lightweight version - perfect for minimal implementations.

**[📁 Loading.html](./Loading.html)**

![Loading Demo](https://res.cloudinary.com/dv3cp6bda/image/upload/v1756896704/Screen_Recording_2025-09-02_152831_kwct7u.gif)

**Features:**
- ⚡ Ultra-lightweight
- 🤖 Basic AI paddle
- 🎯 Simple and reliable

---

## 📖 Documentation

### Quick Start

1. **Download** the HTML file you want to use
2. **Include** it in your project
3. **Open** in any modern web browser

```html
<!-- Embed directly in your page -->
<iframe src="Loadingv2.html" width="823" height="230" frameborder="0"></iframe>
```

### File Structure

```
Super-Breakout-Loading-Animation/
├── Loading.html      # Version 1.0 - Lightweight
├── Loadingv2.html    # Version 2.0 - Feature-rich
├── Loading.png       # Static preview image
├── LICENSE           # MIT License
├── README.md         # This file
└── etc/
    ├── a             # Additional assets
    └── v2.0.gif      # Animation preview
```

### Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| Mobile Browsers | ✅ Full |

---

## 🎨 Customization

### Change Colors

Edit the CSS in the `<style>` section:

```css
/* Background color */
body {
    background: #f3f3eb;  /* Change this */
}

/* Ball and brick color - find in JavaScript */
ctx.fillStyle = "#0d0d19";  /* Change this */
```

### Change the Text

The "LOADING" text is created using ASCII art. Modify the `BRICK_ART` array:

```javascript
const BRICK_ART = [
    `__              ______        ______      ...`,
    // Each row represents a line of pixels
    // '__' = brick, '  ' = empty space
];
```

> 💡 **Pro Tip:** Use the [Custom Name Generator](https://github.com/harshmaybe/Super-Breakout-Custom-Name-Loading-Animation) to easily create your own text!

### Adjust Speed

```javascript
// Ball speed (default: 4-6)
let speed = 6;

// Paddle normal speed
const paddleSpeedNormal = 5.6;

// Paddle boost speed (when ball is far)
const paddleSpeedBoost = 13;
```

### Canvas Size

```html
<canvas id="breakout" width="823" height="230"></canvas>
```

---

## 🛠️ Technical Details

### How It Works

1. **Brick Pattern**: ASCII art is parsed to create the "LOADING" text pattern
2. **Ball Physics**: Uses angle-based velocity with wall bounce detection
3. **AI Paddle**: Predicts ball landing position and moves accordingly
4. **Collision Detection**: Axis-aligned bounding box (AABB) collision
5. **Particle System**: Creates sparkle effects on brick destruction (v2)

### Key Functions

| Function | Description |
|----------|-------------|
| `draw()` | Main game loop - renders each frame |
| `drawBricks()` | Renders the brick pattern |
| `drawBall()` | Renders the bouncing ball |
| `drawPaddle()` | Renders the paddle |
| `collisionDetection()` | Checks ball-brick collisions |
| `updatePaddle()` | AI paddle movement logic |
| `predictBallLandingX()` | Predicts where ball will land |

---

## 🎮 Controls

### Version 2.0 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Activate Manual Mode | Click paddle OR 3 clicks anywhere | Tap paddle OR 3 taps |
| Move Paddle | Mouse position | Touch position |
| Return to Bot | Let ball fall | Let ball fall |

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License
Copyright (c) 2025 Harsh Maybe
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 Create a **branch** (`git checkout -b feature/amazing-feature`)
3. 💻 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a **Pull Request**

### Ideas for Contribution

- [ ] Add more particle effects
- [ ] Create different text patterns
- [ ] Add sound effects
- [ ] Create a dark mode theme
- [ ] Add score counter
- [ ] Create multiple difficulty levels

---

## 🙏 Acknowledgments

- Inspired by the classic **Atari Super Breakout** game
- Built with pure HTML5 Canvas API

---

<div align="center">

**Made with ❤️ by [Harsh Maybe](https://github.com/harshmaybe)**

⭐ **Star this repo** if you find it useful!

</div>
