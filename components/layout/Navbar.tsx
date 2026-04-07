"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAVIGATION, SITE_CONFIG } from "@/lib/data";
import { EASING, DURATIONS } from "@/lib/motion";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Transparent vs Solid threshold
    setScrolled(latest > 50);

    // Hide on scroll down, show on scroll up
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: DURATIONS.fast, ease: EASING.premium }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-24 transition-all duration-500",
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 h-20"
            : "bg-transparent h-24",
        )}
      >
        <Link
          href="/"
          className="font-black text-2xl tracking-[0.2em] hover:text-accent transition-colors uppercase"
        >
          {SITE_CONFIG.name.split(" ")[0]}.
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAVIGATION.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Button
            variant="outline"
            className="hidden md:flex px-6 py-3 text-[10px]"
            href="#contact"
          >
            Ready to Talk?
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            onClick={handleMobileMenuClick}
          >
            <span
              className={cn(
                "w-6 h-px bg-white transition-all duration-500 group-hover:bg-accent",
                mobileMenuOpen && "rotate-45 translate-y-2",
              )}
            />
            <span
              className={cn(
                "w-4 h-px bg-white transition-all duration-500 self-end group-hover:bg-accent group-hover:w-6",
                mobileMenuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "w-6 h-px bg-white transition-all duration-500 group-hover:bg-accent",
                mobileMenuOpen && "-rotate-45 -translate-y-2",
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, y: 0, pointerEvents: "auto" },
          closed: { opacity: 0, y: -20, pointerEvents: "none" },
        }}
        transition={{ duration: DURATIONS.vFast, ease: EASING.premium }}
        className="fixed top-24 left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/5 lg:hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {NAVIGATION.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleNavLinkClick}
              className="text-sm font-bold tracking-[0.2em] uppercase text-muted hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="outline"
            className="w-full"
            href="#contact"
            onClick={handleNavLinkClick}
          >
            Ready to Talk?
          </Button>
        </div>
      </motion.nav>
    </>
  );
}
