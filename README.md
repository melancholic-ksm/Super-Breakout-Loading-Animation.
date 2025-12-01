<div align="center">

# 🎮 Super Breakout Loading Animation

**A sleek, elegant, and fully customizable loading animation inspired by the classic Super Breakout game.**

![Loadingv2.0](https://raw.githubusercontent.com/melancholic-ksm/Super-Breakout-Loading-Animation./refs/heads/main/etc/v2.0.gif)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Canvas](https://img.shields.io/badge/Canvas-2D-green)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

[Features](#-features) • [Quick Start](#-quick-start) • [Versions](#-versions) • [Customization](#-customization) • [API](#-api-documentation) • [Examples](#-examples)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Repository Structure](#-repository-structure)
- [Versions](#-versions)
  - [Basic Version](#basic-version-lightweight)
  - [Advanced Version](#advanced-version-full-featured)
- [Customization](#-customization)
  - [Using the Web Converter](#option-1-web-based-converter-easy)
  - [Using the JavaScript API](#option-2-javascript-api-programmatic)
  - [Manual Customization](#option-3-manual-customization)
- [API Documentation](#-api-documentation)
  - [BrickArtConverter Class](#brickartconverter-class)
  - [Configuration Options](#configuration-options)
  - [Methods Reference](#methods-reference)
- [Examples](#-examples)
- [Animation Settings](#-animation-settings)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## ✨ Features

### Core Features
- 🎯 **ASCII Brick Art** - Text displayed as breakable bricks using underscore characters
- 🤖 **Intelligent Paddle AI** - Automatically tracks and predicts ball landing position
- ⚡ **Smooth 60fps Animation** - Powered by `requestAnimationFrame`
- 🎨 **Clean Minimal Design** - Elegant color scheme (#f3f3eb background, #0d0d19 elements)
- 📱 **Responsive** - Works on any screen size
- 🪶 **Lightweight** - No dependencies, pure HTML/CSS/JavaScript

### Advanced Features (v2.0)
- ✨ **Particle Effects** - Sparkles on brick breaks and paddle hits
- 🎮 **Manual Control Mode** - Take control by clicking paddle 3 times
- 📲 **Touch Support** - Full mobile device compatibility
- 🏃 **Dynamic Speed** - Ball speed varies on different collisions
- 🔄 **Auto-Reset** - Bricks respawn when ball is lost

### Customization
- 🔤 **Custom Text** - Replace "LOADING" with any text
- 🛠️ **JavaScript API** - Programmatic text-to-brick conversion
- 🌐 **Web Converter** - Interactive tool for generating brick patterns
- ⚙️ **Configurable** - Adjust pixel width, spacing, colors, and more

---

## 🚀 Quick Start

### Method 1: Direct Download

1. Download the HTML file you want to use:
   - [Basic Version](src/breakout-loading-basic.html) - Lightweight, simple
   - [Advanced Version](src/breakout-loading-advanced.html) - Full-featured

2. Include it in your project:
```html
<iframe src="path/to/breakout-loading-basic.html" width="823" height="230" frameborder="0"></iframe>
```

### Method 2: Copy & Paste

1. Copy the contents of your chosen HTML file
2. Paste into your project
3. Customize the `BRICK_ART` array with your text

### Method 3: Clone Repository

```bash
git clone https://github.com/melancholic-ksm/Super-Breakout-Loading-Animation..git
cd Super-Breakout-Loading-Animation.
```

---

## 📁 Repository Structure

```
Super-Breakout-Loading-Animation/
├── src/                              # Animation source files
│   ├── breakout-loading-basic.html   # Basic version (lightweight)
│   └── breakout-loading-advanced.html # Advanced version (full-featured)
│
├── api/                              # Customization API
│   ├── brick-art-converter.js        # JavaScript API module
│   └── text-to-brick-converter.html  # Web-based converter tool
│
├── docs/                             # Documentation
│   └── API.md                        # Detailed API reference
│
├── examples/                         # Usage examples
│   └── custom-text-example.html      # Interactive text example
│
├── assets/                           # Images and resources
│   └── loading-preview.png           # Preview image
│
├── Loading.html                      # Original basic version
├── Loadingv2.html                    # Original advanced version
├── README.md                         # This file
├── CHANGELOG.md                      # Version history
└── LICENSE                           # MIT License
```

---

## 📦 Versions

### Basic Version (Lightweight)

**File:** [`src/breakout-loading-basic.html`](src/breakout-loading-basic.html) (or [`Loading.html`](Loading.html))

![Basic Version](https://res.cloudinary.com/dv3cp6bda/image/upload/v1756896704/Screen_Recording_2025-09-02_152831_kwct7u.gif)

**Features:**
- ✅ Core breakout animation
- ✅ Automatic paddle AI
- ✅ Ball physics with bouncing
- ✅ Anti-stuck deflection logic
- ✅ ~14KB file size

**Best for:** Simple loading screens, minimal resource usage

---

### Advanced Version (Full-Featured)

**File:** [`src/breakout-loading-advanced.html`](src/breakout-loading-advanced.html) (or [`Loadingv2.html`](Loadingv2.html))

![Advanced Version](https://res.cloudinary.com/dv3cp6bda/image/upload/v1756896420/Recording_2025-09-03_153150_xiiqbg.gif)

**Features:**
- ✅ All basic features
- ✅ Particle sparkle effects
- ✅ Manual control mode (3 clicks)
- ✅ Touch device support
- ✅ Dynamic speed variation
- ✅ Improved paddle AI
- ✅ Auto brick reset
- ✅ ~32KB file size

**Best for:** Interactive loading screens, enhanced visual appeal

---

## 🎨 Customization

### Option 1: Web-Based Converter (Easy)

Use the interactive web tool to generate custom brick patterns:

1. Open [`api/text-to-brick-converter.html`](api/text-to-brick-converter.html) in your browser
2. Enter your custom text (e.g., "HELLO WORLD")
3. Click **Render** to preview
4. Click **Copy JS Array** to copy the generated code
5. Replace the `BRICK_ART` array in your animation file

**Supported Characters:**
- Letters: `A-Z` (case insensitive)
- Numbers: `0-9`
- Symbols: `! @ # $ % ^ & * ( ) _ - + = { } [ ] : ; " ' < , > . ? /`

---

### Option 2: JavaScript API (Programmatic)

Use the JavaScript API for dynamic text conversion:

```javascript
import { BrickArtConverter } from './api/brick-art-converter.js';

// Create converter
const converter = new BrickArtConverter();

// Convert text to brick art
const brickArt = converter.convert('MY TEXT');

// Or get as JavaScript array literal
const jsArray = converter.toJsArray('MY TEXT');
console.log(jsArray);
```

**Quick Functions:**

```javascript
import { quickConvert, quickConvertToJs } from './api/brick-art-converter.js';

// One-liner conversion
const art = quickConvert('HELLO');
const jsCode = quickConvertToJs('HELLO');
```

---

### Option 3: Manual Customization

1. Open your chosen animation file
2. Locate the `BRICK_ART` array:

```javascript
const BRICK_ART = [
    `__              ______        ______      ________        ______      __      __      ________`,
    `__            __      __    __      __    __      __        __        ____    __    __        `,
    // ... more rows
];
```

3. Replace with your custom pattern using:
   - `__` for filled brick pixels
   - `  ` (two spaces) for empty pixels

---

## 📚 API Documentation

### BrickArtConverter Class

The main class for converting text to brick art patterns.

#### Constructor

```javascript
const converter = new BrickArtConverter(options);
```

#### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `pixelWidth` | Number | `2` | Characters per "pixel" |
| `charSpacing` | Number | `2.5` | Spaces between letters |
| `targetRows` | Number | `12` | Number of output rows |
| `fillChar` | String | `'_'` | Character for filled pixels |
| `emptyChar` | String | `' '` | Character for empty pixels |

#### Methods Reference

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `convert(text)` | `string` | `string[]` | Convert text to brick art array |
| `toJsArray(text, useBackticks?)` | `string`, `boolean` | `string` | Convert to JS array literal |
| `render(text)` | `string` | `string` | Render as multi-line string |
| `addGlyph(char, bitmap)` | `string`, `string[]` | `this` | Add custom character glyph |
| `getSupportedCharacters()` | - | `string[]` | Get list of supported chars |
| `isSupported(char)` | `string` | `boolean` | Check if char is supported |
| `configure(options)` | `object` | `this` | Update configuration |

For complete API documentation, see [`docs/API.md`](docs/API.md).

---

## 💡 Examples

### Example 1: Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>Loading...</title>
</head>
<body>
    <!-- Include the animation directly -->
    <iframe src="src/breakout-loading-basic.html" 
            width="823" height="230" 
            frameborder="0">
    </iframe>
</body>
</html>
```

### Example 2: Custom Text with API

```html
<script type="module">
import { BrickArtConverter } from './api/brick-art-converter.js';

const converter = new BrickArtConverter();
const BRICK_ART = converter.convert('WELCOME');

// Use BRICK_ART in your animation...
</script>
```

### Example 3: Interactive Demo

See [`examples/custom-text-example.html`](examples/custom-text-example.html) for a full interactive example with live text input.

---

## ⚙️ Animation Settings

### Ball Settings

| Property | Basic | Advanced | Description |
|----------|-------|----------|-------------|
| `ballRadius` | 5 | 5 | Ball radius in pixels |
| `speed` | 4 | 6 | Initial ball speed |
| `speedEffect` | - | ±0.1 | Speed variation on collision |

### Paddle Settings

| Property | Basic | Advanced | Description |
|----------|-------|----------|-------------|
| `paddleWidth` | 40 | 40 (86 manual) | Paddle width in pixels |
| `paddleHeight` | 8 | 8 | Paddle height in pixels |
| `paddleSpeedNormal` | 5.6 | 5.6 | Normal paddle speed |
| `paddleSpeedBoost` | 13 | 13+ | Boosted speed when needed |

### Brick Settings

| Property | Value | Description |
|----------|-------|-------------|
| `brickWidth` | 15 | Brick width in pixels |
| `brickHeight` | 4 | Brick height in pixels |
| `brickPadding` | 2 | Space between bricks |
| `brickOffsetTop` | 13 | Top margin |

### Canvas Settings

| Property | Value | Description |
|----------|-------|-------------|
| `width` | 823 | Canvas width in pixels |
| `height` | 230 | Canvas height in pixels |
| `background` | #f3f3eb | Background color |
| `foreground` | #0d0d19 | Element color |

---

## 🌐 Browser Support

| Browser | Supported |
|---------|-----------|
| Chrome | ✅ 60+ |
| Firefox | ✅ 55+ |
| Safari | ✅ 11+ |
| Edge | ✅ 79+ |
| IE | ❌ |
| Mobile Safari | ✅ iOS 11+ |
| Chrome Android | ✅ 60+ |

**Requirements:**
- HTML5 Canvas support
- ES6 JavaScript (for API)
- Modern CSS

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Bug Reports
1. Check existing issues first
2. Create a new issue with:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Feature Requests
1. Open an issue describing the feature
2. Explain the use case
3. Discuss implementation approach

### Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

### Code Style
- Use consistent indentation (4 spaces)
- Add comments for complex logic
- Follow existing naming conventions
- Test in multiple browsers

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Harsh Maybe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- Inspired by the classic [Super Breakout](https://en.wikipedia.org/wiki/Super_Breakout) arcade game by Atari
- ASCII art rendering techniques
- HTML5 Canvas API

---

<div align="center">

**Made with ❤️ for the web**

[⬆ Back to Top](#-super-breakout-loading-animation)

</div>

