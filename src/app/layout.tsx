import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import SmoothScrollProvider from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeXT Stage | Desenvolvimento Fullstack",
  description:
    "Transformamos ideias em software de alto nível. Conheça nosso time de desenvolvedores fullstack.",
  openGraph: {
    title: "NeXT Stage | Desenvolvimento Fullstack",
    description:
      "Transformamos ideias em software de alto nível. Conheça nosso time de desenvolvedores fullstack.",
    url: "https://next-stage-portfolio.vercel.app",
    siteName: "NeXT Stage",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeXT Stage | Desenvolvimento Fullstack",
    description:
      "Transformamos ideias em software de alto nível. Conheça nosso time de desenvolvedores fullstack.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NeXT Stage",
              description: "Transformamos ideias em software de alto nível.",
              url: "https://next-stage-portfolio.vercel.app",
              foundingDate: "2026",
              numberOfEmployees: "3",
              contactPoint: {
                "@type": "ContactPoint",
                email: "contato@nextstage.dev",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D4A853] focus:text-[#050505] focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Pular para o conteúdo
        </a>
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
