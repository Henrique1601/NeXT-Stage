"use client";

import { motion } from "framer-motion";
import { ShinyButton } from "./shiny-button";
import { Code2, Users, Briefcase } from "lucide-react";

const stats = [
  { icon: Code2, value: "50+", label: "Projetos Entregues" },
  { icon: Users, value: "98%", label: "Clientes Satisfeitos" },
  { icon: Briefcase, value: "5+", label: "Anos de Mercado" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center px-6"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A853]/20 bg-[#D4A853]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
            <span className="text-xs text-[#D4A853] tracking-widest uppercase font-medium">
              Três desenvolvedores fullstack
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8"
        >
          <span className="text-white">Transformamos ideias em</span>
          <br />
          <span className="bg-gradient-to-r from-[#D4A853] via-[#E8C35A] to-[#F5C542] bg-clip-text text-transparent">
            software de alto nível
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Da concepção ao deploy, criamos aplicações web, mobile e APIs que impulsionam
          o seu negócio com qualidade e transparência total.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ShinyButton
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-base px-10 py-4"
          >
            Solicitar Orçamento
          </ShinyButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
                <s.icon className="w-4 h-4 text-[#D4A853]" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">{s.value}</p>
                <p className="text-white/40 text-xs">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
