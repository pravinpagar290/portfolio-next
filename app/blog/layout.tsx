import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `Blog & Articles | Pravin Pagar - Full Stack Developer`,
  description: `Read articles and insights from Pravin Pagar about full-stack development, MERN stack technologies, React, Next.js, Node.js, and modern web development practices.`,
  keywords: [
    "Pravin Pagar blog",
    "Pravin Pagar articles",
    "Full Stack Developer Blog",
    "MERN Stack Developer",
    "React Articles",
    "Next.js Guide",
    "Node.js Tutorials",
    "Web Development Blog",
    "JavaScript Articles",
    "TypeScript Guide",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/blog`,
    siteName: SITE_CONFIG.name,
    title: `Blog & Articles | Pravin Pagar - Full Stack MERN Developer`,
    description:
      "Explore Pravin Pagar's insights on full-stack development, MERN stack, and modern web technologies.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Blog`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | Pravin Pagar Developer`,
    description:
      "Read Pravin Pagar's articles on full-stack development and web technologies.",
    creator: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
