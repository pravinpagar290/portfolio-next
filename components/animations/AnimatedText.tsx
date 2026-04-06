"use client";

import { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { JSX } from "react";

interface AnimatedTextProps {
  text: string;
  type?: "words" | "lines";
  delay?: number;
  className?: string;
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
}

export default function AnimatedText({
  text,
  type = "words",
  delay = 0,
  className = "",
  el,
  once = true,
}: AnimatedTextProps) {
  // Use semantic wrapper element, fallback to "p"
  const Wrapper = el || "p";

  // Memoize splitting to prevent recalculations on scroll/re-renders
  const tokens = useMemo(() => {
    if (type === "lines") {
      // In a real scenario we might split by standard newlines or use a library, 
      // but for this utility we can split by basic \n
      return text.split("\n").filter((line) => line.trim() !== "");
    }
    // Default to 'words'
    return text.split(" ");
  }, [text, type]);

  // Framer Motion Parent Container
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === "lines" ? 0.15 : 0.08, // lines reveal slower than words
        delayChildren: delay,
      },
    },
  };

  // Framer Motion Child Element
  // Cubic Bezier provides physical, premium snap at the end
  const childVariants: Variants = {
    hidden: { 
      y: "110%", // Pushed completely out of the overflow container mask
      opacity: 0,
      rotate: 2, // Slight tilt adds to the premium feel
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Same premium curve applied globally
      },
    },
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "0px" }}
        variants={containerVariants}
        aria-hidden="true"
        className="flex flex-wrap" // Allows words to wrap naturally
      >
        {tokens.map((token, index) => {
          // If we are splitting by words, we need to return the trailing space 
          // to maintain correct browser spacing.
          const isWord = type === "words";
          return (
            <span 
              key={`${token}-${index}`} 
              // The critical overflow hidden wrapper that creates the sliding mask effect
              className="relative overflow-hidden inline-block"
            >
              <motion.span
                variants={childVariants}
                className="inline-block transform-gpu will-change-transform" // Hardware acceleration
                // Keep the structural spacing correct
                style={{ marginRight: isWord ? "0.25em" : "0" }}
              >
                {token}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Wrapper>
  );
}
