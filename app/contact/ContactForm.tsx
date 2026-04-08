"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";

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

export default function ContactForm() {
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

  // Formspree form ID - user should replace with their own form ID from formspree.io
  const FORMSPREE_FORM_ID = "your-formspree-form-id";

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
      // Use Formspree API
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-16">
      {/* Success Message */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-green-500/10 border border-green-500/50 rounded-2xl text-green-400 text-center"
        >
          <Send className="w-6 h-6 mx-auto mb-2" />
          <p className="font-bold">Message sent successfully!</p>
          <p className="text-sm mt-1">I'll get back to you soon.</p>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-red-500/10 border border-red-500/50 rounded-2xl text-red-400 text-center"
        >
          <p className="font-bold">Oops! Something went wrong.</p>
          <p className="text-sm mt-1">Please try again or email me directly.</p>
        </motion.div>
      )}

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
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
              className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-muted focus:outline-none transition-colors ${
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
          <div className="flex flex-col gap-2">
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
              className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-muted focus:outline-none transition-colors ${
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
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-bold uppercase tracking-wider text-muted ml-4"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white placeholder-muted focus:outline-none transition-colors resize-none ${
              errors.message
                ? "border-red-500/50 focus:border-red-500"
                : "border-white/10 focus:border-accent"
            }`}
            placeholder="Tell me about your project or just say hello..."
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
          <span className="relative z-10 flex items-center gap-2">
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </span>
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          <span className="absolute z-10 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 flex items-center gap-2">
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </span>
        </button>

        <p className="text-xs text-muted mt-2">* Required fields</p>
      </motion.form>

      {/* Alternative Contact Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pt-12 border-t border-white/10"
      >
        <h3 className="text-lg font-bold uppercase tracking-wide mb-8 text-center">
          Or reach out directly
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:pravinpagar290@gmail.com"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors group"
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted font-medium">Email</p>
              <p className="font-bold">pravinpagar290@gmail.com</p>
            </div>
          </a>
          <a
            href="https://github.com/pravinpagar290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors group"
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted font-medium">GitHub</p>
              <p className="font-bold">@pravinpagar290</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/pravin-pagar-33b350320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors group"
          >
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-accent/20 transition-colors">
              <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-muted font-medium">LinkedIn</p>
              <p className="font-bold">Connect with me</p>
            </div>
          </a>
        </div>
      </motion.div>

      {/* Location */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center justify-center gap-3 text-muted"
      >
        <MapPin className="w-5 h-5 text-accent" />
        <span>Nashik, Maharashtra, India</span>
        <span className="text-white/30">•</span>
        <span>IST (UTC+5:30)</span>
      </motion.div>
    </div>
  );
}