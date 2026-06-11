"use client";

import dynamic from "next/dynamic";

const FloatingNavbar = dynamic(() => import("@/components/floating-navbar"), { ssr: true });
const Services = dynamic(() => import("@/components/services"), { ssr: true });
const TechStack = dynamic(() => import("@/components/tech-stack"), { ssr: true });
const Team = dynamic(() => import("@/components/team"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/portfolio"), { ssr: true });
const Process = dynamic(() => import("@/components/process"), { ssr: true });
const Contact = dynamic(() => import("@/components/contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/footer"), { ssr: true });
const BackToTop = dynamic(() => import("@/components/back-to-top"), { ssr: true });

export default function Sections() {
  return (
    <>
      <FloatingNavbar />
      <div className="relative z-10">
        <Services />
        <TechStack />
        <Team />
        <Portfolio />
        <Process />
        <Contact />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
