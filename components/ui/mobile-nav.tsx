"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  React.useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        className="md:hidden p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] bg-black border-l border-white/[0.08] z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/[0.08]">
                  <span className="text-lg font-semibold">Menu</span>
                  <Button variant="ghost" className="p-2" onClick={toggleMenu}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex-1 overflow-y-auto">
                  <div className="flex flex-col p-4 space-y-3">
                    {["AGENTS", "SOLUTIONS", "ABOUT"].map((item) => (
                      <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className="text-sm text-white/70 hover:text-white transition-colors py-2"
                        onClick={toggleMenu}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="p-4 border-t border-white/[0.08] space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-center"
                  >
                    SIGN IN
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-center bg-transparent border-white/[0.15] text-white hover:bg-white hover:text-black transition-all"
                  >
                    DOWNLOAD
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 