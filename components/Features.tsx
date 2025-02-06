"use client"

import { memo } from "react"
import { 
  Cpu,
  Zap,
  Brain,
  BarChart,
  Lock,
  LineChart,
  Network,
  Layers,
  Sparkles,
  Workflow,
  Building2,
  Database,
  Bot,
  MessageSquare,
  Check,
  ArrowRight,
  ChevronRight,
  Fingerprint
} from "lucide-react"
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from "framer-motion"
import { GradientButton } from "./ui/gradient-button"
import Image from "next/image"
import Link from "next/link"

// Define feature type
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  benefits: string[];
  category: "Performance" | "Security" | "Intelligence" | "Enterprise Solutions" | "AI Agents";
}

const SolutionCard = memo(function SolutionCard({ feature }: { feature: Feature }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-purple-500/50 transition-colors duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon with animated gradient background */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
          <div className="relative z-10 w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-white/10">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-white/60 mb-6 line-clamp-2">
          {feature.description}
        </p>
        
        <div className="space-y-3">
          {feature.benefits.map((benefit) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-purple-400" />
              </div>
              <span className="text-sm text-white/70">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/5">
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Learn more
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

const AgentCard = memo(function AgentCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
      
      <div className="relative rounded-2xl border border-white/10 bg-black p-8">
        {/* Top section with agent icon and status */}
        <div className="mb-6 flex justify-between items-start">
          <div className="relative">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-20`} />
            <div className="relative z-10 h-16 w-16 rounded-2xl bg-black border border-white/10 p-4">
              <feature.icon className="h-full w-full text-white" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400">Online</span>
          </div>
        </div>

        {/* Agent name and description */}
        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-white/60">{feature.description}</p>
        </div>

        {/* Capabilities section */}
        <div className="space-y-4">
          <div className="text-sm font-medium text-white/80">Capabilities</div>
          <div className="grid grid-cols-2 gap-3">
            {feature.benefits.map((benefit) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group/item"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-white/70">{benefit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive elements */}
        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="text-sm text-white/40">
            Response time: ~1s
          </div>
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Connect
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

// Static features data
const features: Feature[] = [
  {
    title: "Business Process Automation",
    description: "End-to-end automation solutions for enterprise workflows and operations",
    icon: Workflow,
    gradient: "from-blue-500/10 to-cyan-500/10",
    benefits: [
      "Workflow Optimization",
      "Document Processing",
      "Data Entry Automation",
      "Process Mining"
    ],
    category: "Enterprise Solutions"
  },
  {
    title: "Industry Solutions",
    description: "Tailored AI solutions for specific industry verticals and use cases",
    icon: Building2,
    gradient: "from-purple-500/10 to-pink-500/10",
    benefits: [
      "Manufacturing",
      "Healthcare",
      "Financial Services",
      "Retail & E-commerce"
    ],
    category: "Enterprise Solutions"
  },
  {
    title: "Data Operations",
    description: "Streamline your data operations with AI-powered automation",
    icon: Database,
    gradient: "from-green-500/10 to-emerald-500/10",
    benefits: [
      "Data Labeling",
      "Content Moderation",
      "Document Processing",
      "Quality Assurance"
    ],
    category: "Enterprise Solutions"
  },
  {
    title: "Aidr - AI Manager",
    description: "Your intelligent project manager and strategic advisor",
    icon: Brain,
    gradient: "from-amber-500/10 to-orange-500/10",
    benefits: [
      "Project Management",
      "Resource Allocation",
      "Strategic Planning",
      "Performance Analytics"
    ],
    category: "AI Agents"
  },
  {
    title: "Aido - Task Administrator",
    description: "Efficient task execution and administrative support",
    icon: Bot,
    gradient: "from-red-500/10 to-rose-500/10",
    benefits: [
      "Task Automation",
      "Process Coordination",
      "System Administration",
      "Workflow Optimization"
    ],
    category: "AI Agents"
  },
  {
    title: "Aidy - Customer Support",
    description: "24/7 intelligent customer support via voice and text",
    icon: MessageSquare,
    gradient: "from-indigo-500/10 to-violet-500/10",
    benefits: [
      "Voice Assistance",
      "Text Support",
      "Query Resolution",
      "Customer Analytics"
    ],
    category: "AI Agents"
  }
]

const categories = {
  "Enterprise Solutions": {
    title: "Enterprise Solutions",
    description: "Comprehensive AI solutions for business transformation",
    gradient: "from-blue-400 to-cyan-400"
  },
  "AI Agents": {
    title: "AI Agents",
    description: "Intelligent agents for specialized business functions",
    gradient: "from-purple-400 to-pink-400"
  }
}

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#9333ea29,transparent)]" />
      <motion.div
        initial={{ opacity: 0.5, scale: 1, x: -500, y: 0 }}
        animate={{ opacity: 1, scale: 1.25, x: 500, y: -100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"
      />
    </div>
  );
};

const FeatureCard = memo(function FeatureCard({ 
  feature,
  index 
}: { 
  feature: typeof features[0]["features"][0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-violet-500/30 to-purple-500/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20">
            <feature.icon className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
              {feature.name}
            </h3>
            <p className="text-sm text-white/40">
              {feature.highlight}
            </p>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
});

const CategorySection = memo(function CategorySection({
  category,
  index
}: {
  category: typeof features[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient}`}>
            <category.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              {category.title}
            </h2>
            <p className="text-white/60">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.features.map((feature, featureIndex) => (
          <FeatureCard
            key={feature.name}
            feature={feature}
            index={featureIndex}
          />
        ))}
      </div>
    </motion.div>
  );
});

export default function Features() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundBeams />
      
      <motion.div style={{ y }} className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <Fingerprint className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              AI-Powered Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Intelligent Solutions for{" "}
            </span>
            <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Modern Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-8"
          >
            Explore our comprehensive suite of AI agents and enterprise solutions designed to transform your business operations.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {features.map((category, index) => (
            <CategorySection
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <Link href="/solutions">
            <div className="group relative inline-flex">
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
              <button className="relative flex items-center gap-2 rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-950">
                Explore All Features
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
} 