import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  y?: number;
  opacity?: number;
  scale?: number;
  stagger?: number;
}

export const useAnimation = (config: AnimationConfig = {}) => {
  const {
    duration = 0.8,
    delay = 0,
    ease = 'power4.out',
    y = 40,
    opacity = 0,
    scale = 1,
    stagger = 0.1,
  } = config;

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      gsap.to(elementRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease,
        stagger: {
          amount: stagger,
          from: 'start',
        },
      });
    }
  }, [inView, duration, delay, ease, stagger]);

  // Callback ref that syncs both refs
  const setRefs = (element: HTMLElement | null) => {
    // Update the elementRef
    elementRef.current = element;
    // Forward the ref to useInView
    if (typeof inViewRef === 'function') {
      inViewRef(element);
    }
  };

  return {
    ref: setRefs,
    style: {
      opacity,
      transform: `translateY(${y}px) scale(${scale})`,
      willChange: 'transform, opacity',
    },
  };
}; 