import { PROJECTS } from "@/lib/data";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import ProjectCard from "@/components/ui/ProjectCard";
import PinnedStory from "@/components/sections/gsap/PinnedStory";
import Timeline from "@/components/sections/Timeline";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full font-semibold">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Section */}
      <About />

      {/* 3. Skills Grid */}
      <Skills />

      {/* 4. Projects Showcase (Sohub inspired vertical stack) */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 md:py-32">
        <header className="mb-16 md:mb-24 flex flex-col gap-4">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Selected<br />Work.
          </h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-32">
          {PROJECTS.map((project, idx) => (
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
