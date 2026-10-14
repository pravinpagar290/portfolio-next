export const UserData = {
  // Personal Information
  personal: {
    name: "Pravin Dipak Pagar",
    firstName: "Pravin",
    lastName: "Pagar",
    title: "Full Stack Developer",
    bio: "Full Stack Developer and B.E. Information Technology student with hands-on experience building web and mobile applications using JavaScript, TypeScript, React, Next.js, Node.js, and MongoDB. Experienced in REST APIs, real-time systems, AI/agentic workflows, video applications, and third-party integrations.",
    shortBio:
      "A Full Stack Developer specialized in building scalable web and mobile applications, real-time systems, and AI-driven workflows.",
    email: "pravinpagar290@gmail.com",
    phone: "+91 9657496319",
    location: "Loni B.K., Maharashtra, India",
    timezone: "IST",
    resume: "/Pravin_Pagar_Resume.pdf",
  },

  // Education
  education: [
    {
      id: 1,
      degree: "B.E. — Information Technology",
      institution: "Sir Visvesvaraya Institute of Technology, Chincholi",
      period: "2023 – 2027",
      grade: "CGPA: 7.7/10",
      location: "Chincholi, Nashik, Maharashtra, India",
    },
  ],

  // Website Configuration
  website: {
    url: "https://pravinpagar.vercel.app/",
    ogImage: "https://pravinpagar.vercel.app/og-image.jpg",
    description:
      "Pravin Dipak Pagar is a Full Stack Developer and IT Engineering student from Maharashtra, India. Pravin specializes in building web and mobile applications using React, Next.js, React Native, Node.js, MongoDB, and AI/agentic workflows.",
  },

  // SEO Keywords
  keywords: {
    primary: [
      "Pravin Dipak Pagar",
      "Pravin Pagar",
      "Pravin Pagar Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Native Developer",
      "Next.js Developer",
      "AI Workflows Developer",
      "Node.js Developer",
    ],
    secondary: [
      "LangChain",
      "LangGraph",
      "WebSockets",
      "Stream SDK",
      "Developer Portfolio",
      "Web Developer India",
      "TypeScript Developer",
      "MediaPipe",
      "BullMQ",
      "Redis",
    ],
    all: [
      "Pravin Dipak Pagar",
      "Pravin Pagar",
      "Pravin Pagar Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "React Developer",
      "Next.js Developer",
      "React Native Developer",
      "Node.js Developer",
      "TypeScript Developer",
      "JavaScript",
      "LangChain",
      "LangGraph",
      "AI Agents",
      "LLM Integration",
      "MediaPipe",
      "WebSockets",
      "Stream SDK",
      "Real-time Systems",
      "Video Streaming",
      "HLS Streaming",
      "MongoDB",
      "MongoDB Aggregation",
      "Express.js",
      "Redis",
      "BullMQ",
      "Cloudflare R2",
      "Vercel",
      "Render",
      "Postman",
      "Git",
      "Portfolio",
    ],
  },

  // Social Links & Contact
  social: {
    github: "https://github.com/pravinpagar290",
    linkedin: "https://www.linkedin.com/in/pravin-pagar",
    twitter: "https://twitter.com/pravinpagar",
    email: "pravinpagar290@gmail.com",
    phone: "+91 9657496319",
  },

  // Skills by Category (organized matching resume)
  skills: {
    languages: ["JavaScript", "TypeScript", "Java"],
    frontend: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
      "Tailwind CSS",
      "GSAP",
    ],
    backend: ["Node.js", "Express.js", "REST APIs"],
    database: ["MongoDB", "MongoDB Aggregation"],
    ai: ["LangChain", "LangGraph", "LLM Integration", "AI Agents", "MediaPipe"],
    realtime: ["WebSockets", "Stream SDK", "HLS", "Groq Whisper", "Mistral AI"],
    cloud: ["Cloudflare R2", "Redis", "BullMQ", "Vercel", "Render"],
    tools: ["Git", "GitHub", "Postman", "Monaco Editor"],
  },

  // Skill Categories (organized for display)
  skillCategories: [
    {
      category: "Frontend & Mobile",
      items: [
        "React.js & Next.js",
        "React Native",
        "TypeScript & JavaScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "Java",
      ],
    },
    {
      category: "Backend & Systems",
      items: [
        "Node.js & Express.js",
        "REST APIs",
        "Redis Caching",
        "BullMQ Processing",
        "JWT Authentication",
        "Microservices Architecture",
      ],
    },
    {
      category: "AI & Agentic Workflows",
      items: [
        "LangChain & LangGraph",
        "LLM Integration & Agents",
        "MediaPipe Vision Analysis",
        "Groq Whisper (Speech-to-Text)",
        "Mistral AI Video Q&A",
        "Voice Pipelines (STT/TTS)",
      ],
    },
    {
      category: "Real-Time, Cloud & Database",
      items: [
        "WebSockets & Stream SDK",
        "Adaptive HLS Streaming",
        "MongoDB & Aggregation",
        "Cloudflare R2 Presigned Uploads",
        "Vercel & Render",
        "Git & Postman",
      ],
    },
  ],

  // Projects (from Resume Selected Projects & Activities)
  projects: [
    {
      id: 1,
      title: "Agstyaa Consultant · Learning & Video Platform",
      slug: "agstyaa-consultant",
      category: "Full Stack · Video & EdTech",
      description:
        "Engineered a full-stack learning platform with role-based authentication, enrollment-gated content, course management, admin workflows, and secure video delivery using short-lived JWT playback tokens with Cloudflare R2 presigned uploads.",
      imageSrc: "/agstyaa.png",
      githubUrl: "https://github.com/pravinpagar290",
      link: "",
      tags: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudflare R2",
        "JWT",
      ],
      featured: true,
      highlights: [
        "Engineered full-stack learning platform with role-based auth, enrollment-gated content, course management, and admin workflows",
        "Built secure video delivery using short-lived JWT playback tokens, protected streaming endpoints, and HTTP Range support",
        "Integrated Cloudflare R2 presigned uploads for large media transfers, supporting 10 GB+ media assets",
        "Deployed with Vercel, Render, MongoDB Atlas, and Cloudflare R2, supporting 100+ concurrent users across web and mobile",
      ],
    },
    {
      id: 2,
      title: "DevEvaluate · Collaborative Interview Platform",
      slug: "dev-evaluate",
      category: "Full Stack · Real-Time & Stream",
      description:
        "Built 1-on-1 technical interview rooms with video/audio, screen sharing, recording, real-time chat, and Monaco Editor WebSocket synchronization with automated test-case evaluation.",
      imageSrc: "/devevaluate.png",
      githubUrl: "https://github.com/pravinpagar290/DevEvaluate",
      link: "https://devevaluate.netlify.app/",
      tags: [
        "React 19",
        "Node.js",
        "Express",
        "MongoDB",
        "Stream",
        "WebSockets",
        "Monaco Editor",
        "Inngest",
        "Clerk",
      ],
      featured: true,
      highlights: [
        "Built 1-on-1 technical interview rooms with video/audio, screen sharing, recording, real-time chat, and authenticated sessions",
        "Integrated Monaco Editor with WebSocket synchronization for real-time code collaboration between interviewer and candidate",
        "Implemented isolated code execution with automated test-case evaluation and immediate success/failure feedback",
        "Developed REST APIs and asynchronous workflows using Express and Inngest, with TanStack Query for client-side caching",
      ],
    },
    {
      id: 3,
      title: "StreamTweet · Video & Social Platform",
      slug: "streamtweet",
      category: "Full Stack · AI & Streaming",
      description:
        "Engineered a full-stack video-sharing platform featuring adaptive HLS streaming from 360p–720p+, Groq Whisper automated transcription, and Mistral AI video Q&A with Redux Toolkit state management.",
      imageSrc: "/stream_tweet.png",
      githubUrl: "https://github.com/pravinpagar290/Stream_Tweet",
      link: "https://stream-tweet-seven.vercel.app",
      tags: [
        "React 19",
        "Vite",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "Groq Whisper",
        "Mistral AI",
        "HLS",
      ],
      featured: true,
      highlights: [
        "Engineered a full-stack video-sharing platform with adaptive HLS streaming from 360p–720p+",
        "Integrated Groq Whisper for automated transcription and Mistral AI for AI-powered video question answering",
        "Built social features including likes, subscriptions, and tweets with Redux Toolkit",
      ],
    },
    {
      id: 4,
      title: "ValueBid · Real-Time Auction & Bidding Platform",
      slug: "value-bid",
      category: "Full Stack · Real-Time Auction",
      description:
        "Built a full-stack auction platform with user/admin dashboards, real-time bidding, payment verification, and scheduled Node-cron automation that streamlined 80% of manual auction tasks.",
      imageSrc: "/value_bid.png",
      githubUrl: "https://github.com/pravinpagar290/Value_Bid",
      link: "https://value-bid.vercel.app",
      tags: [
        "React 19",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "Node-cron",
      ],
      featured: true,
      highlights: [
        "Built a full-stack auction platform with separate user/admin dashboards and real-time bidding workflows",
        "Automated approximately 80% of manual auction tasks using scheduled Node-cron workflows",
        "Implemented payment verification, image management, filtering, leaderboard functionality, and email workflows",
      ],
    },
    {
      id: 5,
      title: "QR Event Management System · Horizon Event",
      slug: "qr-event-management",
      category: "Full Stack · Event Automation",
      description:
        "Participated in developing and deploying a QR-based check-in/check-out system used for 500+ students with automated email communication, later reused for internal hackathons.",
      imageSrc: "/hey_chat.png",
      githubUrl: "https://github.com/pravinpagar290",
      link: "",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "QR Code",
        "Email Workflows",
      ],
      featured: false,
      highlights: [
        "Participated in developing and deploying a QR-based check-in/check-out system used for 500+ students, with automated email communication",
        "System was later reused for an internal hackathon with an attendance and event dashboard",
      ],
    },
    {
      id: 6,
      title: "Diagramyx · Architecture & Whiteboard Tool",
      slug: "diagramyx",
      category: "Frontend · HTML5 Canvas",
      description:
        "Developed a collaborative browser-based diagramming and whiteboard tool for developers to visually design system architectures using a performant HTML5 Canvas engine.",
      imageSrc: "/diagramyx.png",
      githubUrl: "https://github.com/PRATIK-RAKTATE/Diagramyx",
      link: "",
      tags: ["React", "TypeScript", "HTML5 Canvas", "WebSockets"],
      featured: false,
      highlights: [
        "Performant browser canvas engine for real-time architecture diagrams",
        "Real-time multi-user state synchronization via WebSockets",
      ],
    },
  ],

  // Experience / work history
  experience: [
    {
      id: 1,
      company: "TenAI's Consultant",
      role: "Full Stack Developer Intern",
      period: "May 2026 – Present",
      description:
        "Develop full-stack features across web and React Native applications using Next.js, Node.js, Express.js, TypeScript, and MongoDB.",
      skills: [
        "Next.js",
        "React Native",
        "TypeScript",
        "LangChain",
        "LangGraph",
        "WebSockets",
        "Redis",
        "BullMQ",
        "MediaPipe",
      ],
    },
    {
      id: 2,
      company: "Horizon College Event",
      role: "Full Stack Developer (QR Event System)",
      period: "2024 — 2025",
      description:
        "Participated in developing and deploying a QR-based check-in/check-out system used for 500+ students, with automated email communication. System was later reused for an internal hackathon with an attendance and event dashboard.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "QR Verification",
        "Automated Email",
      ],
    },
    {
      id: 3,
      company: "Smart India Hackathon",
      role: "Competitor (SIH) as Frontend Developer",
      period: "2024",
      description:
        "Engineered production-ready full-stack solutions in 48-hour sprints, competing against 500+ teams nationwide.",
      skills: ["React", "Node.js", "MongoDB", "System Design"],
    },
    {
      id: 4,
      company: "CODEXINTERN",
      role: "Frontend Developer",
      period: "2024 — 2025",
      description:
        "Developed a Multi-tool web application with AI integration and a code reviewer with OpenAI API.",
      skills: ["Rapid Prototyping", "Teamwork", "Frontend", "APIs"],
    },
    {
      id: 5,
      company: "SVIT College",
      role: "Frontend Developer (Website Redevelopment)",
      period: "2024 — 2025",
      description:
        "Led the redevelopment of college official website with modern, scalable architecture, nested routing, and enterprise-grade version control.",
      skills: ["React", "Teamwork", "Frontend", "APIs", "Nested Routing"],
    },
  ],

  // Blog / Articles (Keep placeholders or clear if not applicable)
  articles: [
    {
      id: 1,
      title: "Building Scalable MERN Stack Applications",
      slug: "building-scalable-mern-applications",
      excerpt:
        "A comprehensive guide to architecting production-ready MERN applications with proper structure, best practices, and real-world patterns for handling complex data flows and performance optimization.",
      date: "2024-12-15",
      imageSrc: "/blog/mern-architecture.svg",
      content: `# Building Scalable MERN Stack Applications

## Introduction
Building scalable MERN applications requires more than just knowing the technologies. It's about understanding architecture patterns, separation of concerns, and how to structure your codebase for long-term maintainability.

## Project Structure
A well-organized MERN project typically follows this structure:
\`\`\`
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   └── services/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   └── server.js
└── package.json
\`\`\`

## Database Design
- Use Mongoose schemas with proper validation
- Implement indexing for frequently queried fields
- Follow normalization principles
- Consider denormalization for performance-critical queries

## API Structure
- RESTful conventions with proper HTTP methods
- Versioning (v1, v2) for backward compatibility
- Comprehensive error handling
- Request/response validation using libraries like Joi or Zod

## Frontend Best Practices
- Component composition and reusability
- State management with Redux Toolkit
- Custom hooks for logic abstraction
- Lazy loading and code splitting

## Performance Optimization
- Database query optimization
- Caching strategies (Redis, browser caching)
- CDN usage for static assets
- Load balancing for backend services`,
    },
    {
      id: 2,
      title: "Real-time Features with Socket.io: From Basics to Production",
      slug: "realtime-features-socket-io",
      excerpt:
        "Master WebSocket communication using Socket.io. Learn how to build real-time applications including bidirectional messaging, event handling, room management, and scaling considerations for production environments.",
      date: "2024-11-20",
      imageSrc: "/blog/socket-io.svg",
      content: `# Real-time Features with Socket.io

## What is Socket.io?
Socket.io is a library that enables real-time, bidirectional communication between web clients and servers using WebSockets.

## Core Concepts

### Events and Listeners
\`\`\`javascript
// Emit events
socket.emit('message', { text: 'Hello' });

// Listen for events
socket.on('message', (data) => {
  console.log(data);
});
\`\`\`

### Rooms and Namespaces
- Rooms: Groups of sockets you can broadcast to
- Namespaces: Separate communication channels

### Implementing Real-time Chat
1. User connection handling
2. Message broadcasting
3. Typing indicators
4. Read receipts
5. User presence

## Production Considerations
- Horizontal scaling with Redis adapter
- Message persistence
- Error handling and reconnection logic
- Security and authentication
- Rate limiting

## Common Use Cases
- Collaborative tools (editing, whiteboarding)
- Real-time notifications
- Live streaming chat
- Multiplayer games
- Auction bidding systems`,
    },
    {
      id: 3,
      title:
        "Mastering Next.js 16: App Router, Server Components & Performance",
      slug: "mastering-nextjs-app-router",
      excerpt:
        "Deep dive into Next.js 16+ with App Router, Server Components, and advanced patterns. Learn how to build blazingly fast, SEO-optimized applications with proper data fetching strategies and performance metrics.",
      date: "2024-10-05",
      imageSrc: "/blog/nextjs-app-router.svg",
      content: `# Mastering Next.js App Router

## What's New in Next.js 16?
- Turbopack for faster builds
- Improved Server Components
- Enhanced API routes
- Better error handling

## App Router Basics
The App Router provides file-based routing in the \`app/\` directory:

\`\`\`
app/
├── page.tsx           # Home page
├── about/
│   └── page.tsx      # /about
├── blog/
│   └── [slug]/
│       └── page.tsx  # /blog/[slug]
└── layout.tsx        # Root layout
\`\`\`

## Server vs Client Components
- Server Components: Data fetching, sensitive operations
- Client Components: User interactions, animations
- Mix and match for optimal performance

## Data Fetching Strategies
1. **Direct Database Access**: Server components can query databases directly
2. **API Routes**: RESTful endpoints for client-side fetching
3. **API Middleware**: Authentication, logging, rate limiting

## Performance Optimization
- Image optimization with next/image
- Script optimization
- Code splitting and lazy loading
- Static generation vs ISR vs SSR

## SEO Best Practices
- Meta tags with generateMetadata
- Structured data (JSON-LD)
- Sitemap generation
- Open Graph tags`,
    },
    {
      id: 4,
      title: "WebRTC: Building Real-time Video Communication",
      slug: "webrtc-video-communication",
      excerpt:
        "A complete guide to implementing WebRTC for peer-to-peer video communication. Covers STUN/TURN servers, signaling, SDP exchanges, and building production-ready video conferencing applications.",
      date: "2024-09-10",
      imageSrc: "/blog/webrtc.svg",
      content: `# WebRTC: Building Real-time Video Communication

## What is WebRTC?
WebRTC (Web Real-Time Communication) enables peer-to-peer audio, video, and data communication directly between browsers.

## Core Components
1. **MediaStream API**: Access to user's camera and microphone
2. **RTCPeerConnection**: Manages the peer connection
3. **RTCDataChannel**: Send arbitrary data between peers

## Connection Flow
1. Signaling: Establish connection between peers
2. STUN/TURN: Traverse NAT and firewalls
3. ICE Candidates: Exchange connection information
4. SDP (Session Description Protocol): Negotiate media

## Building a Video Chat Application
\`\`\`javascript
// Get user media
const stream = await navigator.mediaDevices.getUserMedia({ 
  video: true, 
  audio: true 
});

// Create peer connection
const peerConnection = new RTCPeerConnection();

// Add tracks
stream.getTracks().forEach(track => {
  peerConnection.addTrack(track, stream);
});
\`\`\`

## Scalability Considerations
- Media server setup (Kurento, Janus, Mediasoup)
- Recording and transcoding
- Bandwidth optimization
- Network quality adaptation`,
    },
    {
      id: 5,
      title: "Advanced TypeScript Patterns for Type-Safe Applications",
      slug: "advanced-typescript-patterns",
      excerpt:
        "Explore advanced TypeScript patterns including generics, conditional types, utility types, and type guards. Learn how to write type-safe code that catches errors at compile time and improves developer experience.",
      date: "2024-08-20",
      imageSrc: "/blog/typescript.svg",
      content: `# Advanced TypeScript Patterns

## Generics
Generics allow you to write reusable components that work with multiple types:

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}
\`\`\`

## Conditional Types
\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">; // true
type B = IsString<number>;  // false
\`\`\`

## Utility Types
- \`Partial<T>\`: Make all properties optional
- \`Record<K, V>\`: Create object types
- \`Exclude<T, U>\`: Remove types from union
- \`Omit<T, K>\`: Remove specific keys
- \`Pick<T, K>\`: Select specific keys

## Type Guards
\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
\`\`\`

## Best Practices
- Use strict mode
- Avoid \`any\` type
- Create custom types for domain logic
- Use discriminated unions for complex state`,
    },
    {
      id: 6,
      title: "Tailwind CSS + shadcn/ui: Modern Component Development",
      slug: "tailwind-shadcn-modern-ui",
      excerpt:
        "Learn how to build beautiful, accessible UI components using Tailwind CSS and shadcn/ui. Discover component composition patterns, theme customization, and creating design systems that scale.",
      date: "2024-07-30",
      imageSrc: "/blog/tailwind-shadcn.svg",
      content: `# Tailwind CSS + shadcn/ui

## Why Tailwind CSS?
- Utility-first approach
- Highly customizable
- Great developer experience
- Optimized bundle sizes

## Understanding shadcn/ui
shadcn/ui provides unstyled, accessible components that you own and customize.

## Component Composition
\`\`\`typescript
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <Button variant="outline">Click me</Button>
    </Card>
  )
}
\`\`\`

## Customization Strategies
1. Tailwind config for global styles
2. CSS variables for theming
3. Component-level overrides
4. Creating custom components

## Design System Best Practices
- Consistent spacing scale
- Color palette definition
- Typography hierarchy
- Accessibility compliance (WCAG)

## Performance Tips
- PurgeCSS for unused styles
- Responsive design with breakpoints
- Dark mode support
- Animation best practices`,
    },
    {
      id: 7,
      title: "Database Design: From MongoDB to PostgreSQL",
      slug: "database-design-guide",
      excerpt:
        "Comprehensive guide to database design across SQL and NoSQL paradigms. Learn normalization, schema design, indexing strategies, and when to use MongoDB, MySQL, or PostgreSQL for your MERN applications.",
      date: "2024-06-15",
      imageSrc: "/blog/database-design.svg",
      content: `# Database Design Guide

## SQL vs NoSQL

### MongoDB (NoSQL)
- Document-based
- Flexible schema
- Great for rapid development
- Horizontal scaling with sharding

### PostgreSQL/MySQL (SQL)
- Relational model
- ACID compliance
- Complex queries with JOINs
- Strong data integrity

## Normalization in SQL
1. **1NF**: Eliminate duplicate columns
2. **2NF**: Remove partial dependencies
3. **3NF**: Remove transitive dependencies
4. **BCNF**: Stronger form of 3NF

## MongoDB Schema Design
\`\`\`javascript
// Embedded documents
{
  _id: ObjectId,
  title: "Project",
  author: {
    name: "Pravin",
    email: "pravinpagar290@gmail.com"
  }
}

// References
{
  _id: ObjectId,
  title: "Project",
  authorId: ObjectId
}
\`\`\`

## Indexing Strategy
- Create indexes on frequently queried fields
- Use compound indexes for multiple field queries
- Monitor index performance
- Balance between read speed and write performance

## Common Patterns
- User authentication tables
- Audit logging
- Soft deletes
- Temporal data handling`,
    },
    {
      id: 8,
      title: "Deployment & DevOps: From Local to Production",
      slug: "deployment-devops-guide",
      excerpt:
        "End-to-end guide to deploying MERN applications to production. Cover Docker containerization, CI/CD pipelines, environment configuration, monitoring, and best practices for Vercel, Netlify, and self-hosted solutions.",
      date: "2024-05-25",
      imageSrc: "/blog/deployment.svg",
      content: `# Deployment & DevOps Guide

## Docker Containerization
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## CI/CD Pipelines
- Automated testing
- Build process
- Deployment triggers
- Rollback strategies

## Environment Management
\`\`\`
.env.local       # Local development
.env.staging     # Staging environment
.env.production  # Production environment
\`\`\`

## Popular Platforms
- **Vercel**: Optimal for Next.js
- **Netlify**: Great for static sites + serverless
- **Render/Railway**: Full-stack hosting
- **DigitalOcean**: VPS option

## Monitoring & Logging
- Application performance monitoring (APM)
- Error tracking (Sentry)
- Log aggregation (Datadog, LogRocket)
- Uptime monitoring

## Security Best Practices
- Environment variables for secrets
- HTTPS/SSL certificates
- Rate limiting
- CORS configuration
- Input validation and sanitization`,
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
    hero: "A Full Stack Developer specialized in building highly performant web & mobile systems and AI workflows.",
    about:
      "I am a Full Stack Developer and IT engineering student from Maharashtra, passionate about building innovative web, mobile, and AI-driven platforms.",
    contact:
      "Whether you have a full-stack project in mind, an AI integration, or just want to chat — my inbox is open.",
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
  resume: UserData.personal.resume,
};

export const PROJECTS = UserData.projects;
export const SKILL_CATEGORIES = UserData.skillCategories;
export const SOCIAL_LINKS = Object.entries(UserData.social).map(
  ([name, href]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    href: href as string,
  }),
);
export const EXPERIENCE = UserData.experience;
export const EDUCATION = UserData.education;
export const NAVIGATION = UserData.navigation;
export const BLOG = UserData.articles;
export const ARTICLES = UserData.articles;

