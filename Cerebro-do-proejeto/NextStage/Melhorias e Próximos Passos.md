# NeXT Stage — Melhorias e Próximos Passos

**Base:** `https://next-stage-portfolio.vercel.app`  
**Repo:** `https://github.com/Henrique1601/NeXT-Stage`  
**Última auditoria:** 10 Jun 2026

---

## 🔴 Alta Prioridade

### 1. JSON-LD Structured Data

Adicionar schema.org no `<head>` para rich snippets no Google.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NeXT Stage",
  "description": "Transformamos ideias em software de alto nível.",
  "url": "https://next-stage-portfolio.vercel.app",
  "foundingDate": "2026",
  "numberOfEmployees": "3",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contato@nextstage.dev",
    "contactType": "sales"
  }
}
```

**Arquivo:** `src/app/layout.tsx` — adicionar via `NextScript` ou tag `<script>` no head.

---

### 2. Open Graph / Twitter Meta Tags

Metadata atual só tem `title` e `description`. Faltam:
- `og:image` — preview ao compartilhar
- `og:type` — `website`
- `og:url`
- `twitter:card` — `summary_large_image`

Gerar um `og-image.png` (1200×630) com o branding NeXT Stage.

**Arquivo:** `src/app/layout.tsx` — adicionar no objeto `metadata`.

```ts
export const metadata: Metadata = {
  title: "NeXT Stage | Desenvolvimento Fullstack",
  description: "Transformamos ideias em software de alto nível...",
  openGraph: {
    title: "NeXT Stage | Desenvolvimento Fullstack",
    description: "Transformamos ideias em software de alto nível...",
    url: "https://next-stage-portfolio.vercel.app",
    siteName: "NeXT Stage",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeXT Stage | Desenvolvimento Fullstack",
    description: "Transformamos ideias em software de alto nível...",
    images: ["/og.png"],
  },
};
```

---

### 3. Links Reais nos Botões Sociais (Team)

**Problema:** `<button aria-label="GitHub">` não tem `href` nem `onClick` — não leva a lugar nenhum.

**Solução:** Trocar `<button>` por `<a>` com `target="_blank"` e `rel="noopener noreferrer"`, ou adicionar `onClick` com `window.open`.

**Arquivo:** `src/components/team.tsx`

```tsx
<a
  href="https://github.com/Henrique1601"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
  className="..."
>
  <GitFork className="..." aria-hidden="true" />
</a>
```

---

### 4. Formulário Funcional

**Problema:** `onSubmit={(e) => e.preventDefault()}` — não faz nada.

**Opções (escolher uma):**
- **Formspree** (gratuito): `action="https://formspree.io/f/SEU_ID"` — só trocar o form, sem backend
- **Web3Forms** (gratuito): similar ao Formspree
- **API route Next.js:** `src/app/api/contact/route.ts` + envio de email com nodemailer ou Resend

**Recomendação:** Formspree pela simplicidade — zero setup de backend.

**Arquivo:** `src/components/contact.tsx`

```tsx
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

---

### 5. Links Clicáveis no Contato

**Problema:** Email e telefone são texto puro.

**Solução:** Envolver em `<a>` com `mailto:` e `tel:`.

**Arquivo:** `src/components/contact.tsx`

```tsx
<a href="mailto:contato@nextstage.dev" className="text-white text-sm hover:text-[#D4A853] transition-colors">
  contato@nextstage.dev
</a>
<a href="tel:+5511999999999" className="text-white text-sm hover:text-[#D4A853] transition-colors">
  (11) 99999-9999
</a>
```

---

### 6. Favicon

Adicionar `public/favicon.ico`, `public/icon.png`, `public/apple-icon.png`.

Next.js 16 lê automaticamente de `public/` com metadata:
```ts
export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};
```

Gerar com https://realfavicongenerator.net a partir do logotipo NeXT Stage.

---

### 7. Sitemap + robots.txt

**Arquivo:** `src/app/sitemap.ts`

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://next-stage-portfolio.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

**Arquivo:** `src/app/robots.ts`

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://next-stage-portfolio.vercel.app/sitemap.xml",
  };
}
```

---

## 🟡 Média Prioridade

### 8. Destaque da Seção Ativa no Navbar

Usar `IntersectionObserver` para detectar qual seção está visível e destacar o item correspondente no navbar.

**Arquivo:** `src/components/floating-navbar.tsx`

```tsx
const [activeSection, setActiveSection] = useState("hero");

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    },
    { threshold: 0.4 }
  );
  sections.forEach((s) => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });
  return () => observer.disconnect();
}, []);
```

---

### 9. prefers-reduced-motion

Usuários com labirintite/vertigem precisam poder desligar animações.

**Arquivo:** `src/app/globals.css`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html { scroll-behavior: auto; }
}
```

**Arquivo:** `src/components/golden-orbs-background.tsx`

```tsx
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReducedMotion) return; // não animar canvas
```

---

### 10. Skip-to-Content Link

Primeiro elemento focado ao pressionar Tab deve pular a navbar.

**Arquivo:** `src/app/layout.tsx`

```tsx
<body suppressHydrationWarning>
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#D4A853] focus:text-[#050505] focus:rounded-lg focus:text-sm"
  >
    Pular para o conteúdo
  </a>
  {children}
</body>
```

**Arquivo:** `src/app/page.tsx` — adicionar `id="main-content"` no `<main>`.

---

### 11. Error Boundary

Se qualquer componente quebrar, o Next.js já tem um error boundary padrão, mas dá para customizar.

**Arquivo:** `src/app/error.tsx`

```tsx
"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Algo deu errado</h1>
        <p className="text-white/40 mb-8">Tente recarregar a página.</p>
        <button onClick={reset} className="...">Tentar novamente</button>
      </div>
    </div>
  );
}
```

---

### 12. Page Como Server Component

**Problema:** `page.tsx` tem `"use client"` porque os componentes usam Framer Motion. Mas a página poderia importar um wrapper client-side e manter o layout como server component.

**Arquivo:** `src/app/page.tsx`

```tsx
import ClientPage from "./client-page";

export default function Home() {
  return <ClientPage />;
}
```

**Arquivo (novo):** `src/app/client-page.tsx` (com `"use client"`)

---

## 🟢 Baixa Prioridade (Polimento)

### 13. Smooth Scroll com Lenis

```bash
npm install @studio-freight/lenis
```

Substituir `scrollIntoView({ behavior: "smooth" })` no navbar e hero por `lenis.scrollTo("#id")`.

---

### 14. Scroll Progress Indicator

Barra fina horizontal no topo da página que preenche conforme o scroll.

```tsx
const [progress, setProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

---

### 15. Micro-interações nos Cards

- `whileHover={{ y: -4 }}` nos service/tech/portfolio cards
- Leve glow na borda `box-shadow` ao hover
- Transição suave nos DotPatterns

---

### 16. Imagens Reais no Portfólio

Substituir placeholder `ExternalLink` por screenshots reais com `next/image`.

```tsx
import Image from "next/image";

<Image
  src="/projects/gestao.webp"
  alt="Plataforma de Gestão"
  fill
  className="object-cover rounded-xl"
/>
```

---

### 17. Stagger Refinado nas Animações

Em vez de delay linear `0.1 * index`, usar curvas de easing diferentes por fila:

```tsx
transition={{ duration: 0.5, delay: i % 2 === 0 ? 0 : 0.1 }}
```

---

### 18. Responsivo: Breakpoints Finos

Verificar e ajustar:
- **360px** (iPhone SE) — fonte do hero pode quebrar
- **768px** (iPad) — grid 2-col do formulário
- **1024px** (laptop small) — bento grid
- **2560px** (ultrawide) — max-width pode esticar demais

---

### 19. Layout do Card de Consultoria

O card "Consultoria Técnica" usa `lg:col-span-2` no grid 4-col + 1, que cria um card largo. Pode ficar estranho em alguns breakpoints. Alternativa: usar 5 cards iguais em grid 5-col.

---

## 📊 Resumo de Esforço

| Prioridade | Itens | Esforço estimado |
|---|---|---|
| 🔴 Alta | 7 | ~2-3 horas |
| 🟡 Média | 5 | ~2 horas |
| 🟢 Baixa | 7 | ~3-4 horas |
| **Total** | **19** | **~7-9 horas** |

---

## 🧠 Decisões Pendentes

- Qual serviço de formulário usar? (Formspree / Web3Forms / API route)
- Gerar OG image com ferramenta externa ou fazer no Figma?
- Incluir analytics? (Plausible, umami, Google Analytics?)
- Nome real dos devs no team (vs placeholder "Desenvolvedor 2", "Desenvolvedor 3")?
- Projetos reais ou fictícios no portfólio?
