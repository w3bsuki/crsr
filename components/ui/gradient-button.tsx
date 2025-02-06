"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children" | "variant"> {
  className?: string
  variant?: "primary" | "secondary"
  children: React.ReactNode
}

export function GradientButton({ 
  className, 
  variant = "primary",
  children,
  ...props 
}: GradientButtonProps) {
  return (
    <motion.button
      className={cn(
        "relative group px-6 py-3 rounded-lg font-medium",
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r",
        variant === "primary" 
          ? "before:from-indigo-500 before:to-rose-500 text-white"
          : "before:from-white/10 before:to-white/5 text-white/90",
        "after:absolute after:inset-[1px] after:rounded-[6px] after:bg-black",
        "hover:before:opacity-90 transition-all duration-300",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)"
        }}
        initial={false}
        animate={{ scale: [0.9, 1.1, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </motion.button>
  )
} 