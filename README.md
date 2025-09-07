# QSticker 🎨

A lightweight, customizable SVG sticker library for creating dynamic and animated stickers in web applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

## Features ✨

- 🎯 **10+ Built-in Templates** - Star, heart, badge, circle, triangle, ribbon, sparkle, cloud, tag, and burst
- 🎨 **Fully Customizable** - Colors, sizes, text, and styles
- 🎬 **Smooth Animations** - Bounce, rotate, pulse, shake, and fade effects
- 📝 **Dynamic Text** - Add and style text on stickers
- 💾 **Multiple Export Formats** - SVG, Data URL, Blob, and Image
- 📦 **Lightweight** - No dependencies, pure JavaScript/TypeScript
- 🔧 **TypeScript Support** - Full type definitions included
- 🌐 **Framework Agnostic** - Works with any JavaScript framework or vanilla JS

## Installation

```bash
npm install qsticker
```

Or with yarn:

```bash
yarn add qsticker
```

## Quick Start

```javascript
import { QSticker, createSticker } from 'qsticker';

// Create a sticker from a template
const sticker = createSticker('star', {
  width: 150,
  height: 150,
  color: '#FFD700',
  animation: {
    type: 'pulse',
    duration: 2000,
    iterationCount: 'infinite'
  }
});

// Render to a container
sticker.render('#my-container');
```

## Usage Examples

### Basic Sticker Creation

```javascript
import { QSticker } from 'qsticker';

// Create a heart sticker
const heart = new QSticker('heart', {
  width: 100,
  height: 100,
  color: '#FF69B4'
});

heart.render(document.getElementById('sticker-container'));
```

### Adding Text to Stickers

```javascript
const badge = new QSticker('badge', {
  width: 120,
  height: 120,
  backgroundColor: '#3498db',
  text: 'NEW',
  textColor: '#ffffff',
  fontSize: 24
});

// Update text dynamically
badge.setText('SALE', {
  color: '#FFD700',
  fontSize: 28
});
```

### Applying Animations

```javascript
const star = new QSticker('star', {
  width: 100,
  height: 100,
  animation: {
    type: 'rotate',
    duration: 3000,
    iterationCount: 'infinite',
    easing: 'linear'
  }
});

// Control animations
star.pauseAnimation();
star.resumeAnimation();
star.removeAnimation();
```

### Custom SVG Stickers

```javascript
import { createCustomSticker } from 'qsticker';

const customSVG = `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" fill="#00BCD4"/>
  </svg>
`;

const customSticker = createCustomSticker(customSVG, {
  width: 150,
  height: 150
});
```

### Exporting Stickers

```javascript
const sticker = new QSticker('star', { width: 200, height: 200 });

// Get as Data URL
const dataURL = sticker.toDataURL();

// Get as Blob
const blob = sticker.toBlob();

// Convert to Image element
const image = await sticker.toImage();

// Download as SVG file
function downloadSticker(sticker) {
  const blob = sticker.toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'my-sticker.svg';
  a.click();
  URL.revokeObjectURL(url);
}
```

## API Reference

### QSticker Class

#### Constructor
```typescript
new QSticker(templateName: string, config?: StickerConfig)
```

#### Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `render(container)` | Renders the sticker to a DOM element | `HTMLElement \| string` | `void` |
| `update(config)` | Updates sticker configuration | `Partial<StickerConfig>` | `void` |
| `setText(text, config?)` | Sets or updates text | `string, TextConfig?` | `void` |
| `setColor(color)` | Updates main color | `string` | `void` |
| `setBackgroundColor(color)` | Updates background color | `string` | `void` |
| `setSize(width, height)` | Updates dimensions | `number, number` | `void` |
| `setAnimation(animation)` | Applies animation | `AnimationConfig` | `void` |
| `pauseAnimation()` | Pauses current animation | - | `void` |
| `resumeAnimation()` | Resumes paused animation | - | `void` |
| `removeAnimation()` | Removes animation | - | `void` |
| `toDataURL()` | Exports as Data URL | - | `string` |
| `toBlob()` | Exports as Blob | - | `Blob` |
| `toImage()` | Converts to Image element | - | `Promise<HTMLImageElement>` |
| `clone()` | Creates a copy | - | `QSticker` |
| `destroy()` | Removes from DOM | - | `void` |

### Configuration Options

```typescript
interface StickerConfig {
  width?: number;              // Width in pixels
  height?: number;             // Height in pixels
  color?: string;              // Main color (hex, rgb, etc.)
  backgroundColor?: string;    // Background color
  text?: string;              // Text content
  textColor?: string;         // Text color
  fontSize?: number;          // Font size in pixels
  fontFamily?: string;        // Font family
  animation?: AnimationConfig; // Animation settings
  className?: string;         // CSS class name
  style?: Partial<CSSStyleDeclaration>; // Inline styles
}

interface AnimationConfig {
  type: 'bounce' | 'rotate' | 'pulse' | 'shake' | 'fade' | 'none';
  duration?: number;          // Duration in milliseconds
  delay?: number;             // Delay in milliseconds
  iterationCount?: number | 'infinite';
  easing?: string;            // CSS easing function
}
```

## Available Templates

- `star` - Classic star shape
- `heart` - Heart shape
- `badge` - Rounded rectangle badge with text
- `circle` - Simple circle
- `triangle` - Equilateral triangle
- `ribbon` - Ribbon banner with text
- `sparkle` - Four-pointed sparkle
- `cloud` - Cloud shape
- `tag` - Price tag shape with text
- `burst` - Starburst shape

## Browser Support

QSticker works in all modern browsers that support SVG:

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/qsticker.git
cd qsticker

# Install dependencies
npm install

# Start development
npm run dev
```

### Build

```bash
# Build the library
npm run build

# Run demo
npm run demo
```

### Project Structure

```
qsticker/
├── src/
│   ├── index.ts           # Main entry point
│   ├── QSticker.ts        # Core class
│   ├── types/             # TypeScript definitions
│   ├── utils/             # Utility functions
│   └── stickers/          # Template definitions
├── demo/                  # Demo application
├── dist/                  # Build output
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Created with ❤️ by thaicpb(https://github.com/thaicpb)

## Acknowledgments

- Inspired by the need for lightweight, customizable sticker solutions
- Built with TypeScript for type safety
- Uses Rollup for efficient bundling

## Support

If you find this library helpful, please consider:
- Giving it a ⭐ on GitHub
- Sharing it with others
- Contributing to its development

For issues and feature requests, please use the [GitHub issues page](https://github.com/thaicpb/qsticker/issues).