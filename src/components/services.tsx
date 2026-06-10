"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { DotPattern } from "./dot-pattern";
import { Globe, Smartphone, Server, Palette, Lightbulb, type LucideIcon } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    desc: "Sites, plataformas e dashboards com React, Next.js e as tecnologias mais modernas do mercado.",
    span: "lg:col-span-1",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps nativos e cross-platform com React Native e Flutter, do protótipo à publicação.",
    span: "lg:col-span-1",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    desc: "APIs robustas e escaláveis em Node.js, Python e Go com banco de dados PostgreSQL e MongoDB.",
    span: "lg:col-span-1",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces elegantes e funcionais com foco em usabilidade, acessibilidade e performance.",
    span: "lg:col-span-1",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica",
    desc: "Arquitetura de software, code review e estratégia técnica para acelerar seu projeto.",
    span: "lg:col-span-2",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel number="01" label="Serviços" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            O que fazemos
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-sm md:text-base">
            Entregamos soluções completas de software, do conceito ao deploy contínuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
          <div className="lg:col-span-2 lg:col-start-2">
            <ServiceCard {...services[4]} index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  index,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.32, 0.72, 0, 1] }}
    >
      <div className="relative group h-full">
        <div className="p-[1px] rounded-2xl h-full bg-gradient-to-b from-white/[0.08] to-transparent">
          <div className="relative h-full rounded-2xl bg-[#050505] border border-white/[0.06] overflow-hidden">
            <DotPattern width={20} height={20} />
            <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
              <div className="w-11 h-11 rounded-xl border border-white/[0.06] bg-white/[0.03] flex items-center justify-center mb-5 group-hover:border-[#D4A853]/30 transition-colors">
                <Icon className="w-5 h-5 text-[#D4A853]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed flex-1">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
