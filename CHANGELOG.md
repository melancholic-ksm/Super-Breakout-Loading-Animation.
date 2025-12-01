# Changelog

All notable changes to the Super Breakout Loading Animation project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2024

### Added

#### New Features
- **Text-to-Brick Converter API** (`api/brick-art-converter.js`)
  - JavaScript module for programmatic text-to-brick-art conversion
  - Support for A-Z, 0-9, and common symbols
  - Custom glyph support for adding new characters
  - Configurable output (pixel width, spacing, row count, characters)
  - Multiple output formats (array, JS literal, rendered string)

- **Web-based Converter Tool** (`api/text-to-brick-converter.html`)
  - Interactive UI for converting text to brick patterns
  - Live preview of generated ASCII art
  - One-click copy for ASCII or JavaScript array format
  - Step-by-step usage instructions

- **Examples Directory** (`examples/`)
  - `custom-text-example.html` - Interactive demo with live text input

- **Documentation** (`docs/`)
  - `API.md` - Complete API reference documentation
  - Method signatures, parameters, and return values
  - Configuration options reference
  - Custom glyph creation guide
  - Integration examples

#### Project Organization
- Reorganized repository structure:
  ```
  ├── src/           # Animation source files
  ├── api/           # Customization API
  ├── docs/          # Documentation
  ├── examples/      # Usage examples
  └── assets/        # Images and resources
  ```
- Renamed files with descriptive names:
  - `Loading.html` → `src/breakout-loading-basic.html`
  - `Loadingv2.html` → `src/breakout-loading-advanced.html`

#### Documentation
- Comprehensive README with:
  - Feature overview
  - Quick start guide
  - Installation instructions
  - API usage examples
  - Configuration reference
  - Customization tutorials
  - Contributing guidelines

---

## [1.2.0] - Previous Version (Loadingv2.html)

### Added
- **Particle system** for visual sparkle effects on brick breaks
- **Manual control mode** - Click paddle 3 times or touch to take control
- **Touch support** for mobile devices
- **Paddle width expansion** in manual mode for easier control
- **Speed variation system** with temporary speed changes on collisions
- **Improved ball prediction** algorithm for better paddle tracking
- **Green line indicator** (invisible) for ball crossing detection
- **Brick reset** on ball loss for continuous gameplay

### Changed
- Enhanced paddle AI with more intelligent tracking
- Improved ball bounce physics with angle jitter
- Better anti-stuck logic for edge cases
- Smoother paddle movement animation

### Technical Details
- Ball base speed: 6 (was 4)
- Speed effects: ±0.1 on various collisions
- Paddle boost: Up to 1.5x normal speed when needed
- Particle counts: 12-15 on brick break, 4-5 on paddle hit

---

## [1.0.0] - Initial Version (Loading.html)

### Added
- **Core breakout animation** with ASCII brick patterns
- **Automatic paddle AI** that tracks ball and predicts landing position
- **"LOADING" text** displayed as breakable bricks
- **Ball physics** with wall bouncing and paddle reflection
- **Anti-stuck deflection** logic to prevent infinite loops
- **Random paddle movement** when ball is moving upward
- **Paddle speed boost** when needed to reach ball in time

### Features
- Canvas-based rendering (823x230 pixels)
- Clean, minimal aesthetic (#f3f3eb background, #0d0d19 elements)
- ASCII art brick pattern using `__` characters
- Smooth animation at 60fps (requestAnimationFrame)
- Automatic ball reset on loss

### Technical Specifications
- Brick dimensions: 15×4 pixels (with 2px padding)
- Ball: 5px radius, 4 initial speed
- Paddle: 40×8 pixels, 5.6 normal speed, 13 boost speed
- Canvas: 823×230 pixels
