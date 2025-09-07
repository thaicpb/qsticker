import { StickerConfig, StickerPreset, AnimationConfig } from './types';
import { createSVGElement, svgToDataURL, svgToBlob, applyAnimation, removeAnimation, pauseAnimation, resumeAnimation } from './utils';
import { getTemplate } from './stickers';

export class QSticker {
  private element: SVGElement | null = null;
  private config: StickerConfig;
  private template: StickerPreset;

  constructor(templateName: string, config?: StickerConfig) {
    const template = getTemplate(templateName);
    
    if (!template) {
      throw new Error(`Template "${templateName}" not found`);
    }

    this.template = template;
    this.config = {
      ...template.defaultConfig,
      ...config
    };

    this.createElement();
  }

  private createElement(): void {
    this.element = createSVGElement(this.template.svg, this.config);
    
    if (this.config.animation) {
      applyAnimation(this.element, this.config.animation);
    }
  }

  public render(container: HTMLElement | string): void {
    if (!this.element) {
      throw new Error('Sticker element not initialized');
    }

    const targetContainer = typeof container === 'string' 
      ? document.querySelector(container) as HTMLElement
      : container;

    if (!targetContainer) {
      throw new Error('Container element not found');
    }

    targetContainer.appendChild(this.element);
  }

  public update(config: Partial<StickerConfig>): void {
    this.config = { ...this.config, ...config };
    
    if (this.element && this.element.parentNode) {
      const parent = this.element.parentNode;
      this.createElement();
      parent.replaceChild(this.element!, parent.querySelector('svg')!);
    } else {
      this.createElement();
    }
  }

  public setAnimation(animation: AnimationConfig): void {
    if (!this.element) return;
    
    this.config.animation = animation;
    applyAnimation(this.element, animation);
  }

  public removeAnimation(): void {
    if (!this.element) return;
    
    delete this.config.animation;
    removeAnimation(this.element);
  }

  public pauseAnimation(): void {
    if (!this.element) return;
    pauseAnimation(this.element);
  }

  public resumeAnimation(): void {
    if (!this.element) return;
    resumeAnimation(this.element);
  }

  public setText(text: string, textConfig?: { color?: string; fontSize?: number; fontFamily?: string }): void {
    this.update({
      text,
      textColor: textConfig?.color || this.config.textColor,
      fontSize: textConfig?.fontSize || this.config.fontSize,
      fontFamily: textConfig?.fontFamily || this.config.fontFamily
    });
  }

  public setColor(color: string): void {
    this.update({ color });
  }

  public setBackgroundColor(backgroundColor: string): void {
    this.update({ backgroundColor });
  }

  public setSize(width: number, height: number): void {
    this.update({ width, height });
  }

  public toDataURL(): string {
    if (!this.element) {
      throw new Error('Sticker element not initialized');
    }
    return svgToDataURL(this.element);
  }

  public toBlob(): Blob {
    if (!this.element) {
      throw new Error('Sticker element not initialized');
    }
    return svgToBlob(this.element);
  }

  public async toImage(): Promise<HTMLImageElement> {
    const dataURL = this.toDataURL();
    const img = new Image();
    
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = dataURL;
    });
  }

  public getElement(): SVGElement | null {
    return this.element;
  }

  public getConfig(): StickerConfig {
    return { ...this.config };
  }

  public clone(): QSticker {
    return new QSticker(this.template.name, this.config);
  }

  public destroy(): void {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }

  public static fromCustomSVG(svg: string, config?: StickerConfig): QSticker {
    const customPreset: StickerPreset = {
      name: 'custom',
      svg,
      defaultConfig: config
    };

    const sticker = Object.create(QSticker.prototype);
    sticker.template = customPreset;
    sticker.config = config || {};
    sticker.createElement = QSticker.prototype.createElement;
    sticker.createElement();
    
    return sticker;
  }
}