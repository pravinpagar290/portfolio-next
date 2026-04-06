import { Variants } from "framer-motion";
import { DURATIONS, EASING } from "@/lib/motion";

export function useScrollReveal(direction: "up" | "down" | "left" | "right" = "up", delay: number = 0): Variants {
  const hiddenY = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const hiddenX = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return {
    hidden: { 
      opacity: 0, 
      y: hiddenY, 
      x: hiddenX 
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: DURATIONS.slow,
        ease: EASING.premium,
        delay,
      },
    },
  };
}
