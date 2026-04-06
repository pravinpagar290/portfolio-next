"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ArrowRight } from "lucide-react";
import { MOTION_VARIANTS } from "@/lib/motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  imageSrc?: string;
  index: number;
}

export default function BlogCard({ title, excerpt, date, slug, imageSrc, index }: BlogCardProps) {
  return (
    <motion.div 
      variants={MOTION_VARIANTS.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      custom={index * 0.1}
      className="group cursor-pointer h-full"
    >
      <GlowCard 
        customSize 
        className="w-full h-full flex flex-col p-8 border border-white/5 bg-white/2"
        glowColor="accent"
      >
        <Link href={`/blog/${slug}`} className="absolute inset-0 z-20">
          <span className="sr-only">Read {title}</span>
        </Link>
        
        <div className="flex flex-col h-full gap-6">
          <div className="flex flex-col gap-2">
            <time className="text-xs font-bold text-accent uppercase tracking-[0.2em]">
              {date}
            </time>
            <h3 className="text-2xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors duration-500 leading-tight">
              {title}
            </h3>
          </div>
          
          {imageSrc && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-muted/10 transition-all duration-700">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          )}
          
          <p className="text-muted text-base leading-relaxed grow line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] mt-auto">
            <span>Read Article</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-500" />
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
