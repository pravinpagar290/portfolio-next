"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import BlogCard from "@/components/ui/BlogCard";

const BLOG_DATA = [
  {
    title: "Understanding React Server Components in Next.js 15",
    excerpt: "A deep dive into how server-first architecture fundamentally shifts performance paradigms and optimizes core web vitals natively.",
    date: "MAR 10, 2026",
    slug: "understanding-react-server-components",
    imageSrc: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mastering Scroll-Driven Animations with GSAP",
    excerpt: "Step-by-step techniques for building high-framerate scrollytelling experiences without tanking the browser's main thread.",
    date: "FEB 24, 2026",
    slug: "mastering-gsap-scroll-driven-animations",
    imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Architecting a Scalable Headless E-commerce Solution",
    excerpt: "Key design patterns and API routing strategies for taking an e-commerce platform headless using Shopify and Next.js.",
    date: "JAN 15, 2026",
    slug: "architecting-headless-ecommerce",
    imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
  },
];

export default function BlogPreview() {
  return (
    <SectionWrapper id="journal" className="py-24 md:py-32">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Journal</h2>
          <p className="text-muted text-lg max-w-xl">
            Writing about frontend architecture, creative engineering, and the shifting landscape of web development.
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
        {BLOG_DATA.map((blog, idx) => (
          <BlogCard
            key={idx}
            index={idx}
            title={blog.title}
            excerpt={blog.excerpt}
            date={blog.date}
            slug={blog.slug}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
