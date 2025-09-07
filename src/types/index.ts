export interface StickerConfig {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
  text?: string;
  textColor?: string;
  fontSize?: number;
  fontFamily?: string;
  animation?: AnimationConfig;
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
}

export interface AnimationConfig {
  type: 'bounce' | 'rotate' | 'pulse' | 'shake' | 'fade' | 'none';
  duration?: number;
  delay?: number;
  iterationCount?: number | 'infinite';
  easing?: string;
}

export interface StickerPreset {
  name: string;
  svg: string;
  defaultConfig?: Partial<StickerConfig>;
}