import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/animations/CustomCursor";
import ScrollProgress from "@/components/animations/ScrollProgress";

// Optimize target font - Requesting specific weights
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: {
    default: "Pravin Pagar | Senior Frontend Engineer",
    template: "%s | Pravin Pagar",
  },
  description: "High-performance personal portfolio of Pravin Pagar, showcasing modern creative web experiences, typography, and frontend architecture.",
  keywords: ["Pravin Pagar", "Frontend Architect", "React", "Next.js", "Portfolio", "Creative Developer", "SEO Engineer"],
  authors: [{ name: "Pravin Pagar" }],
  creator: "Pravin Pagar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com", // Replace with your domain
    siteName: "Pravin Pagar Portfolio",
    title: "Pravin Pagar | Senior Frontend Engineer",
    description: "High-performance personal portfolio of Pravin Pagar, showcasing modern creative web experiences.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Pravin Pagar Portfolio preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravin Pagar | Senior Frontend Engineer",
    description: "High-performance personal portfolio, showcasing modern creative web experiences.",
    creator: "@pravinpagar", 
    images: ["/og-image.jpg"],
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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pravin Pagar",
              url: "https://yourportfolio.com",
              jobTitle: "Senior Frontend Engineer",
              sameAs: ["https://github.com/pravinpagar", "https://linkedin.com/in/pravinpagar"],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased bg-background text-foreground selection:bg-accent selection:text-white">
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
