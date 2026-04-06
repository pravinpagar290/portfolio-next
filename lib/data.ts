export const SITE_CONFIG = {
  name: "Pravin Pagar",
  role: "Senior Frontend Engineer & UI Architect",
  description: "Specializing in building high-performance, pixel-perfect web experiences with React, Next.js, and Framer Motion.",
  url: "https://pravinpagar.com",
  ogImage: "https://pravinpagar.com/og-image.jpg",
  links: {
    github: "https://github.com/pravinpagar",
    linkedin: "https://linkedin.com/in/pravinpagar",
    twitter: "https://twitter.com/pravinpagar",
  },
};

export const NAVIGATION = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Journey", href: "#timeline" },
  { name: "Journal", href: "#journal" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Sohub Digital Inspiration",
    category: "Web App / ThreeJS",
    slug: "sohub-digital",
    imageSrc: "https://placehold.co/1200x900/1e1e1e/8a8a8a/webp?text=Project+One",
    description: "A high-performance creative showcase using ThreeJS and GSAP for immersive storytelling.",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Next.js / Headless",
    slug: "e-commerce-experience",
    imageSrc: "https://placehold.co/1200x900/2a2a2a/8a8a8a/webp?text=Project+Two",
    description: "A lightning-fast headless e-commerce store with seamless transitions and optimized checkouts.",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    category: "React / D3.js",
    slug: "fintech-dashboard",
    imageSrc: "https://placehold.co/1200x900/121212/8a8a8a/webp?text=Project+Three",
    description: "Complex data visualization and financial management platform with real-time updates.",
  },
  {
    id: 4,
    title: "AI Image Generator",
    category: "StableDiffusion / Node",
    slug: "ai-generator",
    imageSrc: "https://placehold.co/1200x900/0a0a0a/8a8a8a/webp?text=Project+Four",
    description: "A generative AI platform for creating high-quality images with custom models.",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend & Architecture",
    items: ["React", "Next.js App Router", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand"],
  },
  {
    category: "Creative & Animation",
    items: ["Framer Motion", "GSAP ScrollTrigger", "Three.js", "React Three Fiber", "Lenis", "WebGL"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "REST / GraphQL API"],
  },
  {
    category: "Tooling & Performance",
    items: ["Webpack", "Vite", "SEO Optimization", "Web Vitals", "Lighthouse 100", "Git Workflow"],
  },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: SITE_CONFIG.links.github },
  { name: "LinkedIn", href: SITE_CONFIG.links.linkedin },
  { name: "Twitter", href: SITE_CONFIG.links.twitter },
];

export const EXPERIENCE = [
  {
    company: "Google",
    role: "Senior Frontend Engineer",
    period: "2022 — Present",
    description: "Architecting core UI frameworks for next-generation AI platforms.",
  },
  {
    company: "Design Studio",
    role: "Lead Creative Technologist",
    period: "2020 — 2022",
    description: "Bridge between design and engineering, leading premium digital experiences.",
  },
  {
    company: "Startup Co",
    role: "Frontend Developer",
    period: "2018 — 2020",
    description: "Early-stage product engineering and design system implementation.",
  },
];
