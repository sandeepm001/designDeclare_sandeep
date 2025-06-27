import { useLayoutEffect } from 'react';

export default function useStaggerReveal(stagger = 0.15) {
  useLayoutEffect(() => {
    const lines = document.querySelectorAll('.reveal-line');
    lines.forEach((line, i) => {
      line.classList.remove('show');              // reset on remount/route-change
      setTimeout(() => line.classList.add('show'), i * stagger * 1000);
    });
  }, [stagger]);
}
