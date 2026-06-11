"use client";

import dynamic from "next/dynamic";
import GoldenOrbsBackground from "@/components/golden-orbs-background";
import Hero from "@/components/hero";

const Sections = dynamic(() => import("@/components/sections"), { ssr: true });

export default function ClientPage() {
  return (
    <main id="main-content" className="relative min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <GoldenOrbsBackground />
      <div className="fixed inset-0 z-[1] pointer-events-none bg-overlay" />

      <Sections />

      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}
