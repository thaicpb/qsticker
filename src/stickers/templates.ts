import { StickerPreset } from '../types';

export const templates: Record<string, StickerPreset> = {
  star: {
    name: 'star',
    svg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon 
          points="50,15 61,35 83,35 66,50 72,72 50,57 28,72 34,50 17,35 39,35"
          fill="#FFD700"
        />
      </svg>
    `,
    defaultConfig: {
      width: 100,
      height: 100,
      color: '#FFD700'
    }
  },

  heart: {
    name: 'heart',
    svg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M50,25 C30,0 0,12.5 0,35 C0,55 50,90 50,90 C50,90 100,55 100,35 C100,12.5 70,0 50,25 Z"
          fill="#FF69B4"
        />
      </svg>
    `,
    defaultConfig: {
      width: 100,
      height: 100,
      color: '#FF69B4'
    }
  },

  badge: {
    name: 'badge',
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect data-background="true" x="0" y="0" width="120" height="120" rx="20" fill="#3498db"/>
        <text data-dynamic="true" x="60" y="60" text-anchor="middle" dominant-baseline="middle" 
              fill="white" font-size="24" font-family="Arial, sans-serif">BADGE</text>
      </svg>
    `,
    defaultConfig: {
      width: 120,
      height: 120,
      backgroundColor: '#3498db',
      textColor: '#ffffff',
      fontSize: 24
    }
  },

  circle: {
    name: 'circle',
    svg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#2ecc71"/>
      </svg>
    `,
    defaultConfig: {
      width: 100,
      height: 100,
      color: '#2ecc71'
    }
  },

  triangle: {
    name: 'triangle',
    svg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 90,90 10,90" fill="#e74c3c"/>
      </svg>
    `,
    defaultConfig: {
      width: 100,
      height: 100,
      color: '#e74c3c'
    }
  },

  ribbon: {
    name: 'ribbon',
    svg: `
      <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,30 L140,30 L140,70 L125,50 L140,70 L10,70 L25,50 L10,70 Z" 
              fill="#9b59b6"/>
        <text data-dynamic="true" x="75" y="50" text-anchor="middle" dominant-baseline="middle"
              fill="white" font-size="20" font-family="Arial, sans-serif">RIBBON</text>
      </svg>
    `,
    defaultConfig: {
      width: 150,
      height: 100,
      color: '#9b59b6',
      textColor: '#ffffff',
      fontSize: 20
    }
  },

  sparkle: {
    name: 'sparkle',
    svg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,5 L55,40 L90,50 L55,60 L50,95 L45,60 L10,50 L45,40 Z"
              fill="#f39c12"/>
      </svg>
    `,
    defaultConfig: {
      width: 100,
      height: 100,
      color: '#f39c12'
    }
  },

  cloud: {
    name: 'cloud',
    svg: `
      <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M35,60 C15,60 15,40 30,40 C30,20 50,20 60,30 C70,10 95,10 95,30 
                 C110,30 120,40 115,60 Z"
              fill="#ecf0f1"/>
      </svg>
    `,
    defaultConfig: {
      width: 150,
      height: 100,
      color: '#ecf0f1'
    }
  },

  tag: {
    name: 'tag',
    svg: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,10 L60,10 L110,60 L60,110 L10,60 Z" fill="#1abc9c"/>
        <circle cx="30" cy="30" r="8" fill="white"/>
        <text data-dynamic="true" x="60" y="60" text-anchor="middle" dominant-baseline="middle"
              fill="white" font-size="18" font-family="Arial, sans-serif">TAG</text>
      </svg>
    `,
    defaultConfig: {
      width: 120,
      height: 120,
      color: '#1abc9c',
      textColor: '#ffffff',
      fontSize: 18
    }
  },

  burst: {
    name: 'burst',
    svg: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,10 L60,35 L85,25 L70,50 L95,60 L70,60 L80,85 L55,70 L50,95 
                 L45,70 L20,85 L30,60 L5,60 L30,50 L15,25 L40,35 Z"
              fill="#e67e22"/>
      </svg>
    `,
    defaultConfig: {
      width: 100,
      height: 100,
      color: '#e67e22'
    }
  }
};

export function getTemplate(name: string): StickerPreset | undefined {
  return templates[name];
}

export function getAllTemplateNames(): string[] {
  return Object.keys(templates);
}