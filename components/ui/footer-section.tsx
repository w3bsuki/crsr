"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Moon, 
  Send, 
  Sun, 
  Twitter,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Globe,
  ChevronRight
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0077B5]' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-[#1DA1F2]' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-[#1877F2]' }
];

const footerLinks = {
  Solutions: [
    { name: 'AI Development', href: '/solutions/ai-development' },
    { name: 'Machine Learning', href: '/solutions/machine-learning' },
    { name: 'Neural Networks', href: '/solutions/neural-networks' },
    { name: 'Enterprise AI', href: '/solutions/enterprise-ai' }
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Support', href: '/support' }
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Security', href: '/security' }
  ]
};

const contactInfo = [
  { icon: MapPin, text: '123 AI Street, Tech City, TC 12345' },
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: Mail, text: 'hello@aicompany.com' },
  { icon: Globe, text: 'www.aicompany.com' }
];

export function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-950" />
      
      <motion.div style={{ y }} className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-20 border-b border-white/10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/60 max-w-md">
                Subscribe to our newsletter for the latest updates on AI technology and industry insights.
              </p>
            </div>
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
              <Button className="group relative">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-20 grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500" />
                <span className="text-xl font-bold">AI Company</span>
              </div>
            </Link>
            <p className="text-white/60 max-w-xs">
              Transforming businesses with cutting-edge AI solutions and intelligent automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <TooltipProvider key={social.name}>
                  <Tooltip content={<p>Follow us on {social.name}</p>}>
                    <TooltipTrigger>
                      <Link 
                        href={social.href}
                        className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors ${social.color}`}
                      >
                        <social.icon className="h-5 w-5" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-6">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors inline-flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 AI Company. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/60">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex gap-4 text-sm text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
} 