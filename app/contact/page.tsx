import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `Contact Pravin Pagar | Get In Touch - MERN Developer`,
  description: `Contact Pravin Pagar, a Full Stack MERN Stack Developer. Whether you have a full-stack project in mind or want to discuss web development — Pravin Pagar's inbox is open for collaboration and freelance opportunities.`,
  keywords: [
    "Pravin Pagar",
    "Pravin Pagar contact",
    "Contact Pravin Pagar",
    "Contact MERN Developer",
    "Hire Full Stack Developer",
    "Hire Pravin Pagar",
    "Full Stack Developer",
    "Web Developer",
    "Freelance Developer India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_CONFIG.url}/contact`,
    siteName: SITE_CONFIG.name,
    title: `Contact Pravin Pagar | Hire MERN Stack Developer`,
    description:
      "Get in touch with Pravin Pagar for web development projects, collaboration, and freelance opportunities.",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - Contact`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Pravin Pagar | MERN Stack Developer`,
    description:
      "Get in touch with Pravin Pagar for web development projects and freelance opportunities.",
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
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-4">
            Let's Work
            <br />
            Together.
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
