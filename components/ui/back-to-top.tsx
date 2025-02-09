"use client"

import { useEffect, useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from './button';
import { Tooltip } from './tooltip';

const SCROLL_THRESHOLD = 300;

export const BackToTop = memo(function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldShow = window.scrollY > SCROLL_THRESHOLD;
    if (isVisible !== shouldShow) {
      setIsVisible(shouldShow);
    }
  }, [isVisible]);

  useEffect(() => {
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-40"
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <Tooltip content="Scroll to top" side="left">
            <Button
              onClick={scrollToTop}
              size="icon"
              className="h-10 w-10 rounded-full shadow-lg will-change-transform"
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  );
}); 