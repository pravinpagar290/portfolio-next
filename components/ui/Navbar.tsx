"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Journey", href: "#timeline" },
  { name: "Journal", href: "#journal" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Transparent vs Solid threshold
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-20 transition-colors duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="/" className="font-black text-xl tracking-tighter hover:text-accent transition-colors">
        PRAVIN.
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-semibold tracking-wide uppercase text-muted hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
      
      {/* Mobile Menu Button - Minimal */}
      <button className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle Menu">
        <span className="w-6 h-0.5 bg-white rounded-full bg-foreground" />
        <span className="w-6 h-0.5 bg-white rounded-full bg-foreground" />
      </button>
    </motion.header>
  );
}
