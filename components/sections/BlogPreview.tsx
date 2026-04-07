"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import BlogCard from "@/components/ui/BlogCard";
import { UserData } from "@/data/userData";

export default function BlogPreview() {
  return (
    <SectionWrapper id="journal" className="py-24 md:py-32">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            Journal
          </h2>
          <p className="text-muted text-lg max-w-xl">
            Writing about frontend architecture, creative engineering, and the
            shifting landscape of web development.
          </p>
        </div>
        <a
          href="/blog"
          className="text-white hover:text-accent font-bold uppercase tracking-widest text-sm transition-colors border-b border-transparent hover:border-accent pb-1 w-fit"
        >
          View All Articles
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {UserData.articles.map((article, idx) => (
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
      </div>
    </SectionWrapper>
  );
}
