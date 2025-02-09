"use client"

import * as React from "react"
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  arrow,
  useTransitionStyles,
} from "@floating-ui/react"

import { cn } from "@/lib/utils"

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function TooltipTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function TooltipContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)}>{children}</div>;
}

export function Tooltip({
  children,
  content,
  className,
  side = 'top',
  align = 'center',
  sideOffset = 4,
}: TooltipProps) {
  const arrowRef = React.useRef(null);

  const {
    x,
    y,
    strategy,
    context,
    placement,
    middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    refs,
  } = useFloating({
    placement: `${side}-${align}` as any,
    middleware: [
      offset(sideOffset),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      transform: 'scale(0.95)',
    },
    open: {
      opacity: 1,
      transform: 'scale(1)',
    },
    close: {
      opacity: 0,
      transform: 'scale(0.95)',
    },
  });

  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]];

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isMounted && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={cn(
              'z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
              className
            )}
            style={{
              ...styles,
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              width: 'max-content',
            }}
            {...getFloatingProps()}
          >
            {content}
            <div
              ref={arrowRef}
              className="absolute h-2 w-2 rotate-45 bg-popover border"
              style={{
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide]: '-4px',
                borderTop: staticSide === 'bottom' ? '' : '1px solid var(--border)',
                borderLeft: staticSide === 'right' ? '' : '1px solid var(--border)',
                borderBottom: staticSide === 'top' ? '' : '1px solid var(--border)',
                borderRight: staticSide === 'left' ? '' : '1px solid var(--border)',
              }}
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
