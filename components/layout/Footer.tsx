"use client";

import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 mt-24 md:mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-black tracking-[0.2em] uppercase">
              {SITE_CONFIG.name.split(" ")[0]}.
            </h3>
            <p className="text-muted text-sm">
              Building high-performance, pixel-perfect web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/#about"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                Work
              </Link>
              <Link
                href="/#skills"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                Skills
              </Link>
              <Link
                href="/#timeline"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                Journey
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Resources
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/#journal"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                Journal
              </Link>
              <Link
                href="/#contact"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Follow
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${link.name}`}
                  className="text-muted hover:text-accent transition-colors text-sm font-bold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-12" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
          <p>
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>
            Designed & developed with <span className="text-accent">care</span>{" "}
            and <span className="text-accent">performance</span> in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
