import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectCard from "@/components/ui/ProjectCard";
import PinnedStory from "@/components/sections/gsap/PinnedStory";
import Timeline from "@/components/sections/Timeline";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

const PROJECT_DATA = [
  {
    id: 1,
    title: "Sohub Digital Inspiration",
    category: "Web App / ThreeJS",
    slug: "sohub-digital",
    imageSrc: "https://placehold.co/1200x900/1e1e1e/8a8a8a/webp?text=Project+One",
  },
  {
    id: 2,
    title: "E-Commerce Experience",
    category: "Next.js / Headless",
    slug: "e-commerce-experience",
    imageSrc: "https://placehold.co/1200x900/2a2a2a/8a8a8a/webp?text=Project+Two",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    category: "React / D3.js",
    slug: "fintech-dashboard",
    imageSrc: "https://placehold.co/1200x900/121212/8a8a8a/webp?text=Project+Three",
  },
  {
    id: 4,
    title: "AI Image Generator",
    category: "StableDiffusion / Node",
    slug: "ai-generator",
    imageSrc: "https://placehold.co/1200x900/0a0a0a/8a8a8a/webp?text=Project+Four",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full font-semibold">
      {/* Set font-semibold at main level to enforce Inter 600 globally per requirements */}
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Grid */}
      <Skills />

      {/* 4. Projects Showcase (Sohub inspired vertical stack) */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <header className="mb-16 md:mb-24 flex gap-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Selected Work</h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
          {PROJECT_DATA.map((project, idx) => (
            <div key={project.id} className={idx % 2 !== 0 ? "md:mt-32" : ""}>
              <ProjectCard
                index={idx}
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Process GSAP Scrollytelling */}
      <PinnedStory />

      {/* 6. Timeline / Experience */}
      <Timeline />

      {/* 7. Journal / Blog */}
      <BlogPreview />

      {/* 8. Contact Section */}
      <Contact />
      
    </main>
  );
}
