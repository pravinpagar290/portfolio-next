"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_STEPS = [
  {
    title: "Discovery",
    text: "Understanding the core business metrics, user experience bottlenecks, and the technical constraints before writing a single line of code.",
    imgUrl: "https://placehold.co/1080x720/1a1a1a/8a8a8a/webp?text=Discovery",
  },
  {
    title: "Architecture",
    text: "Structuring the application for headless scale. Choosing the right rendering strategy (SSR vs SSG) and building semantic component trees.",
    imgUrl: "https://placehold.co/1080x720/222222/8a8a8a/webp?text=Architecture",
  },
  {
    title: "Execution",
    text: "Integrating API endpoints, painting to the DOM with React, and layering micro-interactions with Framer Motion and GSAP.",
    imgUrl: "https://placehold.co/1080x720/121212/8a8a8a/webp?text=Execution",
  },
];

export default function PinnedStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current) return;

      const sections = gsap.utils.toArray<HTMLElement>(".story-section");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      sections.forEach((sec, i) => {
        tl.fromTo(
          sec,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power3.out",
          },
          i * 1.5
        );

        tl.to(sec, { opacity: 1, duration: 1 });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-16 relative">

        {/* Left sticky section — uses CSS sticky instead of GSAP pin to avoid
            pin-spacer layout issues inside the flex container */}
        <div
          className="w-full md:w-5/12 h-fit md:sticky md:top-0 md:h-screen flex flex-col justify-center z-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            Process &<br /> Flow.
          </h2>
          <p className="text-xl text-muted max-w-sm">
            A systematic approach to breaking down creative visions into highly robust frontend systems.
          </p>
        </div>

        {/* Right scrolling section */}
        <div className="w-full md:w-7/12 flex flex-col gap-40 md:pt-[20vh] md:pb-[40vh]">
          {STORY_STEPS.map((step, i) => (
            <div
              key={i}
              className="story-section flex flex-col gap-6 will-change-transform will-change-opacity transform-gpu"
            >
              <span className="text-accent font-bold tracking-widest text-sm uppercase">
                Phase 0{i + 1}
              </span>

              <h3 className="text-3xl md:text-5xl font-bold">
                {step.title}
              </h3>

              <p className="text-lg md:text-xl text-muted max-w-md">
                {step.text}
              </p>

              <div className="relative w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden mt-6 bg-white/5 border border-white/5 will-change-transform">
                <Image
                  src={step.imgUrl}
                  alt={`Process step: ${step.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={70}
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
