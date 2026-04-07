"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/animations/AnimatedText";
import { SparklesCore } from "@/components/ui/sparkles";
import { AnimatedUnderlineText } from "@/components/ui/animated-underline-text-one";
import Button from "@/components/ui/Button";
import { MOTION_VARIANTS } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      {/* Interactive Particles Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <SparklesCore
          id="tsparticles-hero"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50} // optimized for performance
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.4}
        />
      </div>

      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 w-full h-full bg-background/40 mask-[radial-gradient(ellipse_at_center,transparent_20%,#0A0A0A_90%)] z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 gap-12">
        {/* Kinetic Hero Headline */}
        <div className="flex flex-col items-start -space-y-4 md:-space-y-8 lg:-space-y-8">
          <AnimatedText
            text="developer"
            type="words"
            el="h1"
            className="text-[16vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] uppercase"
          />
          <AnimatedUnderlineText
            text="EXPERIENCES."
            textClassName="text-[16vw] md:text-[12vw] font-black tracking-tighter leading-[0.8] text-muted text-balance uppercase"
            underlineClassName="bg-accent h-1 md:h-2 "
          />
        </div>

        {/* Subheading & CTA container */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mt-4 gap-12 lg:pr-24">
          <motion.p 
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.2}
            className="text-xl md:text-3xl font-medium text-muted max-w-2xl text-balance leading-tight"
          >
            A MERN Stack Developer specialized in building <span className="text-white">highly performant</span>, pixel-perfect web systems where aesthetics meet engineering.
          </motion.p>

          <motion.div
            variants={MOTION_VARIANTS.scaleIn}
            initial="hidden"
            animate="visible"
            custom={1.4}
            className="shrink-0"
          >
            <Button href="#projects">
              Explore Work
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-muted/60"
      >
        <span className="[writing-mode:vertical-lr] rotate-180">Scroll</span>
        <div className="h-16 w-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
