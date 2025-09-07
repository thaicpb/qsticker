import { StickerConfig } from '../types';

export function createSVGElement(
  template: string,
  config: StickerConfig
): SVGElement {
  const div = document.createElement('div');
  div.innerHTML = template;
  const svg = div.querySelector('svg') as SVGElement;
  
  if (!svg) {
    throw new Error('Invalid SVG template');
  }

  if (config.width) svg.setAttribute('width', String(config.width));
  if (config.height) svg.setAttribute('height', String(config.height));
  if (config.className) svg.setAttribute('class', config.className);
  
  if (config.color) {
    replaceColor(svg, 'fill', config.color);
  }
  
  if (config.backgroundColor) {
    const rect = svg.querySelector('rect[data-background="true"]');
    if (rect) {
      rect.setAttribute('fill', config.backgroundColor);
    }
  }
  
  if (config.text) {
    addText(svg, config);
  }
  
  if (config.style) {
    applyStyles(svg, config.style);
  }
  
  return svg;
}

export function replaceColor(
  svg: SVGElement,
  attribute: string,
  color: string
): void {
  const elements = svg.querySelectorAll(`[${attribute}]:not([data-background="true"])`);
  elements.forEach((el) => {
    if (el.getAttribute(attribute) !== 'none') {
      el.setAttribute(attribute, color);
    }
  });
}

export function addText(
  svg: SVGElement,
  config: StickerConfig
): void {
  const existingText = svg.querySelector('text[data-dynamic="true"]');
  
  if (existingText) {
    existingText.textContent = config.text || '';
    if (config.textColor) {
      existingText.setAttribute('fill', config.textColor);
    }
    if (config.fontSize) {
      existingText.setAttribute('font-size', String(config.fontSize));
    }
    if (config.fontFamily) {
      existingText.setAttribute('font-family', config.fontFamily);
    }
  } else {
    const viewBox = svg.getAttribute('viewBox');
    if (!viewBox) return;
    
    const [, , width, height] = viewBox.split(' ').map(Number);
    
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('data-dynamic', 'true');
    text.setAttribute('x', String(width / 2));
    text.setAttribute('y', String(height / 2));
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('fill', config.textColor || '#000000');
    text.setAttribute('font-size', String(config.fontSize || 16));
    text.setAttribute('font-family', config.fontFamily || 'Arial, sans-serif');
    text.textContent = config.text || '';
    
    svg.appendChild(text);
  }
}

export function applyStyles(
  element: SVGElement,
  styles: Partial<CSSStyleDeclaration>
): void {
  Object.entries(styles).forEach(([key, value]) => {
    if (value !== undefined) {
      (element.style as any)[key] = value;
    }
  });
}

export function svgToDataURL(svg: SVGElement): string {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);
  const encodedData = encodeURIComponent(svgString);
  return `data:image/svg+xml;charset=utf-8,${encodedData}`;
}

export function svgToBlob(svg: SVGElement): Blob {
  const serializer = new XMLSerializer();
  const svgString = serializer.serializeToString(svg);
  return new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
}