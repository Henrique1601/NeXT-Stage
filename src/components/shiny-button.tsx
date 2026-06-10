"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  onClick?: () => void;
}

export function ShinyButton({ children, className, showIcon = true, onClick }: ShinyButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      initial={{ "--x": "100%", scale: 0.95 } as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      animate={{ "--x": "-100%", scale: 1 } as any}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 3,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: { type: "spring", stiffness: 200, damping: 5, mass: 0.5 },
      }}
      className={cn(
        "relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide",
        "bg-gradient-to-r from-[#D4A853] to-[#F5C542] text-[#050505]",
        "shadow-[0_0_30px_rgba(212,168,83,0.3)]",
        "hover:shadow-[0_0_50px_rgba(212,168,83,0.5)]",
        "transition-shadow duration-300",
        "group",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showIcon && (
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </span>
      <span
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          transform: "translateX(var(--x, -100%))",
        }}
      />
    </motion.button>
  );
}
