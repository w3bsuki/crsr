"use client"

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip content={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="relative h-9 w-9 rounded-md"
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'dark' ? (
            <motion.div
              key="dark"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="h-5 w-5" />
              <span className="sr-only">Switch to light mode</span>
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="h-5 w-5" />
              <span className="sr-only">Switch to dark mode</span>
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </Tooltip>
  );
} 