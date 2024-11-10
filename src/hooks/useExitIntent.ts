import { useState, useEffect } from 'react';

export function useExitIntent(delay = 0) {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    let isEnabled = true;

    const enableAfterDelay = () => {
      timeoutId = window.setTimeout(() => {
        isEnabled = true;
      }, delay);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && isEnabled && !hasShown) {
        setShowExitIntent(true);
        setHasShown(true);
        isEnabled = false;
      }
    };

    enableAfterDelay();

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.clearTimeout(timeoutId);
    };
  }, [delay, hasShown]);

  return {
    showExitIntent,
    setShowExitIntent
  };
}