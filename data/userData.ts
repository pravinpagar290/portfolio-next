/**
 * Centralized User Data File
 * 
 * All personal, project, skill, and experience data should be stored here.
 * Import from this file to keep components DRY and maintainable.
 * 
 * @example
 * import { UserData } from "@/data/userData";
 * const { name, email, projects } = UserData;
 */

export const UserData = {
  // Personal Information
  personal: {
    name: "Pravin Pagar",
    firstName: "Pravin",
    lastName: "Pagar",
    title: "Senior Frontend Engineer & UI Architect",
    bio: "Specializing in building high-performance, pixel-perfect web experiences with React, Next.js, and Framer Motion.",
    shortBio: "A MERN Stack Developer specialized in building highly performant, pixel-perfect web systems where aesthetics meet engineering.",
    email: "pravinpagar290@gmail.com",
    phone: "+1 (555) 123-4567", // Optional: add if needed
    location: "Nashik",
    timezone: "PST",
  },

  // Website Configuration
  website: {
    url: "https://pravinpagar.com",
    ogImage: "https://pravinpagar.com/og-image.jpg",
    description: "Specializing in building high-performance, pixel-perfect web experiences with React, Next.js, and Framer Motion.",
  },

  // SEO Keywords
  keywords: {
    primary: ["Pravin Pagar", "Frontend Engineer", "UI Architect", "React Developer", "Next.js Expert"],
    secondary: ["Web Developer", "Full Stack Engineer", "Creative Developer", "Performance Optimization", "Web Design", "JavaScript", "TypeScript"],
    all: ["Pravin Pagar", "Frontend Engineer", "UI Architect", "React Developer", "Next.js Expert", "Web Developer", "Full Stack Engineer", "Creative Developer", "Performance Optimization", "Web Design", "JavaScript", "TypeScript"],
  },

  // Social Links & Contact
  social: {
    github: "https://github.com/pravinpagar",
    linkedin: "https://linkedin.com/in/pravinpagar",
    twitter: "https://twitter.com/pravinpagar",
    email: "hello@pravinpagar.com",
    // Add more as needed
  },

  // Skills by Category
  skills: {
    frontend: ["React", "Next.js App Router", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "React Query"],
    creative: ["Framer Motion", "GSAP ScrollTrigger", "Three.js", "React Three Fiber", "Lenis", "WebGL", "Canvas API"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "REST API", "GraphQL"],
    tooling: ["Webpack", "Vite", "SEO Optimization", "Web Vitals", "Lighthouse", "Git", "Docker", "CI/CD"],
  },

  // Skill Categories (organized for display)
  skillCategories: [
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
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "Sohub Digital Inspiration",
      slug: "sohub-digital",
      category: "Web App / ThreeJS",
      description: "A high-performance creative showcase using ThreeJS and GSAP for immersive storytelling.",
      imageSrc: "https://placehold.co/1200x900/1e1e1e/8a8a8a/webp?text=Project+One",
      link: "https://sohub.example.com",
      tags: ["React", "Three.js", "GSAP", "Next.js"],
      featured: true,
    },
    {
      id: 2,
      title: "E-Commerce Experience",
      slug: "e-commerce-experience",
      category: "Next.js / Headless",
      description: "A lightning-fast headless e-commerce store with seamless transitions and optimized checkouts.",
      imageSrc: "https://placehold.co/1200x900/2a2a2a/8a8a8a/webp?text=Project+Two",
      link: "https://ecommerce.example.com",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Stripe"],
      featured: true,
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      slug: "fintech-dashboard",
      category: "React / D3.js",
      description: "Complex data visualization and financial management platform with real-time updates.",
      imageSrc: "https://placehold.co/1200x900/121212/8a8a8a/webp?text=Project+Three",
      link: "https://fintech.example.com",
      tags: ["React", "D3.js", "Redux", "WebSockets"],
      featured: true,
    },
    {
      id: 4,
      title: "AI Image Generator",
      slug: "ai-generator",
      category: "StableDiffusion / Node",
      description: "A generative AI platform for creating high-quality images with custom models.",
      imageSrc: "https://placehold.co/1200x900/0a0a0a/8a8a8a/webp?text=Project+Four",
      link: "https://aigenerator.example.com",
      tags: ["Node.js", "Next.js", "AI/ML", "AWS"],
      featured: false,
    },
  ],

  // Experience / work history
  experience: [
    {
      id: 1,
      company: "Google",
      role: "Senior Frontend Engineer",
      period: "2022 — Present",
      description: "Architecting core UI frameworks for next-generation AI platforms. Leading performance optimization initiatives resulting in 60% faster page loads.",
      skills: ["React", "TypeScript", "Performance", "System Design"],
    },
    {
      id: 2,
      company: "Design Studio",
      role: "Lead Creative Technologist",
      period: "2020 — 2022",
      description: "Bridge between design and engineering, leading premium digital experiences. Mentored junior developers and established design system best practices.",
      skills: ["React", "GSAP", "Web Design", "Team Leadership"],
    },
    {
      id: 3,
      company: "Startup Co",
      role: "Frontend Developer",
      period: "2018 — 2020",
      description: "Early-stage product engineering and design system implementation. Built scalable component library used by 50+ developers.",
      skills: ["React", "CSS", "Component Design", "Agile"],
    },
  ],

  // Blog / Articles
  articles: [
    {
      id: 1,
      title: "Understanding React Server Components in Next.js 15",
      slug: "understanding-react-server-components",
      excerpt: "A deep dive into how server-first architecture fundamentally shifts performance paradigms and optimizes core web vitals natively.",
      date: "MAR 10, 2026",
      imageSrc: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      category: "React, Next.js",
    },
    {
      id: 2,
      title: "Mastering Scroll-Driven Animations with GSAP",
      slug: "mastering-gsap-scroll-driven-animations",
      excerpt: "Step-by-step techniques for building high-framerate scrollytelling experiences without tanking the browser's main thread.",
      date: "FEB 24, 2026",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
      category: "Animation, GSAP",
    },
    {
      id: 3,
      title: "Architecting a Scalable Headless E-commerce Solution",
      slug: "architecting-headless-ecommerce",
      excerpt: "Key design patterns and API routing strategies for taking an e-commerce platform headless using Shopify and Next.js.",
      date: "JAN 15, 2026",
      imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
      category: "E-commerce, Architecture",
    },
  ],

  // Navigation Links
  navigation: [
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ],

  // Testimonials (if needed)
  testimonials: [
    {
      id: 1,
      author: "Jane Doe",
      role: "Product Manager at TechCo",
      content: "Pravin delivered exceptional work that exceeded our expectations. His attention to detail and performance optimization was crucial to our product's success.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      author: "John Smith",
      role: "CEO at DesignStudio",
      content: "Working with Pravin was a game-changer. His creative approach to frontend development brought our designs to life in ways we didn't think were possible.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ],

  // Call-to-actions and messaging
  cta: {
    hero: "A MERN Stack Developer specialized in building highly performant, pixel-perfect web systems.",
    about: "I am a MERN Stack Developer with a passion for building innovative and user-friendly web applications.",
    contact: "Whether you have an enterprise platform in mind, or just want to chat about custom WebGL shaders—my inbox is open.",
  },

  // Organization info (if applicable)
  organization: {
    name: "Pravin Pagar",
    founded: "2018",
    founded_full: new Date(2018, 0, 1),
  },

  // Helper functions
  getSocialLink: (platform: string) => {
    return (UserData.social as any)[platform.toLowerCase()] || null;
  },

  getProjectBySlug: (slug: string) => {
    return UserData.projects.find((p) => p.slug === slug) || null;
  },

  getArticleBySlug: (slug: string) => {
    return UserData.articles.find((a) => a.slug === slug) || null;
  },

  getExperienceByCompany: (company: string) => {
    return UserData.experience.find((e) => e.company === company) || null;
  },

  getAllSkills: () => {
    return Object.values(UserData.skills).flat();
  },
};

/**
 * Legacy exports for backward compatibility
 * These are deprecated and should not be used in new code.
 * Use UserData instead.
 */
export const SITE_CONFIG = {
  name: UserData.personal.name,
  role: UserData.personal.title,
  description: UserData.website.description,
  url: UserData.website.url,
  ogImage: UserData.website.ogImage,
  keywords: UserData.keywords.all,
  links: UserData.social,
};

export const PROJECTS = UserData.projects;
export const SKILL_CATEGORIES = UserData.skillCategories;
export const SOCIAL_LINKS = Object.entries(UserData.social).map(([name, href]) => ({
  name: name.charAt(0).toUpperCase() + name.slice(1),
  href: href as string,
}));
export const EXPERIENCE = UserData.experience;
export const NAVIGATION = UserData.navigation;
