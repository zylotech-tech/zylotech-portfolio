"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrowserMockup from "@/components/browser-mockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 bg-ink">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-surface px-4 py-1.5 text-xs text-cyan">
              <Sparkles className="h-4 w-4" />
              WEB DEV • AI • MANAGEMENT
            </div>
            <h1 className="font-display text-5xl md:text-6xl leading-tight text-ice">
              Websites that bring <span className="text-cyan">customers</span> in.
            </h1>
            <p className="mt-6 text-lg text-muted max-w-md">
              We build modern websites for small businesses, restaurants, and e-commerce stores — with AI tools and ongoing support.
            </p>
            <div className="mt-8 flex gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Get Free Quote</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">See Work</a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}