# NeXT Stage — Melhorias e Próximos Passos

**Base:** `https://next-stage-portfolio.vercel.app`  
**Repo:** `https://github.com/Henrique1601/NeXT-Stage`  
**Última atualização:** 11 Jun 2026 (2ª rodada)

---

## ✅ Concluídos — Rodada 1

### 🔴 Alta Prioridade

| # | Item | Entregue em |
|---|---|---|
| 1 | **JSON-LD Structured Data** — schema.org Organization no `<head>` | layout.tsx |
| 2 | **Open Graph / Twitter Meta Tags** — `og:title`, `og:description`, `og:url`, `og:type`, `twitter:card` (falta `og:image`) | layout.tsx |
| 3 | **Links Reais nos Botões Sociais** — `<a>` com `href`, `target="_blank"`, `aria-label` no card do Henrique | team.tsx |
| 7 | **Sitemap + robots.txt** — rotas em `/sitemap.xml` e `/robots.txt` | sitemap.ts, robots.ts |

### 🟡 Média Prioridade

| # | Item | Entregue em |
|---|---|---|
| 8 | **Destaque da Seção Ativa no Navbar** — IntersectionObserver com threshold 0.4 | floating-navbar.tsx |
| 9 | **prefers-reduced-motion** — CSS global (falta canvas orbs parar) | globals.css |
| 10 | **Skip-to-Content Link** — primeiro Tab foca "Pular para o conteúdo" | layout.tsx + page.tsx |
| 11 | **Error Boundary** — `error.tsx` com fallback dourado | error.tsx |

### 🟢 Baixa Prioridade

| # | Item | Entregue em |
|---|---|---|
| 13 | **Smooth Scroll com Lenis** — `lenis` npm, easing customizado, fallback para `scrollIntoView` | smooth-scroll.tsx + navbar + hero |
| 14 | **Scroll Progress Indicator** — barra `h-[2px]` gradiente dourada no topo | scroll-progress.tsx |
| 15 | **Micro-interações nos Cards** — `whileHover={{ y: -4 }}` em services, tech-stack, team, portfolio | components |
| 18 | **Responsivo — Grid de Serviços** — mudou de 4-col + span para 3-col limpo | services.tsx |
| 19 | **Layout do Card de Consultoria** — `lg:col-span-2` removido, todos os 5 cards iguais | services.tsx |

---

## ✅ Concluídos — Rodada 2

### 🔴 Alta Prioridade

| # | Item | Entregue em |
|---|---|---|
| 20 | **Página 404** — `not-found.tsx` com erro 404, mensagem e link "Voltar ao início" | not-found.tsx |
| 21 | **Contador Animado nos Stats** — `AnimatedCounter` usando IntersectionObserver, easing cúbico, exibe "50+", "98%", "5+" | animated-counter.tsx, hero.tsx |

### 🟡 Média Prioridade

| # | Item | Entregue em |
|---|---|---|
| 22 | **Botão Voltar ao Topo** — `ArrowUp` fixo canto inferior direito, aparece após 1.5× viewport, Lenis scrollTo, AnimatePresence | back-to-top.tsx |
| 23 | **Seção FAQ / Processo** — grid 4-col "Descoberta → Arquitetura → Desenvolvimento → Deploy & Suporte", conectores horizontais no desktop | process.tsx |
| 24 | **Tema Claro/Escuro** — `ThemeProvider` + `ThemeToggle`, CSS variables com `[data-theme="light"]`, persistência localStorage | lib/theme.tsx, theme-toggle.tsx, globals.css |
| 25 | **Orbs Responsivas ao Mouse** — canvas rastreia `mousemove`/`touchmove`, orbs próximas ao cursor aumentam opacidade (boost 0→0.15) | golden-orbs-background.tsx |

---

## 📋 Pendentes

### 🔴 Alta Prioridade

**4. Formulário Funcional**
- `onSubmit={(e) => e.preventDefault()}` — não faz nada
- Opções: Formspree (recomendado), Web3Forms, API route Next.js
- **Arquivo:** `src/components/contact.tsx`

**6. Favicon**
- Adicionar `public/favicon.ico`, `public/icon.png`, `public/apple-icon.png`
- Gerar em https://realfavicongenerator.net
- Adicionar `icons` no metadata em `layout.tsx`

### 🟡 Média Prioridade

**12. Page Como Server Component**
- `page.tsx` tem `"use client"` desnecessário
- Criar `src/app/client-page.tsx` com `"use client"`, importar em `page.tsx`

### 🟢 Baixa Prioridade

**16. Imagens Reais no Portfólio**
- Substituir placeholder `ExternalLink` por screenshots com `next/image`
- Adicionar imagens em `public/projects/`

**17. Stagger Refinado nas Animações**
- Delay linear `0.1 * index` → curvas de easing diferentes por fila

---

## 📊 Snapshot Atual

### Rodada 1 (19 itens)
| Prioridade | Total | Concluído | Pendente |
|---|---|---|---|
| 🔴 Alta | 7 | 4 | 2 (formulário, favicon) |
| 🟡 Média | 5 | 4 | 1 (server component) |
| 🟢 Baixa | 7 | 5 | 2 (imagens, stagger) |
| **Total** | **19** | **13** | **5** |

### Rodada 2 (6 itens)
| Prioridade | Total | Concluído |
|---|---|---|
| 🔴 Alta | 2 | 2 |
| 🟡 Média | 4 | 4 |
| **Total** | **6** | **6** |

### Consolidado (25 itens)
| Status | Total |
|---|---|
| ✅ Concluídos | **19** |
| 📋 Pendentes | **6** |

---

## 🧠 Decisões Pendentes

- Qual serviço de formulário usar? (Formspree / Web3Forms / API route)
- Gerar OG image com ferramenta externa ou fazer no Figma?
- Incluir analytics? (Plausible, umami, Google Analytics?)
- Nome real dos devs no team (vs placeholder "Desenvolvedor 2", "Desenvolvedor 3")?
- Projetos reais ou fictícios no portfólio?
