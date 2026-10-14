"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  FolderKanban,
  User,
  Mail,
  Phone,
  FileText,
  Copy,
  Check,
  Compass,
} from "lucide-react";
import { PROJECTS, SITE_CONFIG } from "@/lib/data";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface PaletteItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`Copied ${label} to clipboard!`);
      setIsOpen(false);
    } catch {
      showToast(`Failed to copy`);
    }
  };

  const items: PaletteItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Return to homepage showcase",
      category: "Navigation",
      icon: <Compass className="w-4 h-4 text-accent" />,
      action: () => {
        router.push("/");
        setIsOpen(false);
      },
    },
    {
      id: "nav-about",
      title: "About Me",
      subtitle: "Background, skills & education",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-accent" />,
      action: () => {
        router.push("/about");
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      title: "Projects",
      subtitle: "Explore all engineered applications",
      category: "Navigation",
      icon: <FolderKanban className="w-4 h-4 text-accent" />,
      action: () => {
        router.push("/projects");
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Contact",
      subtitle: "Get in touch or hire me",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-accent" />,
      action: () => {
        router.push("/contact");
        setIsOpen(false);
      },
    },

    // Projects
    ...PROJECTS.map((project) => ({
      id: `project-${project.slug}`,
      title: project.title,
      subtitle: project.category,
      category: "Projects" as const,
      icon: <FolderKanban className="w-4 h-4 text-purple-400" />,
      action: () => {
        router.push(`/projects/${project.slug}`);
        setIsOpen(false);
      },
    })),

    // Quick Actions
    {
      id: "action-copy-email",
      title: "Copy Email Address",
      subtitle: SITE_CONFIG.links.email,
      category: "Actions",
      icon: <Copy className="w-4 h-4 text-emerald-400" />,
      action: () => copyToClipboard(SITE_CONFIG.links.email, "email"),
    },
    {
      id: "action-copy-phone",
      title: "Copy Phone Number",
      subtitle: "+91 9657496319",
      category: "Actions",
      icon: <Phone className="w-4 h-4 text-emerald-400" />,
      action: () => copyToClipboard("+91 9657496319", "phone number"),
    },
    {
      id: "action-view-resume",
      title: "View / Download Resume",
      subtitle: "Full Stack Developer CV (PDF)",
      category: "Actions",
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => {
        window.open("/Pravin_Pagar_Resume.pdf", "_blank");
        showToast("Opening resume PDF...");
        setIsOpen(false);
      },
    },

    // Social
    {
      id: "social-github",
      title: "GitHub Profile",
      subtitle: "@pravinpagar290",
      category: "Social",
      icon: <GithubIcon className="w-4 h-4 text-white/80" />,
      action: () => {
        window.open(SITE_CONFIG.links.github, "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/pravin-pagar",
      category: "Social",
      icon: <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />,
      action: () => {
        window.open(SITE_CONFIG.links.linkedin, "_blank");
        setIsOpen(false);
      },
    },
  ];

  // Filter items based on query
  const filteredItems = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Global keydown listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  // Handle keyboard navigation inside the palette
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
      return;
    }

    inputRef.current?.focus();

    const handleKeyNav = (e: KeyboardEvent) => {
      if (filteredItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [isOpen, filteredItems, selectedIndex]);

  // Reset selectedIndex when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[10001] px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium text-sm flex items-center gap-3 shadow-2xl"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Backdrop & Container */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-24 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#121212] border border-white/15 shadow-2xl overflow-hidden z-10"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10">
                <Search className="w-5 h-5 text-muted shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command, project name, or skill..."
                  className="w-full bg-transparent text-white placeholder-muted focus:outline-none text-base font-medium"
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-muted bg-white/5 border border-white/10 rounded-md">
                  ESC
                </kbd>
              </div>

              {/* Items List */}
              <div className="max-h-[380px] overflow-y-auto p-3 flex flex-col gap-1">
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-muted text-sm">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-accent/20 border border-accent/40 text-white"
                            : "bg-transparent text-white/80 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div
                            className={`p-2 rounded-xl shrink-0 ${
                              isSelected ? "bg-accent text-white" : "bg-white/5 text-muted"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-sm text-white truncate">{item.title}</p>
                            {item.subtitle && (
                              <p className="text-xs text-muted truncate">{item.subtitle}</p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-4">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/5">
                            {item.category}
                          </span>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform ${
                              isSelected ? "text-accent translate-x-1" : "text-white/20"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Helper */}
              <div className="px-6 py-3 border-t border-white/5 bg-black/40 flex items-center justify-between text-xs text-muted">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↓</kbd> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded">↵</kbd> Select
                  </span>
                </div>
                <span>Tip: Press ⌘K anywhere</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
