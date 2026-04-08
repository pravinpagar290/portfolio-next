import type { Metadata } from "next";
import { SITE_CONFIG, PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `Pravin Pagar Portfolio & Projects | MERN Stack Developer`,
  description: `Pravin Pagar's portfolio of projects. Explore full stack web applications built with React, Next.js, Node.js, MongoDB. View Pravin Pagar developer's MERN stack projects and technical work.`,
  keywords: [
    "Pravin Pagar",
    "Pravin Pagar portfolio",
    "Pravin Pagar projects",
    "Pravin Pagar developer",
    "Portfolio",
    "Web Design",
    "Web Development",
    "MERN Stack Projects",
    "React",
    "Next.js",
    "Full Stack Projects",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/projects`,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} Portfolio & Projects | MERN Stack Developer`,
    description:
      "Explore Pravin Pagar's innovative full-stack projects and MERN stack web applications.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Portfolio Projects`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} Portfolio & MERN Projects`,
    description:
      "Explore Pravin Pagar developer's portfolio of full-stack web applications.",
    creator: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <h1 className="text-6xl md:text-7xl font-black uppercase mb-8">
          Projects
        </h1>
        <p className="text-xl text-muted max-w-2xl mb-12">
          I've worked on a diverse range of projects spanning web applications,
          creative experiences, and full-stack solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="border border-white/10 rounded-2xl p-6 hover:border-accent/50 transition-colors"
            >
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-accent text-sm font-bold mb-4">
                {project.category}
              </p>
              <p className="text-muted">{project.description}</p>
            </article>
          ))}
        </div>

        <a
          href="/#projects"
          className="text-accent hover:text-white transition-colors font-bold"
        >
          ← View More on Home
        </a>
      </div>
    </main>
  );
}
