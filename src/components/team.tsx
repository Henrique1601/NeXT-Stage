"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { DotPattern } from "./dot-pattern";
import { GitFork, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Henrique",
    role: "Desenvolvedor Fullstack",
    bio: "Especialista em React, Next.js e Node.js. Apaixonado por arquitetura de software e experiência do usuário.",
    stack: ["React", "Next.js", "Node.js", "TypeScript"],
    placeholder: "H",
  },
  {
    name: "Desenvolvedor 2",
    role: "Desenvolvedor Fullstack",
    bio: "Foco em backend escalável e arquitetura de microsserviços com Python e Go.",
    stack: ["Python", "Go", "Docker", "PostgreSQL"],
    placeholder: "D",
  },
  {
    name: "Desenvolvedor 3",
    role: "Desenvolvedor Fullstack",
    bio: "Expert em mobile com React Native e Flutter, além de UI/UX design com Figma.",
    stack: ["React Native", "Flutter", "Figma", "MongoDB"],
    placeholder: "D",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel number="03" label="Equipe" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Conheça nosso time
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-sm md:text-base">
            Três desenvolvedores apaixonados por tecnologia, trabalhando lado a lado para
            entregar projetos de excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative group h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent">
                <div className="relative h-full rounded-2xl bg-[#050505] border border-white/[0.06] overflow-hidden p-6 md:p-7 flex flex-col">
                  <DotPattern width={20} height={20} />
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A853]/20 to-[#F5C542]/10 border border-[#D4A853]/20 flex items-center justify-center mb-5">
                      <span className="text-2xl font-bold text-[#D4A853]">
                        {member.placeholder}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-[#D4A853] text-xs tracking-wider uppercase mb-3">
                      {member.role}
                    </p>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">{member.bio}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[10px] text-white/50 border border-white/[0.06] bg-white/[0.02]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <button className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center hover:border-[#D4A853]/30 transition-colors">
                        <GitFork className="w-3.5 h-3.5 text-white/40" />
                      </button>
                      <button className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center hover:border-[#D4A853]/30 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5 text-white/40" />
                      </button>
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
