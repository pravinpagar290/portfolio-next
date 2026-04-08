export const UserData = {
  // Personal Information
  personal: {
    name: "Pravin Pagar",
    firstName: "Pravin",
    lastName: "Pagar",
    title: "Full Stack (MERN) Developer · IT Engineering Student",
    bio: "Full-stack developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with a strong focus on building scalable and responsive web applications. Passionate about turning ideas into functional products through clean code, efficient APIs, and modern UI practices.",
    shortBio: "A MERN Stack Developer specialized in building highly performant, pixel-perfect web systems where aesthetics meet engineering.",
    email: "pravinpagar290@gmail.com",
    phone: "", // Not found in project
    location: "Nashik, Maharashtra, India",
    timezone: "IST",
  },

  // Website Configuration
  website: {
    url: "https://pravin-pagar.netlify.app/",
    ogImage: "https://pravin-pagar.netlify.app/og-image.jpg", // Default path
    description: "Pravin Pagar is a Full Stack Developer from Nashik, India specializing in MERN stack. Building scalable web apps with React, Node.js, MongoDB.",
  },

  // SEO Keywords
  keywords: {
    primary: ["Pravin Pagar", "Full Stack Developer", "MERN Stack Developer", "React Developer", "Node.js Developer"],
    secondary: ["Nashik Developer", "Web Developer India", "JavaScript Developer", "TypeScript Expert", "Portfolio"],
    all: ["Pravin Pagar", "Full Stack Developer", "MERN Stack Developer", "React Developer", "Node.js Developer", "Nashik Developer", "Web Developer India", "JavaScript Developer", "TypeScript Expert", "Portfolio", "MongoDB", "Express.js", "Next.js", "GSAP", "Tailwind CSS"],
  },

  // Social Links & Contact
  social: {
    github: "https://github.com/pravinpagar290",
    linkedin: "https://www.linkedin.com/in/pravin-pagar-33b350320/",
    email: "pravinpagar290@gmail.com",
  },

  // Skills by Category
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui", "GSAP"],
    creative: ["Framer Motion", "GSAP", "Three.js", "Canvas API", "Lucide Icons"],
    backend: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Authentication", "WebRTC"],
    database: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL"],
    tooling: ["Git", "GitHub", "Docker", "Postman", "Vite", "Netlify", "Vercel"],
  },

  // Skill Categories (organized for display)
  skillCategories: [
    {
      category: "Frontend & UI",
      items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui", "GSAP Animations"],
    },
    {
      category: "Backend & Systems",
      items: ["Node.js & Express", "REST APIs", "Socket.io", "WebRTC", "JWT", "System Design"],
    },
    {
      category: "Database & Storage",
      items: ["MongoDB (Mongoose)", "MySQL", "PostgreSQL", "Cloudinary"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git & GitHub", "Docker", "Postman", "Vite", "Netlify / Vercel"],
    },
  ],

  // Projects (mapped from projects.js)
  projects: [
    {
      id: 1,
      title: "Value Bid · Real-time Auction Platform",
      slug: "value-bid",
      category: "MERN · Realtime",
      description: "Engineered a production-ready MERN Stack auction platform enabling users to list items, place real-time bids, and manage auctions with automated commission tracking.",
      imageSrc: "/value_bid.png",
      githubUrl: "https://github.com/pravinpagar290/Value_Bid",
      link: "https://value-bid.vercel.app",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      featured: true,
    },
    {
      id: 2,
      title: "DevEvaluate · Video Interview Platform",
      slug: "dev-evaluate",
      category: "MERN · WebRTC",
      description: "Built a MERN Stack video interview platform with WebRTC peer-to-peer video, real-time collaborative code editor, and structured candidate evaluation.",
      imageSrc: "/devevaluate.png",
      githubUrl: "https://github.com/pravinpagar290/DevEvaluate",
      link: "https://devevaluate.netlify.app/",
      tags: ["React", "WebRTC", "Socket.io", "Node.js", "Monaco Editor"],
      featured: true,
    },
    {
      id: 3,
      title: "Diagramyx · Diagram & Whiteboard Tool",
      slug: "diagramyx",
      category: "Frontend · Diagrams",
      description: "Developed a collaborative browser-based diagramming and whiteboard tool for developers to visually design system architectures using a performant HTML5 Canvas engine.",
      imageSrc: "/diagramyx.png",
      githubUrl: "https://github.com/PRATIK-RAKTATE/Diagramyx",
      link: "",
      tags: ["React", "TypeScript", "HTML5 Canvas", "WebSockets"],
      featured: true,
    },
    {
      id: 4,
      title: "Hey · Real-time Chat App",
      slug: "hey-chat",
      category: "Next.js · Realtime",
      description: "Crafted a Next.js real-time chat application featuring instant messaging, message read receipts, typing indicators, and media sharing.",
      imageSrc: "/hey_chat.png",
      githubUrl: "https://github.com/pravinpagar290/Hey",
      link: "",
      tags: ["Next.js", "Socket.io", "Tailwind CSS", "MongoDB"],
      featured: false,
    },
    {
      id: 5,
      title: "StreamTweet · Video Streaming Platform",
      slug: "streamtweet",
      category: "MERN · Streaming",
      description: "Designed a full-stack MERN video streaming platform where users can upload, watch, and interact with video content — featuring HLS adaptive bitrate streaming.",
      imageSrc: "/stream_tweet.png",
      githubUrl: "https://github.com/pravinpagar290/Stream_Tweet",
      link: "https://stream-tweet-seven.vercel.app",
      tags: ["React", "Node.js", "HLS Streaming", "Cloudinary"],
      featured: true,
    },
    {
      id: 6,
      title: "MegaBlog · Blog Platform",
      slug: "megablog",
      category: "React · Appwrite",
      description: "Launched a full-featured blog platform powered by React and Appwrite BaaS — supporting rich-text authoring, user authentication, and image hosting.",
      imageSrc: "/megablog.png",
      githubUrl: "https://github.com/pravinpagar290/megablog",
      link: "",
      tags: ["React", "Appwrite", "Redux", "Tailwind CSS"],
      featured: false,
    },
  ],

  // Experience / work history
  experience: [
    {
      id: 1,
      company: "Full Stack Projects",
      role: "MERN Stack Developer",
      period: "2023 — Present",
      description: "Shipped 8+ full-stack projects including real-time auction platforms, WebRTC interview tools, and video streaming services. Focused on scalable architecture and performance.",
      skills: ["React", "Node.js", "MongoDB", "System Design"],
    },
    {
      id: 2,
      company: "Hackathons",
      role: "Competitor (SIH & PVG)",
      period: "2024 — 2025",
      description: "Developed innovative solutions under tight deadlines at national-level hackathons like Smart India Hackathon (SIH) 2025. Focused on rapid prototyping and problem-solving.",
      skills: ["Rapid Prototyping", "Teamwork", "Frontend", "APIs"],
    },
  ],

  // Blog / Articles (Keep placeholders or clear if not applicable)
  articles: [
    {
      id: 1,
      title: "Building Scalable MERN Stack Applications",
      slug: "building-scalable-mern-applications",
      excerpt: "A comprehensive guide to architecting production-ready MERN applications with proper structure and best practices.",
      date: "2024-12-15",
      imageSrc: "/blog/mern-architecture.jpg",
    },
    {
      id: 2,
      title: "Real-time Features with Socket.io",
      slug: "realtime-features-socket-io",
      excerpt: "Learn how to implement WebSocket communication for real-time features in your web applications.",
      date: "2024-11-20",
      imageSrc: "/blog/socket-io.jpg",
    },
    {
      id: 3,
      title: "Mastering Next.js App Router",
      slug: "mastering-nextjs-app-router",
      excerpt: "Deep dive into Next.js 14+ App Router patterns and server components for better performance.",
      date: "2024-10-05",
      imageSrc: "/blog/nextjs-app-router.jpg",
    },
  ],

  // Navigation Links
  navigation: [
    { name: "About", href: "/about" },
    { name: "Work", href: "/projects" },
    { name: "Journey", href: "#timeline" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "/contact" },
  ],

  // Testimonials (Cleared since real ones were about slides in About.jsx)
  testimonials: [],

  // Call-to-actions and messaging
  cta: {
    hero: "A MERN Stack Developer specialized in building highly performant, pixel-perfect web systems.",
    about: "I am a MERN Stack Developer and IT engineering student from Nashik, passionate about building innovative web applications.",
    contact: "Whether you have a full-stack project in mind, or just want to chat about MERN — my inbox is open.",
  },

  // Organization info
  organization: {
    name: "Pravin Pagar",
    founded: "2023",
    founded_full: new Date(2023, 0, 1),
  },

  // Helper functions
  getSocialLink: (platform: string) => {
    return (UserData.social as any)[platform.toLowerCase()] || null;
  },

  getProjectBySlug: (slug: string) => {
    return UserData.projects.find((p) => p.slug === slug) || null;
  },

  getAllSkills: () => {
    return Object.values(UserData.skills).flat();
  },
};

/**
 * Legacy exports for backward compatibility
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

