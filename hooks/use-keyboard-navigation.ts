import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface KeyboardNavigation {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  action: () => void;
}

export const useKeyboardNavigation = (shortcuts: KeyboardNavigation[]) => {
  const router = useRouter();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      shortcuts.forEach(({ key, ctrl, alt, shift, action }) => {
        if (
          event.key.toLowerCase() === key.toLowerCase() &&
          (!ctrl || event.ctrlKey) &&
          (!alt || event.altKey) &&
          (!shift || event.shiftKey)
        ) {
          event.preventDefault();
          action();
        }
      });
    },
    [shortcuts]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};

// Example usage:
/*
useKeyboardNavigation([
  {
    key: 'k',
    ctrl: true,
    action: () => setSearchOpen(true),
  },
  {
    key: 'ArrowUp',
    action: () => scrollToTop(),
  },
  {
    key: '/',
    action: () => setSearchOpen(true),
  },
  {
    key: 'Escape',
    action: () => setSearchOpen(false),
  },
]);
*/ 