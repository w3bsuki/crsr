'use client';

import { ReactLenis } from 'lenis';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
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