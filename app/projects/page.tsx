import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG, PROJECTS } from "@/lib/data";
import ProjectsGallery from "@/components/projects/ProjectsGallery";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `Projects & Work | Pravin Dipak Pagar - Full Stack Developer`,
  description: `Explore full stack projects by Pravin Dipak Pagar. Video streaming platforms, real-time collaboration engines, AI agent workflows, and technical interview platforms built with Next.js, React, Node.js, and MongoDB.`,
  keywords: [
    "Pravin Dipak Pagar",
    "Pravin Pagar",
    "Pravin Pagar projects",
    "Pravin Pagar portfolio",
    "Full Stack Projects",
    "Agstyaa Consultant",
    "DevEvaluate",
    "StreamTweet",
    "ValueBid",
    "Next.js Projects",
    "React Projects",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/projects`,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} · Full Stack Projects & Engineering Work`,
    description:
      "Explore Pravin Dipak Pagar's full-stack projects, real-time systems, and AI engineering implementations.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Projects`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} · Full Stack Projects`,
    description:
      "Explore Pravin Dipak Pagar's portfolio of web, mobile, and AI projects.",
    creator: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <header className="mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
            Engineering Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-4 mb-8">
            Selected
            <br />
            Projects.
          </h1>
          <p className="text-xl text-muted max-w-2xl">
            A showcase of production systems, AI-powered interview pipelines,
            real-time media streaming, and full-stack platforms.
          </p>
        </header>

        <div className="mb-16">
          <ProjectsGallery projects={PROJECTS} />
        </div>

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-bold text-sm uppercase tracking-wider"
        >
          ← Return to Home Showcase
        </Link>
      </div>
    </main>
  );
}
