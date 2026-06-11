"use client";

import GoldenOrbsBackground from "@/components/golden-orbs-background";
import FloatingNavbar from "@/components/floating-navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import TechStack from "@/components/tech-stack";
import Team from "@/components/team";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#050505]">
      <GoldenOrbsBackground />
      <div className="fixed inset-0 z-[1] bg-[#050505]/20 pointer-events-none" />

      <FloatingNavbar />

      <div className="relative z-10">
        <Hero />
        <Services />
        <TechStack />
        <Team />
        <Portfolio />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
