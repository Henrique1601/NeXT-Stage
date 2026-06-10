"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { DotPattern } from "./dot-pattern";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Plataforma de Gestão",
    desc: "Sistema completo de gestão empresarial com dashboards em tempo real, relatórios automatizados e integração com ERP.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "App Marketplace",
    desc: "Marketplace mobile com geolocalização, chat em tempo real, pagamentos integrados e recomendações por IA.",
    tags: ["React Native", "Python", "MongoDB", "Redis"],
  },
  {
    title: "API de Pagamentos",
    desc: "API escalável de processamento de pagamentos com suporte a múltiplos gateways, antifraude e webhooks.",
    tags: ["Go", "PostgreSQL", "Docker", "AWS"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel number="04" label="Portfólio" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Nossos projetos
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-sm md:text-base">
            Alguns dos trabalhos que entregamos com excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative group h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent hover:from-[#D4A853]/20 transition-all duration-500">
                <div className="relative h-full rounded-2xl bg-[#050505] border border-white/[0.06] overflow-hidden">
                  <DotPattern width={20} height={20} />

                  <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                    <div className="w-full aspect-[16/9] rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] mb-5 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white/20" />
                    </div>

                    <h3 className="text-white font-semibold text-base mb-2">{project.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] text-white/50 border border-white/[0.06] bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
