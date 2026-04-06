"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";
import { EASING, DURATIONS } from "@/lib/motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  className = "",
  variant = "primary" 
}: ButtonProps) {
  const isOutline = variant === "outline";
  const isSecondary = variant === "secondary";

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ ease: EASING.premium, duration: DURATIONS.fast }}
      className={`group relative inline-flex items-center justify-center px-10 py-5 font-bold uppercase tracking-widest overflow-hidden rounded-full will-change-transform cursor-pointer transition-colors duration-500 ${
        isOutline 
          ? "border-2 border-white text-white hover:text-black" 
          : isSecondary
            ? "bg-accent text-white"
            : "bg-white text-black"
      } ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      
      {/* Dynamic Background Fill */}
      <div 
        className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0 ${
          isOutline ? "bg-white" : "bg-accent"
        }`} 
      />
      
      {/* Contrast Overlay Text */}
      <span className={`absolute z-10 flex items-center gap-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ${
        isOutline ? "text-black" : "text-white"
      }`}>
        {children}
      </span>
    </motion.div>
  );

  return (
    <Magnetic strength={0.2}>
      {href ? (
        <a href={href} className="inline-block no-underline">
          {content}
        </a>
      ) : (
        content
      )}
    </Magnetic>
  );
}
