"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion"
import dynamic from 'next/dynamic'
import { useEffect, useState, useRef, useMemo } from "react"
import { cn } from "@/lib/utils"

// Define feature type
interface Feature {
  title: string;
  description: string;
  gradient: string;
  delay: number;
  type: 'processing' | 'neural' | 'quantum';
}

// Custom hook for mouse tracking
function useMouseTracking(gradient?: string) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 100, damping: 30 }
  
  const rotateX = useSpring(useTransform(mouseY, [0, 400], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, 400], [-5, 5]), springConfig)
  const mirroredRotateY = useSpring(useTransform(mouseX, [0, 400], [5, -5]), springConfig)

  // Create memoized gradient background
  const gradientBackground = useMemo(() => {
    if (!gradient) return undefined
    return useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${gradient}20, transparent 40%)`
  }, [gradient, mouseX, mouseY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  return {
    mouseX,
    mouseY,
    rotateX,
    rotateY,
    mirroredRotateY,
    handleMouseMove,
    springConfig,
    gradientBackground
  }
}

// Import the 3D feature canvas with no SSR
const FeatureCanvas = dynamic(() => import('@/components/ui/3d-feature-canvas').then(mod => mod.FeatureCanvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-48 flex items-center justify-center">
      <div className="animate-pulse text-white/50">Loading 3D...</div>
    </div>
  )
})

// Particle effect component
function Particles({ className }: { className?: string }) {
  const particleRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Array<{ x: number; y: number; vx: number; vy: number }>>([])

  useEffect(() => {
    if (!particleRef.current) return
    const rect = particleRef.current.getBoundingClientRect()
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }))
    setParticles(newParticles)

    const animate = () => {
      setParticles(prev => prev.map(particle => ({
        x: ((particle.x + particle.vx + rect.width) % rect.width),
        y: ((particle.y + particle.vy + rect.height) % rect.height),
        vx: particle.vx,
        vy: particle.vy
      })))
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={particleRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/20"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  )
}

// Create a separate component for feature cards
function FeatureCard({ feature }: { feature: Feature }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const gradient = feature.gradient.split(' ')[1].replace('to-', '')
  
  const gradientBackground = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${gradient}20, transparent 40%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: feature.delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="group relative perspective-1000"
      style={{
        transform: "perspective(1000px)"
      }}
      onMouseMove={handleMouseMove}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: gradientBackground as string
        }}
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-70"
           style={{
             backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
             '--tw-gradient-from': feature.gradient.split(' ')[0].replace('from-', ''),
             '--tw-gradient-to': feature.gradient.split(' ')[1].replace('to-', '')
           }}
      />
      <div className="relative h-[400px] rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm
                    transition-all duration-500 group-hover:bg-white/[0.05] group-hover:scale-[1.02]">
        <div className="flex h-full flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white/90 mb-4 group-hover:text-white transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-white/60 group-hover:text-white/70 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
          <div className="h-48 w-full relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                 style={{
                   backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                   '--tw-gradient-from': feature.gradient.split(' ')[0].replace('from-', ''),
                   '--tw-gradient-to': feature.gradient.split(' ')[1].replace('to-', '')
                 }}
            />
            <div className="absolute inset-0 rounded-xl border border-white/[0.08] overflow-hidden">
              <FeatureCanvas 
                type={feature.type}
                color={feature.gradient.split(' ')[1].replace('to-', '#')}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const [isClient, setIsClient] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 100, damping: 30 }
  
  const rotateX = useSpring(useTransform(mouseY, [0, 400], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [0, 400], [-5, 5]), springConfig)
  const mirroredRotateY = useSpring(useTransform(mouseX, [0, 400], [5, -5]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  // Create memoized feature data
  const features: Feature[] = [
    {
      title: "Real-time Processing",
      description: "Process and analyze data in real-time with advanced AI algorithms",
      gradient: "from-cyan-500 to-blue-500",
      delay: 0.2,
      type: 'processing'
    },
    {
      title: "Neural Networks",
      description: "Leverage deep learning models for complex pattern recognition",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4,
      type: 'neural'
    },
    {
      title: "Quantum Computing",
      description: "Future-proof your applications with quantum-ready algorithms",
      gradient: "from-amber-500 to-orange-500",
      delay: 0.6,
      type: 'quantum'
    }
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <>
      {/* Showcase Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        <Particles className="opacity-40" />
        
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Agents Showcase - Add 3D transform effect */}
            <motion.div 
              className="relative perspective-1000"
              style={{
                transform: "perspective(1000px)",
                rotateX,
                rotateY
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                      duration: 1 
                    }}
                    className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-rose-500"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 180,
                      transition: { duration: 0.8 }
                    }}
                  />
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                    Intelligent Agents
                  </h2>
                </div>
                <p className="text-lg text-white/60 max-w-xl">
                  Our AI agents are designed to handle complex tasks with precision and efficiency. 
                  Each agent specializes in specific domains, from code generation to data analysis.
                </p>
              </div>
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm
                    hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.02]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-rose-500/20 p-2.5 flex-shrink-0
                                    group-hover:from-indigo-500/30 group-hover:to-rose-500/30 transition-all duration-500">
                        <div className="h-full w-full rounded-lg bg-black/50 backdrop-blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">Agent {i}</h3>
                        <p className="mt-2 text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300">
                          Specialized in handling complex tasks with advanced AI capabilities.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Solutions Showcase - Mirror the 3D effect */}
            <motion.div 
              className="relative perspective-1000"
              style={{
                transform: "perspective(1000px)",
                rotateX,
                rotateY: mirroredRotateY
              }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 17,
                      duration: 1 
                    }}
                    className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-indigo-500"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 180,
                      transition: { duration: 0.8 }
                    }}
                  />
                  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-indigo-300">
                    Business Solutions
                  </h2>
                </div>
                <p className="text-lg text-white/60 max-w-xl">
                  Comprehensive solutions tailored for modern businesses. 
                  From workflow automation to advanced analytics, we provide the tools you need.
                </p>
              </div>
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm
                    hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.02]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-indigo-500/20 p-2.5 flex-shrink-0
                                    group-hover:from-rose-500/30 group-hover:to-indigo-500/30 transition-all duration-500">
                        <div className="h-full w-full rounded-lg bg-black/50 backdrop-blur-sm" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white/90 group-hover:text-white transition-colors duration-300">Solution {i}</h3>
                        <p className="mt-2 text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300">
                          Enterprise-grade solutions designed for scalability and performance.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Features Section - Enhanced with particles and improved hover effects */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />
        <Particles className="opacity-30" />
        
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 17,
                duration: 1 
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 180,
                transition: { duration: 0.8 }
              }}
              className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 mx-auto mb-6"
            />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
              Experience the next generation of AI capabilities with our cutting-edge features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 