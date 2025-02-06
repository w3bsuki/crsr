"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  children: React.ReactNode
}

export const GradientButton = memo(function GradientButton({ 
  className, 
  variant = "primary",
  children,
  ...props 
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        "relative group overflow-hidden",
        "px-6 py-3 rounded-lg font-medium",
        "transform transition-all duration-200",
        "active:scale-95",
        "disabled:opacity-50 disabled:pointer-events-none",
        "before:absolute before:inset-0",
        "before:rounded-lg",
        "before:transition-opacity before:duration-200",
        variant === "primary" 
          ? "before:bg-gradient-to-r before:from-indigo-500 before:to-rose-500 text-white"
          : "before:bg-gradient-to-r before:from-white/10 before:to-white/5 text-white/90",
        "after:absolute after:inset-[1px]",
        "after:rounded-[6px]",
        "after:bg-black",
        "after:transition-opacity after:duration-200",
        "hover:before:opacity-90",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  )
}) 