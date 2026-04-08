import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";
import { ArrowRight, Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist. Let's get you back on track.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen pt-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Error Code */}
        <h1 className="text-[12rem] md:text-[16rem] font-black leading-none text-white/10 select-none">
          404
        </h1>

        {/* Content */}
        <div className="relative -mt-8 md:-mt-12">
          <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-wider uppercase text-muted mb-6">
            Page Not Found
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            Lost in the<br />Digital Void
          </h2>
          <p className="text-xl text-muted max-w-lg mx-auto mb-12">
            The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-white/90 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              <Search className="w-5 h-5" />
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <p className="text-muted mb-8">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-accent/50 hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}