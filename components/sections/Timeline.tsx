"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { UserData } from "@/data/userData";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionWrapper id="timeline" className="relative py-24 md:py-32">
      <div className="flex flex-col gap-4 mb-24 md:mb-32">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          My Journey
        </h2>
        <p className="text-muted text-lg max-w-xl">
          A timeline of my professional growth, key projects, and experiences.
        </p>
      </div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
          <motion.div
            className="w-full bg-accent origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-12 md:gap-24">
          {UserData.experience.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative flex items-center justify-between w-full ${isEven ? "md:flex-row-reverse" : "md:flex-row"} flex-col md:gap-16`}
              >
                {/* Connector Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent -translate-x-1/2 overflow-hidden">
                  <div className="w-full h-full bg-accent/30 animate-ping" />
                </div>

                {/* Mobile Connector Dot */}
                <div className="md:hidden absolute left-4 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-2" />

                {/* Date Marker (Desktop) */}
                <div
                  className={`hidden md:block w-5/12 ${isEven ? "text-right" : "text-left"}`}
                >
                  <span className="text-xl font-bold text-muted">
                    {item.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors backdrop-blur-sm">
                    <span className="md:hidden text-accent font-bold mb-2 block">
                      {item.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-1">{item.role}</h3>
                    <h4 className="text-muted font-medium uppercase tracking-wider text-sm mb-4">
                      {item.company}
                    </h4>
                    <p className="text-muted/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
