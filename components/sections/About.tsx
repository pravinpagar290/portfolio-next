"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import AnimatedText from "@/components/animations/AnimatedText";
import Image from "next/image";

export default function About() {
  return (
    <SectionWrapper id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div className="flex flex-col gap-8">
        <AnimatedText
          text="Design meets Engineering"
          type="words"
          el="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter"
        />
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 text-lg text-muted font-medium"
        >
          <p>
            I am a senior frontend engineer and creative developer. My journey spans from crafting raw HTML to architecting large-scale headless applications, but my focus has always remained the same: building digital experiences that feel alive.
          </p>
          <p>
            Operating at the intersection of design and engineering, I bring strict typography, smooth motion systems, and SEO-first technical implementations to everything I build.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-white/5"
      >
        <Image
          src="https://placehold.co/800x1000/1e1e1e/8a8a8a/webp?text=Portrait"
          alt="Pravin Pagar portrait"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
    </SectionWrapper>
  );
}
