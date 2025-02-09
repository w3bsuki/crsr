"use client";

import { memo } from "react";
import { Star, Quote, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote: "The AI solutions have completely transformed how we operate. The efficiency gains and cost savings have been remarkable.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Global",
    image: "/testimonials/sarah.webp",
    rating: 5,
    metrics: [
      { label: "Efficiency Increase", value: "85%" },
      { label: "Cost Reduction", value: "40%" }
    ]
  },
  {
    quote: "Their AI agents have revolutionized our customer support. The 24/7 availability and quick response times have significantly improved customer satisfaction.",
    author: "Michael Rodriguez",
    role: "Head of Operations",
    company: "InnovateAI",
    image: "/testimonials/michael.webp",
    rating: 5,
    metrics: [
      { label: "Response Time", value: "-60%" },
      { label: "Customer Satisfaction", value: "95%" }
    ]
  },
  {
    quote: "The implementation was seamless, and the results were immediate. Their team's expertise and support have been invaluable.",
    author: "Emily Watson",
    role: "VP Engineering",
    company: "DataFlow Systems",
    image: "/testimonials/emily.webp",
    rating: 5,
    metrics: [
      { label: "Implementation Time", value: "2 weeks" },
      { label: "ROI", value: "3.5x" }
    ]
  }
];

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

const TestimonialCard = memo(function TestimonialCard({ 
  testimonial,
  index 
}: { 
  testimonial: typeof testimonials[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Card Background */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-violet-500/30 to-purple-500/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-8">
        {/* Quote and Rating */}
        <div className="flex items-start justify-between mb-8">
          <Quote className="w-8 h-8 text-purple-400/50" />
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
        </div>

        {/* Quote Text */}
        <blockquote className="mb-8">
          <p className="text-lg text-white/80 italic leading-relaxed">
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {testimonial.metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 rounded-xl bg-white/5">
              <div className="text-xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-1">
                {metric.value}
              </div>
              <div className="text-xs text-white/40">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
            <Image
              src={testimonial.image}
              alt={testimonial.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-white">
              {testimonial.author}
            </div>
            <div className="text-sm text-white/60">
              {testimonial.role} at {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default function Testimonials() {
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
            <MessageCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Trusted by Industry{" "}
            </span>
            <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-8"
          >
            See how our AI solutions have helped businesses achieve unprecedented growth and efficiency.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-1">
              500+
            </div>
            <div className="text-sm text-white/40">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-1">
              30+
            </div>
            <div className="text-sm text-white/40">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-1">
              98%
            </div>
            <div className="text-sm text-white/40">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/case-studies">
            <div className="group relative inline-flex">
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
              <button className="relative flex items-center gap-2 rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-950">
                View Case Studies
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
} 