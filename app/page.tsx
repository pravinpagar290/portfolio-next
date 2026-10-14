import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PROJECTS, SITE_CONFIG } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Dynamically import below-the-fold interactive & animation-heavy sections
const PinnedStory = dynamic(
  () => import("@/components/sections/gsap/PinnedStory")
);
const Timeline = dynamic(() => import("@/components/sections/Timeline"));
const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `Pravin Dipak Pagar | Full Stack Developer Portfolio`,
  description: `Pravin Dipak Pagar's full stack developer portfolio. Explore full-stack web and mobile projects, real-time collaboration platforms, and AI agent workflows built with React, Next.js, React Native, Node.js, and MongoDB.`,
  keywords: [
    "pravin dipak pagar",
    "pravin pagar",
    "pravin pagar developer",
    "full stack developer",
    "react native developer",
    "next.js developer",
    "langchain",
    "ai agents",
    "real-time systems",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `Pravin Dipak Pagar | Full Stack Developer Portfolio`,
    description:
      "Explore Pravin Dipak Pagar's full-stack applications, real-time platforms, video streaming architecture, and AI agent workflows.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Pravin Dipak Pagar Portfolio",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full font-semibold">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Grid */}
      <Skills />

      {/* 4. Projects Showcase (Sohub inspired vertical stack) */}
      <section
        id="projects"
        className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32"
      >
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-4">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Selected
              <br />
              Work.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted hover:text-accent transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? "md:mt-32" : ""}>
              <ProjectCard
                index={idx}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Process GSAP Scrollytelling */}
      <PinnedStory />

      {/* 6. Timeline / Experience */}
      <Timeline />

      {/* 7. Journal / Blog */}
      <BlogPreview />

      {/* 8. Contact Section */}
      <Contact />
    </main>
  );
}
