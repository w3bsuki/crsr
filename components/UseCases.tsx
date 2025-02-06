"use client";

import { memo } from "react";
import { ArrowRight, Bot, Brain, Building2, Chip, Code2, Workflow } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

interface UseCase {
  title: string;
  description: string;
  icon: React.ElementType;
  stats: { label: string; value: string }[];
  color: string;
}

const useCases: UseCase[] = [
  {
    title: "Enterprise AI",
    description: "Transform your business with custom AI solutions built for scale. From automation to analytics, we help enterprises harness the power of AI.",
    icon: Building2,
    stats: [
      { label: "Efficiency Increase", value: "85%" },
      { label: "Cost Reduction", value: "40%" },
      { label: "ROI", value: "3.5x" }
    ],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "ML Operations",
    description: "End-to-end MLOps platform for training, deploying, and monitoring machine learning models at scale.",
    icon: Workflow,
    stats: [
      { label: "Model Accuracy", value: "97%" },
      { label: "Deployment Time", value: "-60%" },
      { label: "Models Managed", value: "500+" }
    ],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "AI Development",
    description: "Accelerate your AI development with our comprehensive toolkit and expert guidance.",
    icon: Code2,
    stats: [
      { label: "Dev Velocity", value: "2x" },
      { label: "Time Saved", value: "65%" },
      { label: "API Calls", value: "1M+" }
    ],
    color: "from-emerald-500/20 to-green-500/20"
  }
];

const UseCaseCard = memo(function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="relative group">
      <div className={`
        absolute inset-0 rounded-3xl opacity-50
        bg-gradient-to-br ${useCase.color}
        transition-opacity duration-300 group-hover:opacity-70
      `} />
      
      <div className="relative p-8 rounded-3xl border border-white/[0.08]">
        <div className="flex items-start justify-between mb-8">
          <useCase.icon className="w-8 h-8 text-white/90" />
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
        <p className="text-white/60 mb-8">{useCase.description}</p>

        <div className="grid grid-cols-3 gap-4">
          {useCase.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white/90 mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default memo(function UseCases() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8">
            <Brain className="w-6 h-6 text-indigo-400 mr-2" />
            <span className="text-white/80">Industry Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Transform Your Industry with AI
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Discover how our AI solutions are revolutionizing different industries and delivering measurable results.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton>Schedule Demo</GradientButton>
            <GradientButton variant="secondary">View Case Studies</GradientButton>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <UseCaseCard key={useCase.title} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  );
}); 