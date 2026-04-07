"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MOTION_VARIANTS } from "@/lib/motion";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  slug: string;
  index: number;
}

export default function ProjectCard({
  title,
  category,
  imageSrc,
  slug,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={MOTION_VARIANTS.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      custom={index * 0.1}
      className="group relative flex flex-col gap-6 w-full cursor-pointer"
    >
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-20">
        <span className="sr-only">View {title} project detail page</span>
      </Link>

      {/* Image container with premium hover scaling */}
      <div className="relative aspect-4/3 sm:aspect-video lg:aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted/20">
        <Image
          src={imageSrc}
          alt={`Preview of ${title} project`}
          fill
          priority={index < 2} // Prioritize first two project images for LCP
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110 will-change-transform"
        />

        {/* Subtle glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none backdrop-blur-[2px]" />

        {/* Hover Action Indicator */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground group-hover:text-accent transition-colors duration-500">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-accent/50 group-hover:w-12 transition-all duration-500" />
          <p className="text-xs font-bold text-muted uppercase tracking-widest leading-none">
            {category}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
