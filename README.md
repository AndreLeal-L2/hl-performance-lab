# HL Performance Lab

One-Page de alta performance com estética cinematográfica high-end para a HL Performance Lab.

## Características

- **Estética Cinematográfica**: Film grain, blurry blobs roxos e glassmorphism
- **Animações Premium**: Framer Motion com reveal, parallax e hover effects
- **Performance Otimizada**: Build estático otimizado para carregamento rápido
- **Design Responsivo**: Experiência imersiva em todos os dispositivos

## Tecnologias

- Next.js 12
- React 17
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Seções

1. **Hero**: Título gradiente "Resultados de Leão, Constância de Pantera" com parallax
2. **Logos**: Placeholders elegantes para marcas parceiras
3. **Sobre**: Diferenciais com glassmorphism e parallax
4. **Planos**: Cards de preços com efeitos visuais premium
5. **Depoimentos**: Histórias de sucesso de atletas
6. **Footer**: CTA final e links

## Efeitos Visuais

- **Film Grain**: Ruído sutil sobreposto ao background #030303
- **Blurry Blobs**: Manchas de luz roxa (#8A2BE2) para profundidade 3D
- **Glassmorphism**: Cards translúcidos com backdrop-blur
- **Gradient Text**: Títulos com gradiente animado
- **WhatsApp Pulse**: Botão com efeito de pulsação suave

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

O build estático é gerado na pasta `dist/`.

## Estrutura de Pastas

```
/
├── components/          # Componentes React
│   ├── BlurryBlobs.tsx
│   ├── GlassCard.tsx
│   ├── Hero.tsx
│   ├── PlansSection.tsx
│   └── ...
├── pages/              # Páginas Next.js
│   ├── _app.tsx
│   ├── index.tsx
│   └── globals.css
├── public/             # Assets estáticos
├── dist/               # Build de produção
├── tailwind.config.ts  # Config Tailwind
└── next.config.js      # Config Next.js
```

## Cores

- **Background**: #030303
- **Primária**: #8A2BE2 (roxo vibrante)
- **Glow**: #A855F7 (roxo claro)
- **Texto**: #ffffff
- **Texto Secundário**: rgba(255, 255, 255, 0.6)

## Fontes

- **Display**: Syne (títulos, peso bold)
- **Body**: Inter (corpo, espaçamento elegante)

## Contato

WhatsApp integrado com animação de pulsação para conversão de leads.

---

© 2024 HL Performance Lab. Todos os direitos reservados.
