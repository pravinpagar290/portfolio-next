"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  slug: string;
  index: number;
}

export default function ProjectCard({ title, category, imageSrc, slug, index }: ProjectCardProps) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col gap-4 w-full cursor-pointer"
    >
      <Link href={`/projects/${slug}`} className="absolute inset-0 z-20">
        <span className="sr-only">View {title} project detail page</span>
      </Link>
      
      {/* Image container using next/image for top performance WebP/AVIF output */}
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted/20">
        <Image
          src={imageSrc}
          alt={`Preview of ${title} project`}
          fill
          // Set to low priority since this is below the fold initially. Adjust priority=true ONLY for LCP elements
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[0.2,0.65,0.3,0.9] group-hover:scale-105 will-change-transform"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm font-medium text-muted uppercase tracking-wider">
          {category}
        </p>
      </div>
    </motion.article>
  );
}
