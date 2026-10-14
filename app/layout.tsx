import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";
import { SITE_CONFIG } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Full Stack Developer - Portfolio`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: `${SITE_CONFIG.name} - Full Stack Developer and IT engineering student from Maharashtra, India specializing in scalable web, mobile, real-time, and AI-driven platforms.`,
  keywords: [
    ...SITE_CONFIG.keywords,
    "pravin dipak pagar",
    "pravin pagar developer",
    "pravin pagar mern stack",
    "pravin pagar portfolio",
    "Pravin Pagar full stack",
    "Pravin Pagar web developer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Full Stack MERN Stack Developer Portfolio`,
    description: `Pravin Pagar's portfolio - Full Stack MERN Developer. Building high-performance web applications with React, Next.js, Node.js, and MongoDB. Explore Pravin Pagar developer projects.`,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Pravin Pagar Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - Pravin Pagar Developer`,
    description: `Pravin Pagar is a Full Stack MERN Developer. Explore projects and expertise in React, Next.js, Node.js development.`,
    creator: "@pravinpagar",
    site: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: {
      "en-US": SITE_CONFIG.url,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "technology",
  classification: "Portfolio",
  verification: {
    google: "V3wTDArpPFaYqZGIL2JoXAo-tsqpaqcOXA_f8yLzTXs", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              jobTitle: "Full Stack Developer",
              description: SITE_CONFIG.description,
              email: SITE_CONFIG.links.email,
              telephone: "+91 9657496319",
              sameAs: [
                SITE_CONFIG.links.github,
                SITE_CONFIG.links.linkedin,
                SITE_CONFIG.links.twitter,
              ],
              image: `${SITE_CONFIG.url}/me.jpg`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Loni B.K.",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Sir Visvesvaraya Institute of Technology, Chincholi",
              },
              knowsAbout: [
                "Full Stack Development",
                "Next.js",
                "React Native",
                "TypeScript",
                "Node.js",
                "Express.js",
                "LangChain",
                "LangGraph",
                "AI Agents",
                "WebSockets",
                "MongoDB",
                "Cloudflare R2",
                "MediaPipe",
                "Redis",
                "BullMQ",
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-black text-white selection:bg-accent selection:text-white overflow-x-hidden"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-full focus:shadow-xl focus:outline-none text-xs uppercase font-bold tracking-wider"
        >
          Skip to content
        </a>
        <CustomCursor />
        <CommandPalette />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="grow">{children}</main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
