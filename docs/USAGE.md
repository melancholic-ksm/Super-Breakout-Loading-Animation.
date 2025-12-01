# 📘 Usage Guide

This guide provides detailed instructions on how to use and integrate the Super Breakout Loading Animation into your projects.

## Table of Contents

- [Quick Start](#quick-start)
- [Integration Methods](#integration-methods)
- [Configuration Options](#configuration-options)
- [Advanced Customization](#advanced-customization)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### Method 1: Direct HTML File

Simply open `Loading.html` or `Loadingv2.html` in your browser:

```bash
# Using Python's built-in server
python -m http.server 8000
# Then open http://localhost:8000/Loadingv2.html
```

### Method 2: Copy to Your Project

1. Copy the desired HTML file to your project
2. Open it directly or serve it via your web server

---

## Integration Methods

### Iframe Embed

The simplest way to add the animation to an existing page:

```html
<iframe 
    src="Loadingv2.html" 
    width="823" 
    height="230" 
    frameborder="0"
    title="Loading Animation">
</iframe>
```

### Full Page Loading Screen

Use as a loading screen before your main content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Loading...</title>
    <style>
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #f3f3eb;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        #loading-screen.hidden {
            opacity: 0;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div id="loading-screen">
        <iframe src="Loadingv2.html" width="823" height="230" frameborder="0"></iframe>
    </div>
    
    <main id="content" style="display: none;">
        <!-- Your main content here -->
    </main>
    
    <script>
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('loading-screen').classList.add('hidden');
                document.getElementById('content').style.display = 'block';
            }, 3000); // Show loading for 3 seconds
        });
    </script>
</body>
</html>
```

### Inline Integration

Copy the CSS and JavaScript directly into your existing HTML:

```html
<!-- Add to your <head> -->
<style>
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f3eb;
    }
    .loading-container canvas {
        background: #f3f3eb;
    }
</style>

<!-- Add to your <body> -->
<div class="loading-container">
    <canvas id="breakout" width="823" height="230"></canvas>
</div>

<!-- Add before closing </body> -->
<script>
    // Paste the JavaScript from Loading.html or Loadingv2.html here
</script>
```

---

## Configuration Options

### Canvas Dimensions

Modify the canvas size to fit your layout:

```html
<!-- Default size -->
<canvas id="breakout" width="823" height="230"></canvas>

<!-- Smaller size (adjust proportionally) -->
<canvas id="breakout" width="600" height="168"></canvas>

<!-- Larger size -->
<canvas id="breakout" width="1000" height="280"></canvas>
```

**Note:** When changing dimensions, you may need to adjust:
- `brickOffsetTop` - Top margin for bricks
- `brickWidth` and `brickHeight` - Size of individual bricks
- `brickPadding` - Space between bricks

### Color Scheme

#### Light Theme (Default)

```css
body { background: #f3f3eb; }
```
```javascript
ctx.fillStyle = "#0d0d19";  // Dark elements
```

#### Dark Theme

```css
body { background: #1a1a2e; }
```
```javascript
ctx.fillStyle = "#e0e0e0";  // Light elements
```

### Ball Settings

```javascript
// Ball size (radius in pixels)
let ballRadius = 5;

// Initial speed
let speed = 6;  // v2 default
let speed = 4;  // v1 default

// Starting position
let x = canvas.width / 2;
let y = canvas.height - 30;
```

### Paddle Settings

```javascript
// Paddle dimensions
const paddleHeight = 8;
let paddleWidth = 40;

// Movement speeds
const paddleSpeedNormal = 5.6;
const paddleSpeedBoost = 13;  // Emergency speed when ball is far
```

---

## Advanced Customization

### Custom Text Pattern

The text is created using ASCII art where `__` represents a brick and spaces are empty:

```javascript
const BRICK_ART = [
    `__  __    ______    __        __        ______`,
    `__  __    __        __        __        __    __`,
    `______    ____      __        __        __    __`,
    `__  __    __        __        __        __    __`,
    `__  __    ______    ______    ______    ______`,
];
```

**Tips for creating custom text:**
- Each character is 2 columns wide in the ASCII art
- Use `__` for filled bricks
- Use `  ` (two spaces) for empty space
- Keep rows the same length for consistency

### Particle Effect Customization (v2 only)

```javascript
// Spawn particles function parameters:
spawnParticles(
    x,           // X position
    y,           // Y position
    color,       // Particle color (e.g., '#0d0d19')
    count,       // Number of particles (12-15 recommended)
    minSize,     // Minimum particle size
    maxSize,     // Maximum particle size
    minSpeed,    // Minimum speed
    maxSpeed,    // Maximum speed
    minLife,     // Minimum lifetime (frames)
    maxLife,     // Maximum lifetime (frames)
    shadow       // Enable shadow effect (true/false)
);
```

### Manual Mode Behavior (v2 only)

```javascript
// Number of clicks to activate manual mode
if (canvasClickCount >= 3) activateManualMode();

// Paddle width in manual mode
paddleWidth = 86;  // Increased from 40

// Smooth paddle movement factor
manualPaddleTargetX += (targetX - manualPaddleTargetX) * 0.25;
```

---

## Troubleshooting

### Animation Not Showing

1. **Check browser console** for JavaScript errors
2. **Ensure canvas element** exists with correct ID
3. **Verify file path** is correct when embedding

### Performance Issues

1. **Reduce particle count** in v2:
   ```javascript
   // Change from 12-15 to 6-8
   12 + Math.floor(Math.random() * 4)  // Original
   6 + Math.floor(Math.random() * 2)   // Reduced
   ```

2. **Use v1** for better performance on older devices

### Touch Controls Not Working

Ensure you're using v2 and touch events are enabled:

```javascript
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();  // Important for mobile
    // ...
});
```

### Ball Gets Stuck

The animation includes anti-stuck logic that deflects the ball after:
- 5 non-brick hits, OR
- 4 consecutive bounces without hitting a target

If issues persist, try refreshing the page.

---

## Browser-Specific Notes

### Safari
- Ensure `e.preventDefault()` is called in touch handlers
- May need `-webkit-overflow-scrolling: touch` for smooth scrolling

### Mobile Chrome
- Touch events work best with `passive: false` option

### Firefox
- Full support, no special configuration needed

---

## Example Implementations

### Loading Screen with Progress Bar

```html
<div class="loading-wrapper">
    <iframe src="Loadingv2.html" width="823" height="230" frameborder="0"></iframe>
    <div class="progress-bar">
        <div class="progress-fill" id="progress"></div>
    </div>
</div>

<style>
.progress-bar {
    width: 200px;
    height: 4px;
    background: #ddd;
    margin-top: 20px;
    border-radius: 2px;
    overflow: hidden;
}
.progress-fill {
    height: 100%;
    width: 0%;
    background: #0d0d19;
    transition: width 0.3s ease;
}
</style>

<script>
let progress = 0;
const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
    }
    document.getElementById('progress').style.width = progress + '%';
}, 200);
</script>
```

### Responsive Container

```html
<div class="responsive-loading">
    <iframe src="Loadingv2.html" frameborder="0"></iframe>
</div>

<style>
.responsive-loading {
    position: relative;
    width: 100%;
    padding-bottom: 27.9%;  /* Aspect ratio: 230/823 */
    overflow: hidden;
}
.responsive-loading iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
```

---

## Need More Help?

- Check the [README](../README.md) for quick reference
- Review the [API documentation](./API.md) for function details
- Open an issue on GitHub for bugs or feature requests
