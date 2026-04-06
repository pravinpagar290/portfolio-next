"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredText, setIsHoveredText] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Apply spring for a slightly detached, smooth follow effect
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide mouse via CSS for desktop users
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      document.body.style.cursor = "none";
    } else {
      return; // Abort on touch devices
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      
      // Triggers scale based on interactive elements
      if (
        tagName === "a" ||
        tagName === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovered(true);
        setIsHoveredText(false);
      } else if (
        ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "strong", "em", "li"].includes(tagName)
      ) {
        setIsHovered(false);
        setIsHoveredText(true);
      } else {
        setIsHovered(false);
        setIsHoveredText(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [cursorX, cursorY]);

  // Don't render cursor container for mobile sizing
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; 
  }

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
    >
      <motion.div
        animate={{
          // Massive scale for text reading mode, medium scale for standard interactables
          scale: isHoveredText ? 5 : isHovered ? 2.5 : 1,
          opacity: isHoveredText ? 0.1 : isHovered ? 0.3 : 1,
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full bg-white rounded-full mix-blend-difference"
      />
    </motion.div>
  );
}
