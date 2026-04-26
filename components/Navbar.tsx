"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/data";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsPastHero(window.scrollY > (typeof window !== 'undefined' ? window.innerHeight * 0.8 : 800));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const SharedMenuButton = () => (
    <motion.button
      layout
      layoutId="menu-button-slide"
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`flex items-center gap-3 uppercase text-sm tracking-widest focus:outline-none overflow-hidden will-change-transform ${
        isPastHero && !isMenuOpen
          ? "px-6 py-3 bg-[#1a1a1a] border border-white/10 rounded-full shadow-2xl text-white"
          : "px-0 py-0 bg-transparent border border-transparent text-white"
      }`}
      style={{ borderRadius: isPastHero && !isMenuOpen ? "9999px" : "0px" }}
    >
      <div className="relative w-12 h-5 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={isMenuOpen ? "close" : "menu"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-1 w-5 justify-center">
        <motion.span
          animate={isMenuOpen ? { rotate: 45, y: 2.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-px bg-white block origin-center"
        />
        <motion.span
          animate={isMenuOpen ? { rotate: -45, y: -2.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-px bg-white block origin-center"
        />
      </div>
    </motion.button>
  );

  return (
    <>
      {/* Scroll Progress Bar */}
      {!isMenuOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-[2px] bg-white z-60 origin-left"
          style={{ scaleX }}
        />
      )}

      {/* Fixed Top Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-colors duration-500 ${
          isScrolled && !isPastHero && !isMenuOpen ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full h-20 px-6 md:px-8 flex items-center justify-between pointer-events-auto">
          {/* Left: Logo (Permanent) */}
          <div className="w-1/3 flex justify-start">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-black text-2xl tracking-[0.2em] hover:text-accent transition-colors uppercase text-white"
            >
              {SITE_CONFIG.name.split(" ")[0]}.
            </Link>
          </div>

          {/* Center: Quick Links OR Centered Menu Button */}
          <div className="w-1/3 flex justify-center items-center relative h-full">
            <AnimatePresence>
              {(!isPastHero || isMenuOpen) && (
                <motion.div
                  key="quick-links"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute hidden md:flex items-center gap-8"
                >
                  <Link href="/#projects" className="text-sm tracking-wide text-white/70 hover:text-white transition-colors">
                    Work
                  </Link>
                  <Link href="/about" className="text-sm tracking-wide text-white/70 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="text-sm tracking-wide text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {isPastHero && !isMenuOpen && (
              <div className="z-50">
                <SharedMenuButton />
              </div>
            )}
          </div>

          {/* Right: Menu Button + Ready to Talk (Permanent) */}
          <div className="w-1/3 flex justify-end items-center gap-6">
            {/* Menu Button (when on Hero) */}
            {(!isPastHero || isMenuOpen) && (
              <SharedMenuButton />
            )}

            {/* Permanent Ready to Talk Button */}
            <Button
              variant="outline"
              className="hidden md:flex px-6 py-2.5 text-xs tracking-widest uppercase bg-transparent hover:bg-white hover:text-black transition-colors"
              href="/contact"
            >
              Ready to Talk?
            </Button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0d0d0d] overflow-hidden"
          >
            <div className="h-[100dvh] flex flex-col px-8 md:px-16 pt-20 pb-8">
              {/* TOP SECTION: Nav Links */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.3,
                    },
                  },
                }}
                className="flex flex-col w-full max-w-4xl"
              >
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-[clamp(36px,8vh,90px)] font-black text-white transition-colors leading-none"
                    >
                      <motion.span
                        whileHover={{ x: 8, color: "#7C3AED" }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* BOTTOM SECTION: Socials & Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="mt-auto pt-8 w-full flex flex-col gap-6"
              >
                <div className="flex flex-row justify-between items-end flex-wrap gap-8">
                  {/* Socials */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      Socials
                    </span>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/pravinpagar290"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-white hover:underline transition-all"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/pravin-pagar-33b350320/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-white hover:underline transition-all"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://twitter.com/pravinpagar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-white hover:underline transition-all"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      Say Hello
                    </span>
                    <a
                      href="mailto:pravinpagar290@gmail.com"
                      className="text-sm text-white/80 hover:text-white transition-all"
                    >
                      pravinpagar290@gmail.com
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-xs text-white/30 pt-4 border-t border-white/5">
                  &copy; {new Date().getFullYear()} Pravin Pagar. All rights reserved.
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
