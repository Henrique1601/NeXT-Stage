"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./theme-toggle";

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Serviços" },
  { id: "process", label: "Processo" },
  { id: "tech", label: "Tecnologias" },
  { id: "team", label: "Equipe" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contact", label: "Contato" },
];

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: string) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(`#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-white/[0.08] backdrop-blur-2xl" style={{ backgroundColor: "var(--navbar)" }}>
          <button onClick={() => scrollTo("hero")} className="text-sm font-semibold tracking-wide">
            <span className="bg-gradient-to-r from-[#D4A853] to-[#F5C542] bg-clip-text text-transparent">
              NeXT Stage
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <ThemeToggle />
            {sections.slice(1).map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`text-sm transition-colors ${
                  activeSection === s.id
                    ? "text-white/90"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute left-0 top-[2px] w-5 h-[2px] bg-white/80 rounded-full origin-center"
                  animate={isOpen ? { rotate: 45, top: "9px" } : { rotate: 0, top: "2px" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute left-0 top-[9px] w-5 h-[2px] bg-white/80 rounded-full"
                  animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.span
                  className="absolute left-0 bottom-[2px] w-5 h-[2px] bg-white/80 rounded-full origin-center"
                  animate={isOpen ? { rotate: -45, bottom: "9px" } : { rotate: 0, bottom: "2px" }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/[0.08] bg-[#050505]/95 backdrop-blur-3xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {sections.slice(1).map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  onClick={() => scrollTo(s.id)}
                  className="block w-full text-left py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all text-base"
                >
                  {s.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
