import { AnimationConfig } from '../types';

export function applyAnimation(element: SVGElement, animation?: AnimationConfig): void {
  if (!animation || animation.type === 'none') {
    element.style.animation = '';
    return;
  }

  const duration = animation.duration || 1000;
  const delay = animation.delay || 0;
  const iterationCount = animation.iterationCount || 1;
  const easing = animation.easing || 'ease-in-out';

  const animationString = `${animation.type} ${duration}ms ${easing} ${delay}ms ${iterationCount}`;
  element.style.animation = animationString;

  if (!document.querySelector('#qsticker-animations')) {
    injectAnimationStyles();
  }
}

function injectAnimationStyles(): void {
  const style = document.createElement('style');
  style.id = 'qsticker-animations';
  style.textContent = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-30px); }
      60% { transform: translateY(-15px); }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
      20%, 40%, 60%, 80% { transform: translateX(10px); }
    }

    @keyframes fade {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export function removeAnimation(element: SVGElement): void {
  element.style.animation = '';
}

export function pauseAnimation(element: SVGElement): void {
  element.style.animationPlayState = 'paused';
}

export function resumeAnimation(element: SVGElement): void {
  element.style.animationPlayState = 'running';
}