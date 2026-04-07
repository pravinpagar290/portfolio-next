import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `About ${SITE_CONFIG.name.split(" ")[0]} | ${SITE_CONFIG.role}`,
  description: `Learn about ${SITE_CONFIG.name}, a ${SITE_CONFIG.role} specializing in high-performance web experiences with React, Next.js, and modern frontend technologies.`,
  keywords: [
    "Pravin Pagar",
    "About",
    "Frontend Engineer",
    "UI Architect",
    "Developer Biography",
    "Experience",
    "Skills",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/about`,
    siteName: SITE_CONFIG.name,
    title: `About ${SITE_CONFIG.name}`,
    description:
      "Discover my journey, experience, and expertise in frontend development.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SITE_CONFIG.name}`,
    description: "Discover my journey and expertise.",
    creator: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24">
        <h1 className="text-6xl md:text-7xl font-black uppercase mb-8">
          About
        </h1>
        <p className="text-xl text-muted max-w-2xl mb-8">
          This is the About page. Scroll down to view the about section on the
          home page, or navigate back to explore my portfolio.
        </p>
        <Link
          href="/#about"
          className="text-accent hover:text-white transition-colors font-bold"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
