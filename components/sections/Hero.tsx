"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/animations/AnimatedText";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatedUnderlineText } from "@/components/ui/animated-underline-text-one";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      {/* Interactive Particles Background */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60} // optimized for performance
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      {/* Radial Gradient to prevent sharp edges and blend into dark layout */}
      <div className="absolute inset-0 w-full h-full bg-background/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#0A0A0A_80%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 gap-8">
        {/* Kinetic Hero Headline */}
        <div className="flex flex-col items-start -space-y-4 md:-space-y-8">
          <AnimatedText
            text="DIGITAL"
            type="words"
            el="h1"
            className="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none"
          />
          <AnimatedUnderlineText
            text="EXPERIENCES."
            textClassName="text-[15vw] md:text-[10vw] font-black tracking-tighter leading-none text-muted text-balance"
            underlineClassName="text-accent"
          />
        </div>

        {/* Subheading & CTA container */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-12 gap-8 lg:pr-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-2xl font-medium text-muted max-w-lg text-balance"
          >
            I build interactive personal portfolios and ambitious applications where minimal aesthetics meet robust systems.
          </motion.h2>

          <motion.a 
            href="#projects"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-full transition-transform hover:scale-105 will-change-transform shrink-0"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore Work
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="absolute z-10 flex items-center gap-3 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              Explore Work
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-24 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-muted rotate-90 origin-left translate-y-12"
      >
        <span>Scroll</span>
        <div className="w-12 h-[1px] bg-muted/50 overflow-hidden">
          <motion.div
            className="w-full h-full bg-white"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
