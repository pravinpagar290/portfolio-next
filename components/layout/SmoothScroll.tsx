"use client";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Sub-component to bind Lenis and GSAP together
function GSAPSync() {
  const lenis = useLenis(ScrollTrigger.update);
  
  useEffect(() => {
    if (!lenis) return;
    
    // Setup ticker sync to keep ScrollTrigger fully aligned with Lenis physics
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0); // Extremely important so GSAP doesn't stutter under heavy framing
    
    return () => {
      gsap.ticker.remove(onTick);
    };
  }, [lenis]);
  
  return null;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.03, duration: 5.0, wheelMultiplier: 0.7, smoothWheel: true, syncTouch: true }}>
      <GSAPSync />
      {children}
    </ReactLenis>
  );
}
