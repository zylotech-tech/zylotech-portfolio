"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const previews = [
  { label: "Restaurant", accent: "#FF7A45" },
  { label: "Café", accent: "#00F5FF" },
  { label: "Store", accent: "#FF7A45" },
];

export default function BrowserMockup() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % previews.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const active = previews[index];

  return (
    <div className="relative mx-auto max-w-md rounded-2xl border border-surface-raised bg-surface shadow-2xl overflow-hidden">
      {/* Browser bar */}
      <div className="h-10 bg-ink flex items-center px-4 gap-2 border-b border-surface-raised">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>

      <div className="h-80 p-6 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full bg-surface-raised rounded-xl"
          />
        </AnimatePresence>
        <div className="absolute inset-x-6 top-1/2 h-0.5 bg-cyan/50" />
      </div>

      <div className="p-4 text-center text-xs text-cyan">{active.label} Website Preview</div>
    </div>
  );
}