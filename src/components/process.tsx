"use client";

import { SectionLabel } from "./section-label";
import { Lightbulb, FileCode, TestTube, Rocket } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, seus objetivos e mapeamos os requisitos técnicos para definir o escopo do projeto com clareza.",
  },
  {
    icon: FileCode,
    step: "02",
    title: "Arquitetura",
    description:
      "Estruturamos a solução definindo tecnologias, fluxos de dados e a identidade visual antes de escrever uma linha de código.",
  },
  {
    icon: TestTube,
    step: "03",
    title: "Desenvolvimento",
    description:
      "Entregamos o produto em ciclos curtos com testes contínuos, garantindo qualidade e alinhamento com suas expectativas.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Deploy & Suporte",
    description:
      "Publicamos em produção, monitoramos performance e oferecemos suporte contínuo para evolução do projeto.",
  },
];

export default function Process() {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -80px 0px" });

  return (
    <section id="process" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel number="03" label="Processo" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-2 tracking-tight">
          Como trabalhamos
        </h2>
        <p className="text-white/50 text-sm mb-16 max-w-lg">
          Um fluxo transparente e colaborativo da ideia ao lançamento.
        </p>

        <div ref={ref} className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`fade-in-up ${inView ? "in-view" : ""} relative group`}
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl hover:border-white/[0.12] transition-colors h-full">
                <span className="text-4xl font-bold text-white/[0.06] absolute top-3 right-5 leading-none select-none">
                  {s.step}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.03] flex items-center justify-center mb-4">
                  <s.icon className="w-4 h-4 text-[#D4A853]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{s.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{s.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/[0.08]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
