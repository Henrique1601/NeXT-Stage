"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className="w-8 h-8 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center hover:border-[#D4A853]/30 transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="w-3.5 h-3.5 text-white/50" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#D4A853]" />
      )}
    </button>
  );
}
