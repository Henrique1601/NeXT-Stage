"use client";

import GoldenOrbsBackground from "@/components/golden-orbs-background";
import FloatingNavbar from "@/components/floating-navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import Team from "@/components/team";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function ClientPage() {
  return (
    <main id="main-content" className="relative min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <GoldenOrbsBackground />
      <div className="fixed inset-0 z-[1] pointer-events-none bg-overlay" />

      <FloatingNavbar />

      <div className="relative z-10">
        <Hero />
        <Services />
        <TechStack />
        <Team />
        <Portfolio />
        <Process />
        <Contact />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
