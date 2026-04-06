"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MagneticText } from "@/components/ui/morphing-cursor";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-32 md:py-48 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-semibold tracking-wider uppercase text-muted">
            Open for new opportunities
          </span>
          <div className="flex flex-col items-center gap-2">
            <MagneticText 
              text="CREATE" 
              hoverText="ELEVATE" 
              className="mt-4" 
              textClassName="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
            />
            <MagneticText 
              text="VISION." 
              hoverText="DESIGN." 
              textClassName="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-muted"
            />
          </div>
          <p className="text-xl text-muted max-w-xl text-balance mt-4">
            Whether you have an enterprise platform in mind, or just want to chat about custom WebGL shaders—my inbox is open.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl flex flex-col gap-6 mt-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted ml-4">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted ml-4">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted ml-4">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          
          <button 
            type="submit"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-full transition-transform hover:scale-105 will-change-transform mt-4 w-full md:w-auto md:self-end"
          >
            <span className="relative z-10">Send Message</span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="absolute z-10 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              Send Message
            </span>
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
