"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Search, Sparkles, Filter, X } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  imageSrc: string;
  githubUrl: string;
  link: string;
  tags: string[];
  featured?: boolean;
  highlights?: string[];
}

interface ProjectsGalleryProps {
  projects: Project[];
}

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Media" },
  { id: "realtime", label: "Real-Time & Streaming" },
  { id: "fullstack", label: "Full Stack & Cloud" },
];

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      let matchesCategory = true;
      if (activeCategory === "ai") {
        matchesCategory =
          project.tags.some((t) =>
            ["Groq Whisper", "Mistral AI", "MediaPipe", "AI Proctored", "LangChain"].includes(t)
          ) ||
          project.category.toLowerCase().includes("ai") ||
          project.title.toLowerCase().includes("streamtweet") ||
          project.title.toLowerCase().includes("devevaluate");
      } else if (activeCategory === "realtime") {
        matchesCategory =
          project.tags.some((t) =>
            ["WebSockets", "Stream", "HLS", "HTML5 Canvas"].includes(t)
          ) ||
          project.category.toLowerCase().includes("real-time") ||
          project.category.toLowerCase().includes("stream");
      } else if (activeCategory === "fullstack") {
        matchesCategory =
          project.category.toLowerCase().includes("full stack") ||
          project.tags.includes("Node.js");
      }

      // Tag filter
      const matchesTag = selectedTag
        ? project.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
        : true;

      // Search query filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch = query
        ? project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
        : true;

      return matchesCategory && matchesTag && matchesSearch;
    });
  }, [projects, activeCategory, selectedTag, searchQuery]);

  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const clearAllFilters = () => {
    setActiveCategory("all");
    setSelectedTag(null);
    setSearchQuery("");
  };

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Controls Bar: Search & Category Pills */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 items-center" role="tablist">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedTag(null);
                }}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-accent text-white shadow-lg shadow-accent/25 border border-accent"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech (e.g. Next.js, HLS, Redis)..."
            aria-label="Filter projects by title or technology"
            className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-10 py-2.5 text-xs md:text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Active Filter Indicators */}
      {(selectedTag || searchQuery || activeCategory !== "all") && (
        <div className="flex items-center gap-3 text-xs text-white/60 flex-wrap">
          <span className="flex items-center gap-1.5 font-medium text-white/80">
            <Filter className="w-3.5 h-3.5 text-accent" /> Active Filters:
          </span>
          {activeCategory !== "all" && (
            <span className="px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-medium">
              Category: {CATEGORIES.find((c) => c.id === activeCategory)?.label}
            </span>
          )}
          {selectedTag && (
            <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-medium flex items-center gap-1.5">
              Tag: #{selectedTag}
              <button
                onClick={() => setSelectedTag(null)}
                aria-label={`Remove tag filter ${selectedTag}`}
                className="hover:text-white"
              >
                ×
              </button>
            </span>
          )}
          {searchQuery && (
            <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white font-medium flex items-center gap-1.5">
              Keyword: "{searchQuery}"
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Remove search query filter"
                className="hover:text-white"
              >
                ×
              </button>
            </span>
          )}
          <button
            onClick={clearAllFilters}
            className="text-xs text-accent hover:underline ml-auto font-medium"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results Count */}
      <div className="text-xs uppercase tracking-widest text-white/40 font-mono">
        Showing {filteredProjects.length} of {projects.length} Projects
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group border border-white/10 rounded-3xl p-6 md:p-8 hover:border-accent/50 transition-all bg-white/[0.02] hover:bg-white/[0.05] flex flex-col justify-between relative"
              >
                <div>
                  {/* Thumbnail */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/10 cursor-pointer"
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </Link>

                  {/* Header info */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-accent text-xs font-bold tracking-widest uppercase">
                      {project.category}
                    </span>

                    {/* Direct Quick External Links */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} GitHub repository`}
                          className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live preview of ${project.title}`}
                          className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-accent transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors leading-snug">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {project.tags.map((tag) => {
                    const isSelected =
                      selectedTag?.toLowerCase() === tag.toLowerCase();
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={(e) => handleTagClick(tag, e)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-accent text-white border border-accent shadow-sm"
                            : "bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-transparent"
                        }`}
                        title={`Filter projects by tag: ${tag}`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty Filter State */
        <div className="flex flex-col items-center justify-center p-16 border border-white/10 rounded-3xl bg-white/[0.02] text-center">
          <Sparkles className="w-10 h-10 text-accent mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
          <p className="text-sm text-muted max-w-md mb-6">
            No projects matched your active filters or search terms. Try searching
            for a different technology like "Next.js", "AI", or "MongoDB".
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 bg-accent hover:bg-accent/80 text-white text-xs uppercase tracking-widest font-bold rounded-full transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
