"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { MagneticText } from "@/components/ui/morphing-cursor";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isAboutInView, setIsAboutInView] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    const handleAboutInView = (e: Event) => {
      setIsAboutInView((e as CustomEvent).detail);
    };
    window.addEventListener("about-in-view", handleAboutInView);

    return () => {
      window.removeEventListener("resize", checkIsDesktop);
      window.removeEventListener("about-in-view", handleAboutInView);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "400px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Framer Motion Animation Variants
  const textLeftVariant: Variants = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 } 
    }
  };

  const textRightVariant: Variants = {
    hidden: { x: 60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 } 
    }
  };

  const imageVariant: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    }
  };

  const labelVariant: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 } 
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#0d0d0d] text-white"
      // Height is 200vh on desktop for the scroll effect, standard min-h-screen on mobile
      style={{ height: isDesktop ? "200vh" : "100vh" }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Main 3-column / stacked layout */}
        <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] md:items-center gap-8 md:gap-12">
          
          {/* LEFT COLUMN: PRAVIN */}
          <div className="flex flex-col items-center md:items-end justify-center w-full">
            <motion.div 
              variants={textLeftVariant}
              initial="hidden"
              animate="visible"
              className="w-full flex justify-center md:justify-end"
            >
              <MagneticText
                text="PRAVIN"
                hoverText="FULLSTACK"
                hoverSize={350}
                className="w-full flex justify-center md:justify-end"
                textClassName={`text-[clamp(60px,18vw,100px)] md:text-[clamp(80px,12vw,180px)] leading-[0.8] tracking-[-0.02em] font-bold text-center md:text-right ${bebas.className}`}
              />
            </motion.div>
            <motion.div 
              variants={labelVariant}
              initial="hidden"
              animate="visible"
              className="mt-2 md:mt-4 text-xs tracking-widest uppercase text-white/50 text-center md:text-right"
            >
              Full Stack Developer
            </motion.div>
          </div>

          {/* CENTER COLUMN: Image Card */}
          <div className="flex justify-center z-10 w-full md:w-auto relative perspective-1000 min-h-[160px] md:min-h-[373px] min-w-[160px] md:min-w-[280px]">
            {(!isMounted || !isAboutInView) && (
              <motion.div
                layoutId={isDesktop ? "hero-profile-image" : "hero-profile-image-mobile"}
                variants={imageVariant}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], layout: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
                style={
                  (isMounted && isDesktop) 
                    ? { y: imageY, scale: imageScale } 
                    : {}
                }
                className="relative w-[160px] md:w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl origin-top"
              >
                <Image
                  src="/me.jpg"
                  alt="Pravin Pagar"
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            )}
          </div>

          {/* RIGHT COLUMN: PAGAR */}
          <div className="flex flex-col items-center md:items-start justify-center w-full">
            <motion.div 
              variants={textRightVariant}
              initial="hidden"
              animate="visible"
              className="w-full flex justify-center md:justify-start"
            >
              <MagneticText
                text="PAGAR"
                hoverText="DEVELOPER"
                hoverSize={350}
                className="w-full flex justify-center md:justify-start"
                textClassName={`text-[clamp(60px,18vw,100px)] md:text-[clamp(80px,12vw,180px)] leading-[0.8] tracking-[-0.02em] font-bold text-center md:text-left transition-all duration-300 ${bebas.className}`}
              />
            </motion.div>
            <motion.div 
              variants={labelVariant}
              initial="hidden"
              animate="visible"
              className="mt-2 md:mt-4 text-xs tracking-widest uppercase text-white/50 text-center md:text-left"
            >
              MERN · Next.js · TypeScript
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={isDesktop ? { opacity: scrollOpacity } : {}}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-widest mb-3 font-mono text-white/70">
            Scroll
          </span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-white/70"
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
