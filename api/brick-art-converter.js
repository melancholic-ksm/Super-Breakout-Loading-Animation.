/**
 * ========================================
 * SUPER BREAKOUT TEXT-TO-BRICK CONVERTER API
 * ========================================
 *
 * A JavaScript module for converting text to brick art patterns
 * compatible with Super Breakout Loading Animation.
 *
 * @module BrickArtConverter
 * @version 1.0.0
 * @license MIT
 *
 * @example
 * // Import the module
 * import { BrickArtConverter } from './brick-art-converter.js';
 *
 * // Create a converter instance
 * const converter = new BrickArtConverter();
 *
 * // Convert text to brick art
 * const brickArt = converter.convert('HELLO');
 *
 * // Get as JavaScript array string
 * const jsArray = converter.toJsArray('HELLO');
 */

/**
 * Glyph definitions for supported characters
 * Each character is defined as a 5x7 grid where:
 * - '1' represents a filled pixel (renders as underscore)
 * - '0' represents an empty pixel (renders as space)
 */
const GLYPHS = {
  // Space character
  ' ': ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],

  // Letters A-Z
  'A': ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  'B': ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  'C': ["01110", "10001", "10000", "10000", "10000", "10001", "01110"],
  'D': ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  'E': ["11111", "10000", "10000", "11111", "10000", "10000", "11111"],
  'F': ["11111", "10000", "10000", "11111", "10000", "10000", "10000"],
  'G': ["01110", "10001", "10000", "10111", "10001", "10001", "01110"],
  'H': ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  'I': ["01110", "00100", "00100", "00100", "00100", "00100", "01110"],
  'J': ["00011", "00001", "00001", "00001", "10001", "10001", "11110"],
  'K': ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  'L': ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  'M': ["10001", "11011", "10101", "10001", "10001", "10001", "10001"],
  'N': ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  'O': ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  'P': ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  'Q': ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
  'R': ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  'S': ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  'T': ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  'U': ["10001", "10001", "10001", "10001", "10001", "10001", "11111"],
  'V': ["10001", "10001", "10001", "10001", "01010", "01010", "00100"],
  'W': ["10001", "10001", "10001", "10101", "10101", "11011", "10001"],
  'X': ["10001", "01010", "00100", "00100", "00100", "01010", "10001"],
  'Y': ["10001", "01010", "00100", "00100", "00100", "00100", "00100"],
  'Z': ["11111", "00010", "00100", "00100", "01000", "10000", "11111"],

  // Numbers 0-9
  '0': ["01110", "10001", "10011", "10101", "11001", "10001", "01110"],
  '1': ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
  '2': ["01110", "10001", "00001", "00110", "01000", "10000", "11111"],
  '3': ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
  '4': ["00010", "00110", "01010", "10010", "11111", "00010", "00010"],
  '5': ["11111", "10000", "10000", "11110", "00001", "00001", "11110"],
  '6': ["01110", "10000", "10000", "11110", "10001", "10001", "01110"],
  '7': ["11111", "00001", "00010", "00100", "01000", "10000", "10000"],
  '8': ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
  '9': ["01110", "10001", "10001", "01111", "00001", "00001", "01110"],

  // Common Symbols
  '!': ["00100", "00100", "00100", "00100", "00100", "00000", "00100"],
  '@': ["11111", "10001", "10111", "10101", "10111", "10000", "11111"],
  '#': ["01010", "11111", "01010", "11111", "01010", "11111", "01010"],
  '$': ["00100", "11111", "10100", "01110", "00101", "11111", "00100"],
  '%': ["11000", "11001", "00010", "00100", "01000", "10011", "00011"],
  '^': ["00100", "01010", "10001", "00000", "00000", "00000", "00000"],
  '&': ["01100", "10010", "10100", "01000", "10101", "10010", "01101"],
  '*': ["00000", "01010", "00100", "11111", "00100", "01010", "00000"],
  '(': ["00010", "00100", "01000", "01000", "01000", "00100", "00010"],
  ')': ["01000", "00100", "00010", "00010", "00010", "00100", "01000"],
  '_': ["00000", "00000", "00000", "00000", "00000", "00000", "11111"],
  '-': ["00000", "00000", "00000", "11111", "00000", "00000", "00000"],
  '+': ["00000", "00100", "00100", "11111", "00100", "00100", "00000"],
  '=': ["00000", "11111", "00000", "11111", "00000", "00000", "00000"],
  '{': ["00011", "00100", "00100", "11000", "00100", "00100", "00011"],
  '}': ["11000", "00100", "00100", "00011", "00100", "00100", "11000"],
  '[': ["11100", "10000", "10000", "10000", "10000", "10000", "11100"],
  ']': ["00111", "00001", "00001", "00001", "00001", "00001", "00111"],
  ':': ["00000", "00100", "00000", "00000", "00000", "00100", "00000"],
  ';': ["00000", "00100", "00000", "00000", "00000", "00100", "01000"],
  '"': ["01010", "01010", "00000", "00000", "00000", "00000", "00000"],
  "'": ["00100", "00100", "00000", "00000", "00000", "00000", "00000"],
  '<': ["00010", "00100", "01000", "10000", "01000", "00100", "00010"],
  ',': ["00000", "00000", "00000", "00000", "00000", "00100", "01000"],
  '>': ["01000", "00100", "00010", "00001", "00010", "00100", "01000"],
  '.': ["00000", "00000", "00000", "00000", "00000", "00110", "00110"],
  '?': ["11111", "10001", "00010", "00100", "00100", "00000", "00100"],
  '/': ["00001", "00010", "00100", "01000", "10000", "00000", "00000"],
};

/**
 * Default glyph used for unsupported characters
 * Displays a filled rectangle to indicate unknown character
 */
const DEFAULT_GLYPH = ["11111", "10001", "10101", "10001", "10101", "10001", "11111"];

/**
 * Default configuration options
 */
const DEFAULT_OPTIONS = {
  pixelWidth: 2,        // Characters per "pixel"
  charSpacing: 2.5,     // Spaces between letters
  targetRows: 12,       // Number of output rows
  fillChar: '_',        // Character for filled pixels
  emptyChar: ' ',       // Character for empty pixels
};

/**
 * BrickArtConverter Class
 *
 * Converts text to underscore-based ASCII art suitable for
 * Super Breakout Loading Animation brick patterns.
 *
 * @class
 */
class BrickArtConverter {
  /**
   * Creates a new BrickArtConverter instance
   *
   * @param {Object} options - Configuration options
   * @param {number} [options.pixelWidth=2] - Characters per pixel
   * @param {number} [options.charSpacing=2.5] - Spaces between letters
   * @param {number} [options.targetRows=12] - Number of output rows
   * @param {string} [options.fillChar='_'] - Character for filled pixels
   * @param {string} [options.emptyChar=' '] - Character for empty pixels
   */
  constructor(options = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.glyphs = { ...GLYPHS };
    this.defaultGlyph = DEFAULT_GLYPH;
  }

  /**
   * Scales a single row of bits to the target width
   *
   * @private
   * @param {string} bits - Binary string representing one row
   * @returns {string} Scaled row with fill and empty characters
   */
  _scaleBitsRow(bits) {
    const { pixelWidth, fillChar, emptyChar } = this.options;
    return bits
      .split('')
      .map(ch => (ch === '1' ? fillChar.repeat(pixelWidth) : emptyChar.repeat(pixelWidth)))
      .join('');
  }

  /**
   * Expands 7-row glyph to target number of rows
   *
   * @private
   * @param {string[]} rows7 - Array of 7 rows
   * @returns {string[]} Expanded array of rows
   */
  _verticalExpand(rows7) {
    const { targetRows } = this.options;
    const out = [];
    const h = 7;

    for (let r = 0; r < h; r++) {
      const start = Math.floor((r * targetRows) / h);
      const end = Math.floor(((r + 1) * targetRows) / h);
      const reps = Math.max(1, end - start);
      for (let k = 0; k < reps; k++) {
        out.push(rows7[r]);
      }
    }

    return out;
  }

  /**
   * Gets the glyph for a character
   *
   * @private
   * @param {string} char - Single character
   * @returns {string[]} Glyph bitmap array
   */
  _getGlyph(char) {
    // Convert lowercase to uppercase
    const key = char >= 'a' && char <= 'z' ? char.toUpperCase() : char;
    return this.glyphs[key] || this.defaultGlyph;
  }

  /**
   * Converts text to brick art array
   *
   * @param {string} text - Input text to convert
   * @returns {string[]} Array of strings representing the brick art
   *
   * @example
   * const converter = new BrickArtConverter();
   * const art = converter.convert('HELLO');
   * // Returns array of 12 strings containing the brick pattern
   */
  convert(text) {
    const { charSpacing, targetRows } = this.options;

    // Get characters and their glyphs
    const chars = Array.from(text);
    const bitmaps = chars.map(char => this._getGlyph(char));

    // Build the 7-row base pattern
    const base7 = [];
    for (let r = 0; r < 7; r++) {
      const segs = bitmaps.map(bmp => this._scaleBitsRow(bmp[r]));
      base7.push(segs.join(' '.repeat(charSpacing)));
    }

    // Expand to target rows
    const lines = this._verticalExpand(base7);

    // Pad all lines to same width
    const maxWidth = Math.max(...lines.map(s => s.length));
    return lines.map(s => s.padEnd(maxWidth, ' '));
  }

  /**
   * Converts text to a JavaScript array literal string
   *
   * @param {string} text - Input text to convert
   * @param {boolean} [useBackticks=true] - Use template literals
   * @returns {string} JavaScript array literal as string
   *
   * @example
   * const converter = new BrickArtConverter();
   * const jsArray = converter.toJsArray('HELLO');
   * // Returns:
   * // [
   * //     `  ____  ...`,
   * //     ...
   * // ]
   */
  toJsArray(text, useBackticks = true) {
    const lines = this.convert(text);
    const indent = '    ';

    if (useBackticks) {
      return (
        '[\n' +
        lines.map((ln, i) => `${indent}\`${ln}\`${i < lines.length - 1 ? ',' : ''}`).join('\n') +
        '\n]'
      );
    } else {
      const esc = s => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      return (
        '[\n' +
        lines.map((ln, i) => `${indent}"${esc(ln)}"${i < lines.length - 1 ? ',' : ''}`).join('\n') +
        '\n]'
      );
    }
  }

  /**
   * Renders brick art as a single string
   *
   * @param {string} text - Input text to convert
   * @returns {string} Multi-line string of the brick art
   *
   * @example
   * const converter = new BrickArtConverter();
   * console.log(converter.render('HI'));
   */
  render(text) {
    return this.convert(text).join('\n');
  }

  /**
   * Adds a custom glyph for a character
   *
   * @param {string} char - Single character to define
   * @param {string[]} bitmap - 7-element array of 5-character binary strings
   * @returns {BrickArtConverter} Returns this for chaining
   *
   * @example
   * converter.addGlyph('♥', [
   *   "01010",
   *   "11111",
   *   "11111",
   *   "01110",
   *   "00100",
   *   "00000",
   *   "00000"
   * ]);
   */
  addGlyph(char, bitmap) {
    if (bitmap.length !== 7) {
      throw new Error('Glyph bitmap must have exactly 7 rows');
    }
    if (!bitmap.every(row => row.length === 5 && /^[01]+$/.test(row))) {
      throw new Error('Each row must be a 5-character string of 0s and 1s');
    }
    this.glyphs[char.toUpperCase()] = bitmap;
    return this;
  }

  /**
   * Gets the list of supported characters
   *
   * @returns {string[]} Array of supported characters
   */
  getSupportedCharacters() {
    return Object.keys(this.glyphs);
  }

  /**
   * Checks if a character is supported
   *
   * @param {string} char - Character to check
   * @returns {boolean} True if character is supported
   */
  isSupported(char) {
    const key = char >= 'a' && char <= 'z' ? char.toUpperCase() : char;
    return key in this.glyphs;
  }

  /**
   * Updates configuration options
   *
   * @param {Object} options - New configuration options
   * @returns {BrickArtConverter} Returns this for chaining
   */
  configure(options) {
    this.options = { ...this.options, ...options };
    return this;
  }
}

/**
 * Factory function to create a BrickArtConverter instance
 *
 * @param {Object} options - Configuration options
 * @returns {BrickArtConverter} New converter instance
 *
 * @example
 * const converter = createBrickArtConverter({ targetRows: 10 });
 * const art = converter.convert('TEST');
 */
function createBrickArtConverter(options = {}) {
  return new BrickArtConverter(options);
}

/**
 * Quick convert function for one-off conversions
 *
 * @param {string} text - Text to convert
 * @param {Object} options - Configuration options
 * @returns {string[]} Array of brick art lines
 *
 * @example
 * const art = quickConvert('LOADING');
 */
function quickConvert(text, options = {}) {
  return new BrickArtConverter(options).convert(text);
}

/**
 * Quick convert to JavaScript array literal
 *
 * @param {string} text - Text to convert
 * @param {Object} options - Configuration options
 * @returns {string} JavaScript array literal string
 *
 * @example
 * const jsArray = quickConvertToJs('LOADING');
 * console.log(jsArray);
 */
function quickConvertToJs(text, options = {}) {
  return new BrickArtConverter(options).toJsArray(text);
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  // CommonJS
  module.exports = {
    BrickArtConverter,
    createBrickArtConverter,
    quickConvert,
    quickConvertToJs,
    GLYPHS,
    DEFAULT_OPTIONS,
  };
} else if (typeof window !== 'undefined') {
  // Browser global
  window.BrickArtConverter = BrickArtConverter;
  window.createBrickArtConverter = createBrickArtConverter;
  window.quickConvert = quickConvert;
  window.quickConvertToJs = quickConvertToJs;
}

// ES6 module exports
export {
  BrickArtConverter,
  createBrickArtConverter,
  quickConvert,
  quickConvertToJs,
  GLYPHS,
  DEFAULT_OPTIONS,
};
