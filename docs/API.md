# API Documentation

## Text-to-Brick Converter API

The Super Breakout Loading Animation provides a powerful API for converting text to brick art patterns. This document covers all available methods and configuration options.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Installation](#installation)
3. [BrickArtConverter Class](#brickartconverter-class)
4. [Configuration Options](#configuration-options)
5. [Methods](#methods)
6. [Utility Functions](#utility-functions)
7. [Supported Characters](#supported-characters)
8. [Custom Glyphs](#custom-glyphs)
9. [Examples](#examples)

---

## Quick Start

```javascript
// Import the converter
import { BrickArtConverter } from './api/brick-art-converter.js';

// Create a converter instance
const converter = new BrickArtConverter();

// Convert text to brick art
const brickArt = converter.convert('HELLO');

// Get as JavaScript array for direct use
const jsArray = converter.toJsArray('HELLO');
console.log(jsArray);
```

---

## Installation

### Browser (ES6 Modules)

```html
<script type="module">
  import { BrickArtConverter } from './api/brick-art-converter.js';
  
  const converter = new BrickArtConverter();
  const art = converter.convert('LOADING');
</script>
```

### Browser (Global)

```html
<script src="./api/brick-art-converter.js"></script>
<script>
  const converter = new BrickArtConverter();
  const art = converter.convert('LOADING');
</script>
```

### Node.js (CommonJS)

```javascript
const { BrickArtConverter } = require('./api/brick-art-converter.js');

const converter = new BrickArtConverter();
const art = converter.convert('LOADING');
```

---

## BrickArtConverter Class

The main class for converting text to brick art patterns.

### Constructor

```javascript
new BrickArtConverter(options?)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `options` | Object | Optional configuration object |

### Example

```javascript
// Default configuration
const converter = new BrickArtConverter();

// Custom configuration
const customConverter = new BrickArtConverter({
  pixelWidth: 3,
  charSpacing: 4,
  targetRows: 10,
  fillChar: '#',
  emptyChar: '.'
});
```

---

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `pixelWidth` | Number | `2` | Number of characters per "pixel" |
| `charSpacing` | Number | `2.5` | Number of spaces between letters |
| `targetRows` | Number | `12` | Number of output rows |
| `fillChar` | String | `'_'` | Character used for filled pixels |
| `emptyChar` | String | `' '` | Character used for empty pixels |

### Example: Custom Configuration

```javascript
const converter = new BrickArtConverter({
  pixelWidth: 2,      // Each pixel is 2 characters wide
  charSpacing: 3,     // 3 spaces between letters
  targetRows: 12,     // Standard 12 rows
  fillChar: '_',      // Underscores for bricks
  emptyChar: ' '      // Spaces for gaps
});
```

---

## Methods

### convert(text)

Converts text to an array of brick art strings.

**Parameters:**
- `text` (String): The input text to convert

**Returns:** `String[]` - Array of strings representing the brick art

**Example:**
```javascript
const converter = new BrickArtConverter();
const art = converter.convert('HELLO');

// Output: Array of 12 strings
console.log(art.length); // 12
console.log(art[0]);     // First row of brick art
```

---

### toJsArray(text, useBackticks?)

Converts text to a JavaScript array literal string, ready to paste into code.

**Parameters:**
- `text` (String): The input text to convert
- `useBackticks` (Boolean, optional): Use template literals (default: `true`)

**Returns:** `String` - JavaScript array literal as a string

**Example:**
```javascript
const converter = new BrickArtConverter();
const jsArray = converter.toJsArray('HELLO');

console.log(jsArray);
// Output:
// [
//     `__      __    ________    ...`,
//     `__      __    __          ...`,
//     ...
// ]
```

---

### render(text)

Renders brick art as a single multi-line string.

**Parameters:**
- `text` (String): The input text to convert

**Returns:** `String` - Multi-line string of the brick art

**Example:**
```javascript
const converter = new BrickArtConverter();
console.log(converter.render('HI'));

// Output (visual):
// __      __      ______
// __      __        __
// __      __        __
// ...
```

---

### addGlyph(char, bitmap)

Adds a custom glyph for a character.

**Parameters:**
- `char` (String): Single character to define
- `bitmap` (String[]): 7-element array of 5-character binary strings

**Returns:** `BrickArtConverter` - Returns this for method chaining

**Example:**
```javascript
converter.addGlyph('♥', [
  "01010",
  "11111",
  "11111",
  "01110",
  "00100",
  "00000",
  "00000"
]);
```

---

### getSupportedCharacters()

Gets the list of all supported characters.

**Returns:** `String[]` - Array of supported characters

**Example:**
```javascript
const converter = new BrickArtConverter();
const chars = converter.getSupportedCharacters();
console.log(chars); // ['A', 'B', 'C', ...]
```

---

### isSupported(char)

Checks if a character is supported.

**Parameters:**
- `char` (String): Character to check

**Returns:** `Boolean` - True if character is supported

**Example:**
```javascript
const converter = new BrickArtConverter();
console.log(converter.isSupported('A')); // true
console.log(converter.isSupported('★')); // false
```

---

### configure(options)

Updates configuration options after initialization.

**Parameters:**
- `options` (Object): New configuration options

**Returns:** `BrickArtConverter` - Returns this for method chaining

**Example:**
```javascript
const converter = new BrickArtConverter();
converter
  .configure({ targetRows: 10 })
  .configure({ pixelWidth: 3 });
```

---

## Utility Functions

### createBrickArtConverter(options?)

Factory function to create a BrickArtConverter instance.

```javascript
import { createBrickArtConverter } from './api/brick-art-converter.js';

const converter = createBrickArtConverter({ targetRows: 10 });
```

---

### quickConvert(text, options?)

One-off conversion function without creating an instance.

```javascript
import { quickConvert } from './api/brick-art-converter.js';

const art = quickConvert('LOADING');
```

---

### quickConvertToJs(text, options?)

One-off conversion to JavaScript array literal.

```javascript
import { quickConvertToJs } from './api/brick-art-converter.js';

const jsArray = quickConvertToJs('LOADING');
console.log(jsArray);
```

---

## Supported Characters

### Letters
`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`

Both uppercase and lowercase are supported (lowercase is converted to uppercase).

### Numbers
`0 1 2 3 4 5 6 7 8 9`

### Symbols
`! @ # $ % ^ & * ( ) _ - + = { } [ ] : ; " ' < , > . ? /`

### Special
` ` (space)

---

## Custom Glyphs

You can add custom characters using the `addGlyph` method. Each glyph is defined as a 5x7 grid:

```javascript
// Glyph structure:
// - 7 rows (height)
// - 5 columns per row (width)
// - '1' = filled pixel
// - '0' = empty pixel

converter.addGlyph('★', [
  "00100",  // Row 1
  "00100",  // Row 2
  "11111",  // Row 3
  "01110",  // Row 4
  "01010",  // Row 5
  "10001",  // Row 6
  "00000"   // Row 7
]);
```

### Glyph Grid Visualization

```
       Col
       1 2 3 4 5
Row 1: 0 0 1 0 0  →  "00100"
Row 2: 0 0 1 0 0  →  "00100"
Row 3: 1 1 1 1 1  →  "11111"
Row 4: 0 1 1 1 0  →  "01110"
Row 5: 0 1 0 1 0  →  "01010"
Row 6: 1 0 0 0 1  →  "10001"
Row 7: 0 0 0 0 0  →  "00000"
```

---

## Examples

### Basic Usage

```javascript
import { BrickArtConverter } from './api/brick-art-converter.js';

const converter = new BrickArtConverter();

// Simple conversion
const art = converter.convert('LOADING');
console.log(art.join('\n'));
```

### Integration with Animation

```javascript
import { BrickArtConverter } from './api/brick-art-converter.js';

const converter = new BrickArtConverter();

// Generate BRICK_ART for your custom text
const BRICK_ART = converter.convert('MY TEXT');

// Use in your animation code
const brickRowCountArt = BRICK_ART.length;
const brickColumnCountArt = Math.floor(BRICK_ART[0].length / 2);

// Initialize bricks from pattern
for (let r = 0; r < brickRowCountArt; r++) {
  for (let c = 0; c < brickColumnCountArt; c++) {
    const pair = BRICK_ART[r].substr(c * 2, 2);
    if (pair === '__') {
      bricks[c][r].status = 1;
    }
  }
}
```

### Dynamic Text Update

```javascript
import { BrickArtConverter } from './api/brick-art-converter.js';

const converter = new BrickArtConverter();

function updateBrickText(newText) {
  // Generate new brick art
  const newBrickArt = converter.convert(newText);
  
  // Update brick pattern
  BRICK_ART = newBrickArt;
  
  // Re-initialize bricks
  initBricks();
}

// Usage
updateBrickText('HELLO');
```

### Custom Styling

```javascript
// Create converter with custom styling
const converter = new BrickArtConverter({
  pixelWidth: 3,       // Wider pixels
  charSpacing: 4,      // More space between chars
  targetRows: 14,      // Taller output
  fillChar: '█',       // Block character for pixels
  emptyChar: '░'       // Light shade for empty space
});

const art = converter.convert('DEMO');
console.log(art.join('\n'));
```

---

## Error Handling

```javascript
const converter = new BrickArtConverter();

try {
  // Invalid glyph definition
  converter.addGlyph('X', ['invalid']);
} catch (error) {
  console.error('Glyph error:', error.message);
  // "Glyph bitmap must have exactly 7 rows"
}
```

---

## Performance Tips

1. **Reuse converter instances** - Create one converter and reuse it
2. **Cache results** - Store generated brick art if using the same text repeatedly
3. **Use appropriate row count** - Standard 12 rows is optimized for the animation

```javascript
// Good - reuse converter
const converter = new BrickArtConverter();
const art1 = converter.convert('TEXT1');
const art2 = converter.convert('TEXT2');

// Less efficient - creating new instances
const art1 = new BrickArtConverter().convert('TEXT1');
const art2 = new BrickArtConverter().convert('TEXT2');
```

---

## Browser Support

The API is compatible with:
- Modern browsers (ES6+)
- Node.js (v14+)
- All major browsers with module support

For older browsers, use a bundler like Webpack or Rollup to transpile the code.
