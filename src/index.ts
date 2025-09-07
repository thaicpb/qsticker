import { QSticker } from './QSticker';
import { getAllTemplateNames, getTemplate, templates } from './stickers';
import type { StickerConfig, AnimationConfig, StickerPreset } from './types';

export { QSticker };
export { getAllTemplateNames, getTemplate, templates };
export type { StickerConfig, AnimationConfig, StickerPreset };

export function createSticker(templateName: string, config?: StickerConfig): QSticker {
  return new QSticker(templateName, config);
}

export function createCustomSticker(svg: string, config?: StickerConfig): QSticker {
  return QSticker.fromCustomSVG(svg, config);
}

export const availableTemplates = getAllTemplateNames();

export const animations = {
  bounce: { type: 'bounce' as const },
  rotate: { type: 'rotate' as const },
  pulse: { type: 'pulse' as const },
  shake: { type: 'shake' as const },
  fade: { type: 'fade' as const }
};

if (typeof window !== 'undefined' && typeof window.QSticker === 'undefined') {
  (window as any).QSticker = {
    create: createSticker,
    createCustom: createCustomSticker,
    templates: availableTemplates,
    animations,
    QSticker
  };
}

export default QSticker;