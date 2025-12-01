# 🔧 API Reference

Complete reference documentation for the Super Breakout Loading Animation.

## Table of Contents

- [Global Variables](#global-variables)
- [Functions](#functions)
- [Event Handlers](#event-handlers)
- [Constants](#constants)

---

## Global Variables

### Canvas & Context

```javascript
const canvas = document.getElementById('breakout');
const ctx = canvas.getContext('2d');
```

| Variable | Type | Description |
|----------|------|-------------|
| `canvas` | HTMLCanvasElement | The main canvas element |
| `ctx` | CanvasRenderingContext2D | 2D rendering context |

### Ball Properties

```javascript
let ballRadius = 5;
let x = canvas.width / 2;
let y = canvas.height - 30;
let speed = 6;
let angle = Math.PI * (0.25 + 0.5 * Math.random());
let dx = speed * Math.cos(angle);
let dy = -speed * Math.sin(angle);
```

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `ballRadius` | number | 5 | Ball radius in pixels |
| `x` | number | canvas.width/2 | Ball X position |
| `y` | number | canvas.height-30 | Ball Y position |
| `speed` | number | 4-6 | Ball movement speed |
| `angle` | number | Random | Initial ball angle (radians) |
| `dx` | number | Calculated | X velocity component |
| `dy` | number | Calculated | Y velocity component |

### Paddle Properties

```javascript
const paddleHeight = 8;
let paddleWidth = 40;
const originalPaddleWidth = 40;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleSpeed = 5.6;
const paddleSpeedNormal = 5.6;
const paddleSpeedBoost = 13;
let paddleBoostActive = false;
let paddleMode = 'random';
```

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `paddleHeight` | number | 8 | Paddle height in pixels |
| `paddleWidth` | number | 40 | Current paddle width |
| `originalPaddleWidth` | number | 40 | Original paddle width |
| `paddleX` | number | Centered | Paddle X position |
| `paddleSpeed` | number | 5.6 | Current paddle speed |
| `paddleSpeedNormal` | number | 5.6 | Normal movement speed |
| `paddleSpeedBoost` | number | 13 | Emergency boost speed |
| `paddleBoostActive` | boolean | false | Boost mode status |
| `paddleMode` | string | 'random' | AI mode: 'random' or 'track' |

### Brick Properties

```javascript
const brickWidth = 15;
const brickHeight = 4;
const brickPadding = 2;
const brickOffsetTop = 13;
const brickOffsetLeft = 6;
```

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `brickWidth` | number | ~15 | Individual brick width |
| `brickHeight` | number | ~4 | Individual brick height |
| `brickPadding` | number | ~2 | Space between bricks |
| `brickOffsetTop` | number | ~13 | Top margin |
| `brickOffsetLeft` | number | ~6 | Left margin |

### Manual Mode (v2 only)

```javascript
let manualMode = false;
let mouseX = 0;
let manualPaddleTargetX = null;
let isFirstFall = true;
let canvasClickCount = 0;
```

| Variable | Type | Default | Description |
|----------|------|---------|-------------|
| `manualMode` | boolean | false | Manual control enabled |
| `mouseX` | number | 0 | Current mouse X position |
| `manualPaddleTargetX` | number | null | Target paddle position |
| `isFirstFall` | boolean | true | First ball drop flag |
| `canvasClickCount` | number | 0 | Click counter for activation |

### Particle System (v2 only)

```javascript
let particles = [];
```

| Variable | Type | Description |
|----------|------|-------------|
| `particles` | Array | Array of active particle objects |

**Particle Object Structure:**

```javascript
{
    x: number,       // X position
    y: number,       // Y position
    dx: number,      // X velocity
    dy: number,      // Y velocity
    size: number,    // Particle size
    color: string,   // Fill color
    life: number,    // Remaining life (frames)
    maxLife: number, // Initial life
    shadow: boolean  // Shadow effect enabled
}
```

---

## Functions

### Drawing Functions

#### `draw()`

Main game loop function. Called via `requestAnimationFrame`.

```javascript
function draw() {
    // Clear canvas
    // Draw bricks, ball, paddle
    // Handle collisions
    // Update positions
    requestAnimationFrame(draw);
}
```

**Called by:** `requestAnimationFrame`
**Calls:** `drawBricks()`, `drawBall()`, `drawPaddle()`, `collisionDetection()`, `updatePaddle()`

---

#### `drawBricks()`

Renders all active bricks on the canvas.

```javascript
function drawBricks() {
    for (let c = 0; c < bricks.length; c++) {
        for (let r = 0; r < bricks[c].length; r++) {
            if (bricks[c][r].status === 1) {
                // Calculate position
                // Draw brick rectangle
            }
        }
    }
}
```

**Returns:** void

---

#### `drawBall()`

Renders the ball at its current position.

```javascript
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0d0d19";
    ctx.fill();
    ctx.closePath();
}
```

**Returns:** void

---

#### `drawPaddle()`

Renders the paddle at its current position.

```javascript
function drawPaddle() {
    ctx.fillStyle = "#0d0d19";
    ctx.fillRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
}
```

**Returns:** void

---

### Physics Functions

#### `collisionDetection()`

Checks and handles ball-brick collisions.

```javascript
function collisionDetection() {
    // Check each brick
    // Update ball direction on hit
    // Mark brick as destroyed
    // Spawn particles (v2)
}
```

**Returns:** void
**Modifies:** `dx`, `dy`, brick status, particle array

---

#### `predictBallLandingX()`

Predicts where the ball will land on the paddle level.

```javascript
function predictBallLandingX() {
    let tx = x, ty = y, tdx = dx, tdy = dy;
    // Simulate ball movement
    // Account for wall bounces
    return Math.max(0, Math.min(canvas.width - paddleWidth, tx - paddleWidth / 2));
}
```

**Returns:** number - Predicted X position for paddle

---

#### `deflectBall()`

Randomly deflects ball to prevent stuck situations.

```javascript
function deflectBall() {
    let currentAngle = Math.atan2(dy, dx);
    let deflect = (Math.random() - 0.5) * (Math.PI / 6);
    let newAngle = currentAngle + deflect;
    // Update dx, dy
}
```

**Returns:** void
**Modifies:** `dx`, `dy`

---

### Paddle AI Functions

#### `updatePaddle()`

Updates paddle position based on current mode.

```javascript
function updatePaddle() {
    if (manualMode) {
        // Follow mouse
    } else if (dy < 0) {
        // Random walk (ball going up)
    } else {
        // Track ball (ball coming down)
    }
}
```

**Returns:** void
**Modifies:** `paddleX`, `paddleMode`, `paddleSpeed`

---

#### `calculateRequiredPaddleSpeed(targetX, timeFrames)` (v2 only)

Calculates speed needed to reach target position.

```javascript
function calculateRequiredPaddleSpeed(targetX, timeFrames) {
    const distance = Math.abs(targetX - currentPaddleCenter);
    const requiredSpeed = distance / timeFrames;
    return Math.min(paddleSpeedBoost * 1.5, requiredSpeed * 1.2);
}
```

**Parameters:**
- `targetX` (number): Target X position
- `timeFrames` (number): Frames until ball arrives

**Returns:** number - Required speed

---

### Particle Functions (v2 only)

#### `spawnParticles(x, y, color, count, minSize, maxSize, minSpeed, maxSpeed, minLife, maxLife, shadow)`

Creates particle effects at specified position.

```javascript
function spawnParticles(x, y, color, count, minSize, maxSize, minSpeed, maxSpeed, minLife, maxLife, shadow) {
    for (let i = 0; i < count; i++) {
        particles.push({
            x, y,
            dx: Math.cos(angle) * speed,
            dy: Math.sin(angle) * speed,
            size, color, life, maxLife, shadow
        });
    }
}
```

**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `x` | number | Spawn X position |
| `y` | number | Spawn Y position |
| `color` | string | Particle color |
| `count` | number | Number of particles |
| `minSize` | number | Minimum particle radius |
| `maxSize` | number | Maximum particle radius |
| `minSpeed` | number | Minimum velocity |
| `maxSpeed` | number | Maximum velocity |
| `minLife` | number | Minimum lifetime (frames) |
| `maxLife` | number | Maximum lifetime (frames) |
| `shadow` | boolean | Enable shadow effect |

**Returns:** void

---

#### `updateAndDrawParticles()`

Updates and renders all active particles.

```javascript
function updateAndDrawParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        // Update position
        // Decrease life
        // Draw with alpha fade
        // Remove dead particles
    }
}
```

**Returns:** void

---

### Control Functions (v2 only)

#### `activateManualMode()`

Switches to manual paddle control.

```javascript
function activateManualMode() {
    manualMode = true;
    canvasClickCount = 0;
    paddleWidth = 86;  // Increased width
}
```

**Returns:** void

---

#### `deactivateManualMode()`

Returns to AI paddle control.

```javascript
function deactivateManualMode() {
    manualMode = false;
    paddleWidth = originalPaddleWidth;
}
```

**Returns:** void

---

### Brick Functions (v2 only)

#### `resetBricks()`

Resets all bricks to their initial state.

```javascript
function resetBricks() {
    bricks = [];
    // Rebuild from BRICK_ART pattern
}
```

**Returns:** void

---

#### `getLowestBrickY()`

Returns Y position of lowest remaining brick.

```javascript
function getLowestBrickY() {
    let lowestY = null;
    // Find lowest brick
    return lowestY;
}
```

**Returns:** number | null

---

#### `checkBallPassedBricks()`

Detects when ball passes below brick area.

```javascript
function checkBallPassedBricks() {
    // Check if ball crossed green line
    return boolean;
}
```

**Returns:** boolean

---

## Event Handlers

### Mouse Events

```javascript
// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX - canvas.getBoundingClientRect().left;
});

// Click to activate manual mode
canvas.addEventListener('mousedown', (e) => {
    // Check if on paddle OR count clicks
});
```

### Touch Events (v2 only)

```javascript
// Touch start
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    // Check if on paddle OR count touches
});

// Touch move
document.addEventListener('touchmove', (e) => {
    mouseX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
}, { passive: false });
```

---

## Constants

### BRICK_ART

ASCII art pattern defining the brick layout.

```javascript
const BRICK_ART = [
    `__              ______   ...`,  // Row 0
    `__            __      ...`,     // Row 1
    // ... more rows
];
```

- `__` = Filled brick
- `  ` = Empty space
- Each character = 2 columns in pattern
- Total: 12 rows × ~48 columns

---

## Data Structures

### Brick Object

```javascript
{
    x: number,      // X position (calculated)
    y: number,      // Y position (calculated)
    status: number  // 1 = active, 0 = destroyed
}
```

### Bricks Array

```javascript
bricks[column][row] = {
    x: brickX,
    y: brickY,
    status: 1
};
```

---

## Animation Flow

```
┌─────────────────────────────────────────────────────────┐
│                     draw()                               │
├─────────────────────────────────────────────────────────┤
│  1. Clear canvas                                         │
│  2. drawBricks()                                         │
│  3. drawBall()                                           │
│  4. drawPaddle()                                         │
│  5. updateAndDrawParticles() [v2]                        │
│  6. collisionDetection()                                 │
│  7. Handle wall/paddle collisions                        │
│  8. Check ball reset conditions                          │
│  9. Update ball position (x += dx, y += dy)              │
│  10. updatePaddle()                                      │
│  11. requestAnimationFrame(draw)                         │
└─────────────────────────────────────────────────────────┘
```

---

## Performance Notes

1. **Particle Count**: Keep under 50 active particles
2. **Canvas Size**: Larger canvases may slow down on mobile
3. **Animation Frame**: Uses `requestAnimationFrame` for 60fps target
4. **Collision Detection**: O(n) where n = brick count
