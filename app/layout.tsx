import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { SITE_CONFIG } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Full Stack MERN Stack Developer - Portfolio`,
    template: `%s | ${SITE_CONFIG.name} - Pravin Pagar Developer`,
  },
  description: `${SITE_CONFIG.name} - A Full Stack MERN Stack Developer from Nashik, India. Pravin Pagar specializes in building scalable web applications with React, Node.js, MongoDB, and modern technologies. Explore Pravin Pagar's portfolio of innovative web projects.`,
  keywords: [
    ...SITE_CONFIG.keywords,
    "pravin pagar",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href={SITE_CONFIG.url} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
              jobTitle: SITE_CONFIG.role,
              description: SITE_CONFIG.description,
              email: SITE_CONFIG.links.email,
              sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.linkedin],
              image: SITE_CONFIG.ogImage,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nashik",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
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
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
