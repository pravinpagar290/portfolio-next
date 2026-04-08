"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { SKILL_CATEGORIES } from "@/lib/data";
import { MOTION_VARIANTS } from "@/lib/motion";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="py-24 md:py-32 bg-white/2 rounded-[3rem] my-24 lg:my-32 border border-white/5"
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <motion.span
            variants={MOTION_VARIANTS.fadeIn}
            initial="hidden"
            whileInView="visible"
            className="text-accent font-bold tracking-[0.2em] uppercase text-sm"
          >
            Capabilities
          </motion.span>
          <motion.h2
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            Technical Arsenal.
          </motion.h2>
          <motion.p
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            className="text-muted text-xl max-w-xl"
          >
            A highly curated stack focused on robustness, performance, and
            atmospheric user experiences.
          </motion.p>
        </div>

        <motion.div
          variants={MOTION_VARIANTS.staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SKILL_CATEGORIES.map((skillGroup, i) => (
            <motion.div
              key={i}
              variants={MOTION_VARIANTS.fadeUp}
              className="group h-full"
            >
              <GlowCard
                glowColor="accent"
                customSize
                className="w-full h-full p-10 md:p-12 border border-white/10 bg-black/50"
              >
                <h3 className="text-2xl font-bold mb-8 text-white group-hover:text-accent transition-colors duration-500">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, j) => (
                    <span
                      key={j}
                      className="px-5 py-2.5 text-sm font-semibold bg-white/5 text-muted rounded-full border border-white/5 transition-all duration-500 hover:bg-white/10 hover:text-white hover:border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
