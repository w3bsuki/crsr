'use client';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Update scroll animations on Lenis scroll
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  const lenisOptions = {
    lerp: 0.075, // Lowered from 0.1 for smoother scrolling
    duration: 1.2, // Lowered from 1.5
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.8, // Added to reduce scroll speed
    touchMultiplier: 1.5,
    infinite: false,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    syncTouch: true,
    syncTouchLerp: 0.075,
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReactLenis root options={lenisOptions}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: 'dark:bg-zinc-950 dark:text-white',
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              borderRadius: '0.5rem',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
} 