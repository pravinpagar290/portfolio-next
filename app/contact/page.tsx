import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `Contact ${SITE_CONFIG.name.split(" ")[0]} | Get In Touch`,
  description: `Get in touch with ${SITE_CONFIG.name}. Whether you have a full-stack project in mind, or just want to chat about web development — my inbox is open.`,
  keywords: [
    "Pravin Pagar",
    "Contact",
    "Contact Me",
    "Hire Developer",
    "Full Stack Developer",
    "Web Developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    title: `Contact ${SITE_CONFIG.name}`,
    description: "Get in touch for web development projects and collaborations.",
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
    title: `Contact ${SITE_CONFIG.name}`,
    description: "Get in touch for web development projects.",
    creator: "@pravinpagar",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <header className="mb-16 text-center">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-4">
            Let's Work<br />Together.
          </h1>
          <p className="text-xl text-muted max-w-xl mx-auto mt-8">
            Whether you have an enterprise platform in mind, or just want to 
            chat about MERN stack — my inbox is open.
          </p>
        </header>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </main>
  );
}