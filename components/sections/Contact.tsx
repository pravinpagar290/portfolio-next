"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { MagneticText } from "@/components/ui/morphing-cursor";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with your actual email service (e.g., Nodemailer, SendGrid, Resend)
      // For now, just log and simulate success
      console.log("Form submitted:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="py-32 md:py-48 min-h-screen flex items-center justify-center"
    >
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
            Whether you have an enterprise platform in mind, or just want to
            chat about custom WebGL shaders—my inbox is open.
          </p>
        </motion.div>

        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-center"
          >
            ✓ Thank you! Your message has been sent successfully. I'll get back
            to you soon.
          </motion.div>
        )}

        {submitStatus === "error" &&
          errors &&
          Object.keys(errors).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-2xl p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-center"
            >
              ✗ Please check the form for errors.
            </motion.div>
          )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl flex flex-col gap-6 mt-8"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label
                htmlFor="name"
                className="text-sm font-bold uppercase tracking-wider text-muted ml-4"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-white/5 border rounded-full px-6 py-4 text-white placeholder-muted focus:outline-none transition-colors ${
                  errors.name
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-accent"
                }`}
                placeholder="John Doe"
                required
              />
              {errors.name && (
                <p className="text-red-400 text-xs ml-4">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label
                htmlFor="email"
                className="text-sm font-bold uppercase tracking-wider text-muted ml-4"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-white/5 border rounded-full px-6 py-4 text-white placeholder-muted focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-accent"
                }`}
                placeholder="john@example.com"
                required
              />
              {errors.email && (
                <p className="text-red-400 text-xs ml-4">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-left">
            <label
              htmlFor="message"
              className="text-sm font-bold uppercase tracking-wider text-muted ml-4"
            >
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-white/5 border rounded-3xl px-6 py-4 text-white placeholder-muted focus:outline-none transition-colors resize-none ${
                errors.message
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-accent"
              }`}
              placeholder="Tell me about your project..."
              required
            />
            {errors.message && (
              <p className="text-red-400 text-xs ml-4">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-wider overflow-hidden rounded-full transition-transform hover:scale-105 will-change-transform mt-4 w-full md:w-auto md:self-end disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            <span className="absolute z-10 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300">
              {isSubmitting ? "Sending..." : "Send Message"}
            </span>
          </button>

          <p className="text-xs text-muted mt-2">* Required fields</p>
        </motion.form>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12 pt-12 border-t border-white/10 w-full max-w-2xl"
        >
          <p className="text-muted mb-6">Or reach out directly</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <a
              href="mailto:hello@pravinpagar.com"
              className="text-white hover:text-accent transition-colors font-bold"
            >
              hello@pravinpagar.com
            </a>
            <a
              href="https://linkedin.com/in/pravinpagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors font-bold"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
