import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE_CONFIG, PROJECTS } from "@/lib/data";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${SITE_CONFIG.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      url: `${SITE_CONFIG.url}/projects/${project.slug}`,
      images: [
        {
          url: project.imageSrc.startsWith("/")
            ? `${SITE_CONFIG.url}${project.imageSrc}`
            : project.imageSrc,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [
        project.imageSrc.startsWith("/")
          ? `${SITE_CONFIG.url}${project.imageSrc}`
          : project.imageSrc,
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 mb-12">
          <div className="absolute inset-0 flex items-center justify-center text-muted">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase mt-4 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted max-w-2xl">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </a>
          )}
        </div>

        {/* More Projects */}
        <div className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.filter((p) => p.slug !== project.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.slug}`}
                  className="block p-6 border border-white/10 rounded-2xl hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted text-sm">{p.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}