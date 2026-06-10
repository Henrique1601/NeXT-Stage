# NeXT Stage — Portfólio

**Stack:** Next.js 16.2.9 + React 19.2.4 + Tailwind CSS v4 + TypeScript + Framer Motion  
**Ano:** 2026  
**Time:** 3 devs fullstack

---

## 🎨 Direção Visual

| Propriedade | Valor |
|---|---|
| Fundo | `#050505` (OLED black) |
| Dourado | `#D4A853`, `#E8C35A`, `#F5C542`, `#B8860B` |
| Glassmorphism | `bg-[#050505]/80 backdrop-blur-2xl` + bordas `border-white/[0.06]` |
| Orbs animadas | Canvas radial gradients — 4 orbs douradas flutuando |
| Tipografia | Geist (body) + Instrument Serif (accents) |

**Referências visuais:**
- borderlessdev.com — estrutura geral
- sleek — glassmorphism, bento grids
- motionrecords — orbs animadas, navbar dinâmica

---

## 🧱 Arquitetura de Componentes

```
src/
├── app/
│   ├── globals.css          # Tema Tailwind + CSS variables + keyframes
│   ├── layout.tsx           # Root layout (Geist + Instrument Serif)
│   └── page.tsx             # Página principal (vertical scroll, seções)
│
├── components/
│   ├── golden-orbs-background.tsx   # Canvas com orbs douradas flutuantes (fixed)
│   ├── floating-navbar.tsx          # Navbar glassmorphism com menu mobile animado
│   ├── hero.tsx                     # Hero com gradiente, stats, CTA
│   ├── services.tsx                 # 5 cards de serviço em bento grid
│   ├── tech-stack.tsx               # 6 categorias de tecnologias
│   ├── team.tsx                     # 3 cards de devs com placeholder
│   ├── portfolio.tsx                # 3 cards de projetos com mockup
│   ├── contact.tsx                  # Formulário + info de contato
│   ├── footer.tsx                   # Footer fixo com barra glassmorphism
│   ├── shiny-button.tsx             # Botão dourado com roaming light
│   ├── dot-pattern.tsx              # SVG dot grid decorativo
│   └── section-label.tsx            # Cabeçalho numerado "01. Serviços"
│
└── lib/
    └── utils.ts            # cn() helper (clsx + tailwind-merge)
```

---

## 📜 Seções

### 1. Hero
- Título gradiente "Transformamos ideias em software de alto nível"
- Stats: 50+ projetos, 98% satisfação, 5+ anos
- CTA → scroll para contato

### 2. Serviços
- 5 cards (desenvolvimento web, mobile, APIs, UI/UX, consultoria)
- Layout bento grid (4 + 1 span)

### 3. Tech Stack
- 6 cards: Frontend, Backend, Mobile, Banco de Dados, DevOps, Ferramentas

### 4. Equipe
- 3 devs com placeholder circular, bio, tech tags, links sociais

### 5. Portfólio
- 3 projetos com placeholder de mockup, descrição e tags

### 6. Contato
- Grid 2-col: info (email, whatsapp, localização) + formulário

---

## 🔧 Comandos

```bash
npm run dev      # Servidor dev
npm run build    # Build produção
npm run start    # Servidor produção
npm run lint     # ESLint
```

## 🚧 Observações Técnicas

- **Tailwind v4:** usa `@import "tailwindcss"` e `@theme inline`, não usa `tailwind.config.js`
- **Next.js 16.2.9:** `next lint` não funciona via npx (usa `eslint src/` diretamente)
- **Tipagem:** `motion.button` tem conflitos com `ButtonHTMLAttributes` — componente `ShinyButton` usa interface simplificada sem spread de props HTML
- **Lucide-react v1.17.0:** ícones `Github`, `Linkedin` não existem — usar `GitFork`, `ExternalLink`
