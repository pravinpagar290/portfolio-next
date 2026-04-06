import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { SITE_CONFIG } from "@/lib/data";

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Senior Frontend Architect`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: ["Pravin Pagar", "Frontend Architect", "UI Engineer", "Next.js Expert", "Creative Developer", "React Performance"],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Portfolio`,
    description: SITE_CONFIG.description,
    images: [{ url: SITE_CONFIG.ogImage, width: 1200, height: 630, alt: SITE_CONFIG.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: "@pravinpagar", 
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
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
              sameAs: [
                SITE_CONFIG.links.github,
                SITE_CONFIG.links.linkedin,
                SITE_CONFIG.links.twitter
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-black text-white selection:bg-accent selection:text-white overflow-x-hidden">
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="grow">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
