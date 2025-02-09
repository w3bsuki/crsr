"use client"

import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Use useTransform to create a more efficient transform value
  const transformValue = useTransform(scrollYProgress, [0, 1], ['scaleX(0)', 'scaleX(1)']);

  // Optimize the scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const shouldShow = window.scrollY > 200;
    if (isVisible !== shouldShow) {
      setIsVisible(shouldShow);
    }
  }, [isVisible]);

  useEffect(() => {
    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left will-change-transform"
      style={{
        transform: transformValue,
        background: 'linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)/0.2) 100%)',
      }}
    />
  );
} 