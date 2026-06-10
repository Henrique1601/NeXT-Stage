"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./section-label";
import { DotPattern } from "./dot-pattern";

const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Go", "REST & GraphQL"],
  },
  {
    name: "Mobile",
    techs: ["React Native", "Flutter", "Expo", "iOS & Android"],
  },
  {
    name: "Banco de Dados",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
  },
  {
    name: "DevOps",
    techs: ["Docker", "AWS", "Vercel", "CI/CD"],
  },
  {
    name: "Ferramentas",
    techs: ["Git", "Figma", "Notion", "Linear"],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          <SectionLabel number="02" label="Tecnologias" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-sm md:text-base">
            As ferramentas que dominamos para construir soluções de alto nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative group h-full p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent">
                <div className="relative h-full rounded-2xl bg-[#050505] border border-white/[0.06] overflow-hidden p-6 md:p-7">
                  <DotPattern width={20} height={20} />
                  <div className="relative z-10">
                    <p className="text-[#D4A853] text-xs font-mono tracking-widest mb-4 uppercase">
                      {cat.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-sm text-white/70 border border-white/[0.06] bg-white/[0.02]"
                        >
                          {tech}
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
