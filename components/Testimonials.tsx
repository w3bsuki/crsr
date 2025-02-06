"use client";

import { memo } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The AI solutions provided have transformed our business operations. We've seen remarkable improvements in efficiency and decision-making.",
    author: "Sarah Chen",
    role: "CTO at TechCorp",
    company: "TechCorp Global",
    logo: "/logos/company1.svg",
    rating: 5,
  },
  {
    quote: "Implementing this platform was seamless. The results were immediate, and the ROI has been exceptional. Highly recommended for any enterprise.",
    author: "Michael Rodriguez",
    role: "Head of AI",
    company: "InnovateAI",
    logo: "/logos/company2.svg",
    rating: 5,
  },
  {
    quote: "The level of support and expertise provided is unmatched. They truly understand enterprise AI needs and deliver beyond expectations.",
    author: "Emily Watson",
    role: "VP Engineering",
    company: "DataFlow Systems",
    logo: "/logos/company3.svg",
    rating: 5,
  }
];

const stats = [
  { value: "500+", label: "Enterprise Clients" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Expert Support" },
  { value: "1B+", label: "API Requests Daily" }
];

const TestimonialCard = memo(function TestimonialCard({ 
  testimonial 
}: { 
  testimonial: typeof testimonials[0] 
}) {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.075]" />
      
      <div className="relative rounded-3xl border border-white/[0.08] p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="relative h-8 w-24">
            <Image
              src={testimonial.logo}
              alt={testimonial.company}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
        </div>

        <blockquote className="mb-8">
          <Quote className="w-8 h-8 text-white/20 mb-4" />
          <p className="text-lg text-white/80 italic">
            "{testimonial.quote}"
          </p>
        </blockquote>

        <div>
          <div className="font-semibold text-white/90">{testimonial.author}</div>
          <div className="text-sm text-white/60">{testimonial.role}</div>
          <div className="text-sm text-white/40">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
});

export default memo(function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8">
            <Star className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-white/80">Trusted by Leaders</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Join hundreds of enterprises that have transformed their operations with our AI solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}); 