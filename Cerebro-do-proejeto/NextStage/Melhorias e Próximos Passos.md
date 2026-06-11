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

---

## 📋 Pendentes — Rodada 3 (Auditoria Geral)

### 🔴 Alta Prioridade

| # | Item | Área | Arquivo(s) | Detalhes |
|---|---|---|---|---|
| 26 | **Content-Security-Policy + Security Headers** | Segurança | `next.config.ts`, `middleware.ts` | Sem CSP o site é vulnerável a XSS; sem `nosniff`, browsers antigos podem fazer MIME sniffing. Criar `middleware.ts` ou configurar `headers()` no `next.config.ts` |
| 27 | **Corrigir contraste `text-white/40`** | Acessibilidade | hero.tsx, services.tsx, team.tsx, portfolio.tsx, contact.tsx | ~4.0:1 — falha WCAG AA (mínimo 4.5:1 para texto normal). Subir para `text-white/50` ou ajustar cor do card |
| 28 | **iOS zoom em inputs (font-size 14px)** | Responsivo | `contact.tsx` | iOS Safari放大 inputs com `font-size < 16px`. Mudar para `text-base` (16px) nos inputs |
| 29 | **Form sem `required` + validação visual** | UX | `contact.tsx` | Nenhum campo tem `required`, `pattern` ou feedback de erro. Se JS falhar, form não valida nada |

### 🟡 Média Prioridade

| # | Item | Área | Arquivo(s) | Detalhes |
|---|---|---|---|---|
| 30 | **Extrair padrão de Card para componente reutilizável** | Código | services.tsx, tech-stack.tsx, team.tsx, portfolio.tsx, contact.tsx | ~80 linhas de CSS de card (gradient border, p-[1px], dot pattern, hover lift) duplicadas em 5 arquivos |
| 31 | **Focus trap no menu mobile** | Acessibilidade | `floating-navbar.tsx` | Ao abrir o hambúrguer, foco não é preso dentro do painel — teclado pode tabear para trás do overlay |
| 32 | **Lenis em React Context em vez de window** | Arquitetura | smooth-scroll.tsx, hero.tsx, navbar.tsx, back-to-top.tsx | `(window as unknown as { lenis: ... })` quebra SSR e não é testável. Extrair para um `LenisContext` |
| 33 | **Canvas orbs com `aria-hidden="true"`** | Acessibilidade | `golden-orbs-background.tsx` | Screen reader pode anunciar canvas vazio |
| 34 | **Canvas orbs pausar com `prefers-reduced-motion: reduce`** | Acessibilidade | `golden-orbs-background.tsx` | `requestAnimationFrame` roda mesmo com reduced-motion ativo |
| 35 | **Touch targets mínimos (44×44px)** | Responsivo | `theme-toggle.tsx`, `team.tsx` | Botão de tema e links sociais têm 32×32px — abaixo do mínimo WCAG |
| 36 | **`theme-color` meta tag** | SEO | `layout.tsx` | Browser chrome (barra de endereço mobile) não acompanha o tema escuro/claro |
| 37 | **localStorage sem try/catch** | Código | `lib/theme.tsx` | `getItem`/`setItem` pode lançar erro em modo anônimo ou quota excedida |
| 38 | **Suspense boundaries** | UX | Em todos os componentes | Nenhum `React.Suspense` existe — qualquer async data loading futuro não terá fallback |
| 39 | **Error boundaries por seção** | UX | Só `error.tsx` global | Um crash numa seção derruba a página inteira |
| 40 | **Scroll progress sem ARIA** | Acessibilidade | `scroll-progress.tsx` | Falta `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` |

### 🟢 Baixa Prioridade

| # | Item | Área | Arquivo(s) | Detalhes |
|---|---|---|---|---|
| 41 | **Número duplicado no Process (#03 igual ao Team)** | Código | `process.tsx:44` | `SectionLabel number="03"` aparece tanto no Process quanto no Team — deveria ser "05" |
| 42 | **SVGs boilerplate da Vercel no `public/`** | Build | `public/next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg` | Lixo no deploy, remover |
| 43 | **Email hardcoded em 2 lugares** | Código | `layout.tsx:74`, `contact.tsx:44` | Extrair para constante compartilhada |
| 44 | **Dados inline nas seções** | Arquitetura | services.tsx, tech-stack.tsx, team.tsx, portfolio.tsx, process.tsx | Dados (serviços, stack, time, projetos) embutidos nos componentes. Extrair para `src/data/` |
| 45 | **Organizar `components/` em subpastas** | Código | `src/components/` (15 files flat) | Criar `sections/`, `ui/`, `layout/` |
| 46 | **404 e error pages sem metadata própria** | SEO | `not-found.tsx`, `error.tsx` | Usam o title global "NeXT Stage | Desenvolvimento Fullstack" — enganoso para páginas de erro |
| 47 | **Número mágico: threshold do back-to-top** | Código | `back-to-top.tsx:10` | `window.innerHeight * 1.5` deveria ser constante nomeada |
| 48 | **Número mágico: duração do contador** | Código | `animated-counter.tsx:26` | 1500ms hardcoded |
| 49 | **Placeholder phone no contato** | UX | `contact.tsx:53` | `(11) 99999-9999` é número falso exibido a todos visitantes |
| 50 | **preconnect Google Fonts redundante** | Performance | `layout.tsx:59-60` | `next/font/google` já serve fontes do `/_next/static/media/`, não precisa preconnect para Google |
| 51 | **Sem `loading.tsx`** | UX | `src/app/loading.tsx` | Não há rota de loading para navegação inicial |

---

## 🧠 Decisões Pendentes

- Qual serviço de formulário usar? (Formspree / Web3Forms / API route)
- Gerar OG image com ferramenta externa ou fazer no Figma?
- Incluir analytics? (Plausible, umami, Google Analytics?)
- Nome real dos devs no team (vs placeholder "Desenvolvedor 2", "Desenvolvedor 3")?
- Projetos reais ou fictícios no portfólio?
