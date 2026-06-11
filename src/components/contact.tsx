"use client";

import { SectionLabel } from "./section-label";
import { DotPattern } from "./dot-pattern";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useInView } from "@/lib/use-in-view";

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      id="contact"
      className="relative min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`fade-in-up ${inView ? "in-view" : ""}`}
        >
          <SectionLabel number="05" label="Contato" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-white/40 max-w-xl mb-12 text-sm md:text-base">
            Preencha o formulário e entraremos em contato em até 12 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div
            className={`fade-in-left ${inView ? "in-view" : ""} lg:col-span-2`}
          >
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent h-full">
              <div className="relative h-full rounded-2xl bg-[#050505] border border-white/[0.06] overflow-hidden p-7">
                <DotPattern width={20} height={20} />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#D4A853]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Email</p>
                      <p className="text-white text-sm">contato@nextstage.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#D4A853]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">WhatsApp</p>
                      <p className="text-white text-sm">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#D4A853]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs">Localização</p>
                      <p className="text-white text-sm">Brasil — Remoto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fade-in-right ${inView ? "in-view" : ""} lg:col-span-3`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent">
              <div className="relative rounded-2xl bg-[#050505] border border-white/[0.06] overflow-hidden p-7">
                <DotPattern width={20} height={20} />
                <form
                  className="relative z-10 space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-white/40 text-xs mb-2 tracking-wide uppercase">
                        Nome
                      </label>
                      <input
                        id="nome"
                        type="text"
                        placeholder="Seu nome"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4A853]/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/40 text-xs mb-2 tracking-wide uppercase">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4A853]/40 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-white/40 text-xs mb-2 tracking-wide uppercase">
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4A853]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-white/40 text-xs mb-2 tracking-wide uppercase">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      placeholder="Conte-nos sobre seu projeto..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#D4A853]/40 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] to-[#F5C542] text-[#050505] text-sm font-medium hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] transition-shadow duration-300"
                  >
                    Enviar Mensagem
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
