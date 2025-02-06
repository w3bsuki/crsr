"use client"

import { memo } from "react"

// Define feature type
interface Feature {
  title: string;
  description: string;
  gradient: string;
}

// Memoized card component for better performance
const FeatureCard = memo(function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative h-full">
      <div className="relative h-[400px] rounded-3xl border border-white/[0.08] bg-black/20 p-8 backdrop-blur-sm">
        <div className="h-full flex flex-col">
          <h3 className="text-2xl font-semibold text-white/90 mb-4">
            {feature.title}
          </h3>
          <p className="text-white/60">
            {feature.description}
          </p>
          <div className="mt-auto">
            <div className="h-24 w-24 rounded-xl bg-gradient-to-br opacity-80"
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${feature.gradient})`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})

// Static features data
const features: Feature[] = [
  {
    title: "Real-time Processing",
    description: "Process and analyze data in real-time with advanced AI algorithms",
    gradient: "#38bdf8, #0ea5e9",
  },
  {
    title: "Neural Networks",
    description: "Leverage deep learning models for complex pattern recognition",
    gradient: "#a855f7, #d946ef",
  },
  {
    title: "Quantum Computing",
    description: "Future-proof your applications with quantum-ready algorithms",
    gradient: "#f59e0b, #f97316",
  }
]

export default memo(function Features() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Experience the next generation of AI capabilities with our cutting-edge features
          </p>
        </div>

        {/* Features grid with proper spacing and responsive design */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  )
}) 