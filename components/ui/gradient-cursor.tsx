"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function GradientCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mousePosition.x, springConfig)
  const y = useSpring(mousePosition.y, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-[100] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
      animate={{
        x,
        y,
        background: [
          "radial-gradient(circle, rgba(79,70,229,0.3) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(244,63,94,0.3) 0%, transparent 70%)",
        ],
      }}
      transition={{
        background: {
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        },
      }}
    />
  )
} 