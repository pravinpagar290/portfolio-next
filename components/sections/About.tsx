"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";
import { MOTION_VARIANTS } from "@/lib/motion";

export default function About() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32">
      <div className="flex flex-col gap-16 md:gap-24">
        {/* Header Section */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.span 
            variants={MOTION_VARIANTS.fadeIn}
            initial="hidden"
            whileInView="visible"
            className="text-accent font-bold tracking-[0.2em] uppercase text-sm"
          >
            Digital Kinship
          </motion.span>
          <motion.h2 
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            Collaborative Stories.
          </motion.h2>
          <motion.p 
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-muted text-xl"
          >
            A look into the partnerships that redefine digital boundaries through high-performance engineering.
          </motion.p>
        </div>

        {/* Carousel Section */}
        <motion.div
          variants={MOTION_VARIANTS.fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
        >
          <TestimonialCarousel />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
