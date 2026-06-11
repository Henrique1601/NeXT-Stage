"use client";

import { useState, useCallback, useEffect } from "react";
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
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 w-5 h-[2px] bg-white/80 rounded-full transition-all duration-200 ${
                    isOpen ? "top-[9px] rotate-45" : "top-[2px] rotate-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] w-5 h-[2px] bg-white/80 rounded-full transition-all duration-150 ${
                    isOpen ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-[2px] bg-white/80 rounded-full transition-all duration-200 ${
                    isOpen ? "bottom-[9px] -rotate-45" : "bottom-[2px] rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mx-auto mt-2 max-w-5xl rounded-2xl border border-white/[0.08] bg-[#050505]/95 backdrop-blur-3xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen
            ? "opacity-100 translate-y-0 max-h-[500px]"
            : "opacity-0 -translate-y-5 max-h-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-3">
          {sections.slice(1).map((s, i) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="block w-full text-left py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/[0.04] transition-all text-base"
              style={{
                transitionDelay: isOpen ? `${0.05 * i}s` : "0s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
