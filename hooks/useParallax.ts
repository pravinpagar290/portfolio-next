import { useTransform, useScroll, MotionValue } from "framer-motion";
import { RefObject } from "react";

/**
 * Hook for creating simple, elegant parallax offsets driven by scroll
 * @param ref - The element holding the scroll target
 * @param offset - Maximum offset in pixels applied at the extremes
 * @returns A Framer Motion value mapping normalized scroll progress to a translate map
 */
export function useParallax(ref: RefObject<HTMLElement>, offset: number = 50): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
}
