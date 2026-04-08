"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";
import { UserData } from "@/data/userData";
import { MOTION_VARIANTS } from "@/lib/motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function BlogPage() {
  const articles = UserData.articles;

  return (
    <main className="pt-32 md:pt-40 pb-24">
      <SectionWrapper>
        <div className="flex flex-col gap-20">
          {/* Header Section */}
          <motion.div
            variants={MOTION_VARIANTS.fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 max-w-4xl"
          >
            <Link
              href="/#journal"
              className="text-accent font-bold tracking-[0.2em] uppercase text-sm hover:text-white transition-colors w-fit"
            >
              ← Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Journal & Articles
            </h1>
            <p className="text-muted text-xl max-w-2xl">
              A collection of articles about full-stack development, web
              technologies, and best practices from my journey as a MERN stack
              developer.
            </p>
          </motion.div>

          {/* Articles Grid */}
          {articles.length > 0 ? (
            <motion.div
              variants={MOTION_VARIANTS.staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
            >
              {articles.map((article, idx) => (
                <BlogCard
                  key={article.id}
                  index={idx}
                  title={article.title}
                  excerpt={article.excerpt}
                  date={article.date}
                  slug={article.slug}
                  imageSrc={article.imageSrc}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={MOTION_VARIANTS.fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center py-24"
            >
              <p className="text-muted text-lg mb-4">
                No articles published yet. Check back soon!
              </p>
              <Link
                href="/"
                className="inline-block text-accent hover:text-white transition-colors font-bold"
              >
                Return to Home →
              </Link>
            </motion.div>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}
