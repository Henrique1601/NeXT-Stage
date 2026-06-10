# NeXT Stage — Portfolio Site Design Spec

## Visão Geral
Site portfólio da NeXT Stage, empresa de 3 desenvolvedores fullstack. Site one-page com scroll horizontal e snap sections, glassmorphism, orbs animados, paleta escura com dourado/âmbar.

## Stack Técnica
- **Framework:** Next.js 15 + React 19 + TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Fontes:** Geist (corpo) + Instrument Serif (destaques)

## Direção Visual (Variance Engine)
- **Vibe:** Ethereal Glass — Deepest OLED black (#050505), radial mesh gradients with gold/amber orbs, vantablack cards with backdrop-blur-2xl, pure white/10 hairlines
- **Layout:** Horizontal scroll com snap sections + Asymmetrical Bento grids nos cards

## Paleta de Cores
```css
--bg: #050505 (OLED black)
--bg-card: rgba(255,255,255,0.03)
--border: rgba(255,255,255,0.08)
--gold-300: #D4A853
--gold-400: #E8C35A
--gold-500: #F5C542
--gold-600: #B8860B
--text: #FFFFFF
--text-muted: rgba(255,255,255,0.6)
```

## Seções (ordem do scroll horizontal)

### 1. Hero
- Tagline "NeXT Stage" com gradiente dourado
- Subtítulo: "Transformamos ideias em software de alto nível"
- 3 estatísticas: Projetos entregues, Clientes satisfeitos, Anos de mercado
- CTA: "Solicitar Orçamento"
- Framer-motion fade-up staggered

### 2. Serviços
- Grid assimétrico bento de 4-5 cards glassmorphism
- Serviços: Desenvolvimento Web, Aplicativos Mobile, APIs & Backend, UI/UX Design, Consultoria
- Cada card: ícone + título + descrição curta

### 3. Tech Stack
- Grid de tecnologias organizadas por categoria
- Frontend: React, Next.js, TypeScript, Tailwind
- Backend: Node.js, Python, Go
- Mobile: React Native, Flutter
- Database: PostgreSQL, MongoDB, Redis
- DevOps: Docker, AWS, Vercel

### 4. Equipe
- 3 cards com double-bezel para os devs
- Placeholder para fotos, nome, stack, bio curta

### 5. Portfólio
- Cards de projetos com imagem placeholder, descrição, tags de tecnologia

### 6. Contato
- Formulário glassmorphism com nome, email, telefone, mensagem
- Informações de contato (email, WhatsApp)
- CTA "Enviar"

## Efeitos Especiais
- **Background:** Canvas animado com orbs dourados/âmbares flutuando
- **Navbar:** Glassmorphism flutuante com backdrop-blur-2xl, borda dourada sutil, animada
- **Cards:** Double-bezel (outer shell + inner core), backdrop-blur, dots pattern
- **Buttons:** Shiny button com efeito de luz deslizante + button-in-button com ícone
- **Scroll:** Horizontal com snap mandatory, scrollbar escondida
- **Entrada:** Framer-motion fade-up + blur, staggered por seção
- **Navbar mobile:** Hamburger morph com overlay glass e staggered reveal
