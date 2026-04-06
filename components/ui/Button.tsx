"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, href, onClick, className = "" }: ButtonProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
      className={`group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-full will-change-transform ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-3">{children}</span>
      
      {/* Background fill transition */}
      <div className="absolute inset-x-0 bottom-0 top-auto h-0 bg-accent group-hover:h-full transition-all duration-500 ease-[0.16,1,0.3,1] z-0" />
      
      {/* Overlay text for contrast switch */}
      <span className="absolute z-10 flex items-center gap-3 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
        {children}
      </span>
    </motion.div>
  );

  return (
    <Magnetic strength={0.3}>
      {href ? (
        <a href={href} className="inline-block">
          {content}
        </a>
      ) : (
        content
      )}
    </Magnetic>
  );
}
