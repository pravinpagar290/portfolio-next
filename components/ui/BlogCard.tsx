"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col gap-5 bg-transparent border-t border-white/10 pt-6 cursor-pointer"
    >
      <Link href={`/blog/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Read exact article {title}</span>
      </Link>
      
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300 flex-1">
          {title}
        </h3>
        <time className="text-sm font-medium text-muted uppercase tracking-widest whitespace-nowrap">
          {date}
        </time>
      </div>
      
      {imageSrc && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/10 opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      
      <p className="text-muted/80 text-lg text-balance line-clamp-2">
        {excerpt}
      </p>

      <span className="text-accent font-semibold tracking-wider uppercase text-sm mt-2 flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
        Read Article
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </motion.article>
  );
}
