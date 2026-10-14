import type { Metadata } from "next";
import {
  SITE_CONFIG,
  SKILL_CATEGORIES,
  EXPERIENCE,
  EDUCATION,
  SOCIAL_LINKS,
} from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Mail, GraduationCap, Phone, MapPin, FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `About Pravin Dipak Pagar | Full Stack Developer`,
  description: `Learn about Pravin Dipak Pagar, a Full Stack Developer and IT engineering student from Maharashtra, India with expertise in React, Next.js, React Native, Node.js, MongoDB, and AI/agentic workflows.`,
  keywords: [
    "Pravin Dipak Pagar",
    "Pravin Pagar",
    "Pravin Pagar developer",
    "About Pravin Pagar",
    "Full Stack Developer",
    "React Native Developer",
    "Next.js Developer",
    "LangChain Developer",
    "Node.js Developer",
    "Developer Biography",
    "Experience",
    "Skills",
    "Education",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    title: `About Pravin Dipak Pagar | Full Stack Developer`,
    description: `Discover Pravin Dipak Pagar's journey as a Full Stack Developer specializing in React, Next.js, React Native, Node.js, real-time systems, and AI workflows.`,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - About`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Pravin Dipak Pagar | Full Stack Developer`,
    description:
      "Learn about Pravin Dipak Pagar's expertise in Full Stack Development, Real-Time Platforms, and AI Agents.",
    creator: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
              About Me
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-4">
              Building
              <br />
              Scalable
              <br />
              Systems.
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/Pravin_Pagar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent/80 text-white font-bold rounded-full transition-all shadow-lg shadow-accent/25 text-sm uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </header>

        {/* Bio Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <div>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">
              Who I Am
            </h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                I'm <strong className="text-white">{SITE_CONFIG.name}</strong>,
                a Full Stack Developer and B.E. Information Technology student with
                hands-on experience building web and mobile applications using
                JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB.
              </p>
              <p>
                I have deep experience building REST APIs, real-time systems,
                AI/agentic workflows using LangChain and LangGraph, video streaming
                applications (HLS & Cloudflare R2), and third-party integrations.
              </p>
              <p>
                Currently, I am working as a Full Stack Developer Intern at{" "}
                <strong className="text-white">TenAI's Consultant</strong>, where
                I develop AI-driven interview workflows, real-time voice pipelines
                (STT/TTS), Redis caching, BullMQ queues, and vision-based interview
                analysis using MediaPipe.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-4xl font-black text-accent">6+</span>
                <p className="text-muted text-sm mt-2">Production Projects</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <span className="text-4xl font-black text-accent">7.7</span>
                <p className="text-muted text-sm mt-2">B.E. IT CGPA / 10</p>
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Location
                </h3>
                <p className="text-lg font-bold">Loni B.K., Maharashtra, India</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-1 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" /> Contact
                </h3>
                <p className="text-base font-bold text-white/90">+91 9657496319</p>
                <p className="text-sm text-muted">pravinpagar290@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-accent" /> Education
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-accent text-lg font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-muted text-sm mt-1">{edu.location}</p>
                </div>
                <div className="flex flex-col md:items-end gap-2 shrink-0">
                  <span className="text-muted text-sm font-medium px-4 py-2 bg-white/5 rounded-full border border-white/10">
                    {edu.period}
                  </span>
                  <span className="text-accent font-black text-xl">
                    {edu.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.category}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <h3 className="text-lg font-bold mb-4 text-accent">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((skill) => (
                    <li key={skill} className="text-muted text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-black uppercase mb-12">Experience</h2>
          <div className="space-y-8">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                className="p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <span className="text-muted text-sm font-medium px-4 py-2 bg-white/5 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section>
          <h2 className="text-3xl font-black uppercase mb-8">Let's Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="/Pravin_Pagar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-full hover:bg-accent/80 transition-colors shadow-lg shadow-accent/25"
            >
              <FileText className="w-5 h-5" />
              Resume (PDF)
            </a>
            <a
              href="https://github.com/pravinpagar290"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pravin-pagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="tel:+919657496319"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Me
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Form
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
