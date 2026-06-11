"use client";

import { SectionLabel } from "./section-label";
import { DotPattern } from "./dot-pattern";
import { Globe, Smartphone, Server, Palette, Lightbulb, type LucideIcon } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    desc: "Sites, plataformas e dashboards com React, Next.js e as tecnologias mais modernas do mercado.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps nativos e cross-platform com React Native e Flutter, do protótipo à publicação.",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    desc: "APIs robustas e escaláveis em Node.js, Python e Go com banco de dados PostgreSQL e MongoDB.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Interfaces elegantes e funcionais com foco em usabilidade, acessibilidade e performance.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Técnica",
    desc: "Arquitetura de software, code review e estratégia técnica para acelerar seu projeto.",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="services"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`fade-in-up ${inView ? "in-view" : ""}`}
        >
          <SectionLabel number="01" label="Serviços" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            O que fazemos
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-sm md:text-base">
            Entregamos soluções completas de software, do conceito ao deploy contínuo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} inView={inView} />
          ))}
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
  inView,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`fade-in-up ${inView ? "in-view" : ""}`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="relative group h-full hover:-translate-y-1 transition-transform duration-300">
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
    </div>
  );
}
