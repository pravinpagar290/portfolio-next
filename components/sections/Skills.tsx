"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SKILLS = [
  {
    category: "Frontend & Architecture",
    items: ["React", "Next.js App Router", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand"],
  },
  {
    category: "Creative & Animation",
    items: ["Framer Motion", "GSAP ScrollTrigger", "Three.js", "React Three Fiber", "Lenis", "WebGL"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "REST / GraphQL API"],
  },
  {
    category: "Tooling & Performance",
    items: ["Webpack", "Vite", "SEO Optimization", "Web Vitals", "Lighthouse 100", "Git Workflow"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 md:py-32 bg-white/5 rounded-3xl my-24 lg:my-32">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Technical Arsenal</h2>
          <p className="text-muted text-lg">A highly curated stack focused on robustness and scale.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SKILLS.map((skillGroup, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative p-8 md:p-10 rounded-2xl bg-black border border-white/10 overflow-hidden hover:border-accent/50 transition-colors duration-500"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors duration-300">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-4 py-2 text-sm font-medium bg-white/10 text-muted rounded-full transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
