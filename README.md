# Indústria Farmacêutica — Perfusão Intravenosa

Site em Next.js 14 (App Router) + Tailwind CSS com páginas: Sobre nós, Organização, Produtos, Tecnologias e Contatos. Todo o conteúdo está em placeholders para serem substituídos conforme os propósitos definidos.

## Como rodar

1. Instalar dependências:

```powershell
npm install
```

2. Rodar o servidor de desenvolvimento:

```powershell
npm run dev
```

3. Abrir no navegador:

```
http://localhost:3000
```

## Estrutura

- `app/` — App Router do Next.js
  - `layout.tsx` — Layout com navegação e rodapé
  - `page.tsx` — Página inicial com links
  - `sobre-nos/` — Missão e valores (placeholders)
  - `organizacao/` — Estrutura e inserção de membros (placeholders)
  - `produtos/` — Dois produtos com discussão estratégica (placeholders)
  - `tecnologias/` — Duas tecnologias estratégicas (placeholders)
  - `contatos/` — Contatos e localizações (placeholders)
- `components/` — Nav, Footer, InfoCard
- `public/` — Ícones/Imagens de placeholder
- `tailwind.config.ts` — Configuração Tailwind
- `postcss.config.js` — PostCSS

## Notas

- Após instalar, os erros de tipos desaparecerão.
- Adicione imagens em `public/icons/` conforme necessário.
