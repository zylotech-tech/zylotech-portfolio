"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-raised bg-ink/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-cyan text-ink font-bold text-xl">Z</div>
            <span className="font-display text-2xl text-ice">Zylo<span className="text-cyan">Tech</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-cyan transition-colors">{link.label}</Link>
            ))}
          </div>

          <Button asChild className="hidden md:block">
            <Link href="#contact">Get Quote</Link>
          </Button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}