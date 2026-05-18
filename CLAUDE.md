@AGENTS.md

# Palma Seguros – Documentação do Projeto

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (configuração via `@theme` em `globals.css`, sem `tailwind.config`)
- **Framer Motion 12** (instalado, disponível para animações)
- Fontes via `next/font/google`: **Maven Pro** (títulos) e **Lato** (corpo)

## Identidade Visual

### Tipografia

| Variável CSS | Classe Tailwind | Uso |
|---|---|---|
| `--font-maven-pro` | `font-maven` | Títulos, headlines, CTAs (Maven Pro) |
| `--font-lato` | `font-sans` | Corpo de texto, parágrafos (Lato) |

### Paleta de Cores

| Classe Tailwind | HEX | Uso |
|---|---|---|
| `palma-blue` | `#363563` | Azul principal – fundos, títulos |
| `palma-blue-medium` | `#3D3F79` | Hover de azul, rodapé |
| `palma-blue-light` | `#4F539A` | Elementos secundários azuis |
| `palma-blue-lighter` | `#6468AE` | Bordas, placeholders |
| `palma-red` | `#ED3237` | Vermelho principal – CTAs, sub-nav |
| `palma-red-medium` | `#F0545A` | Hover de vermelho |
| `palma-red-light` | `#F27177` | Elementos secundários vermelhos |
| `palma-red-lighter` | `#F48D92` | Destaques suaves |

## Estrutura de Arquivos

```
src/app/
├── layout.tsx          # Root layout – fontes, metadata, lang="pt-BR"
├── globals.css         # Tailwind @theme, variáveis de cor e fonte
├── page.tsx            # Página principal (todas as seções em server component)
└── components/
    └── FAQ.tsx         # Accordion FAQ (client component)
```

## Seções da Página (em ordem)

1. **Header** – 2 linhas: navegação com 4 seções + busca / atalhos rápidos
2. **Hero** – Headline principal + CTA "Converse conosco"
3. **Diferenciais** – Chips de diferenciais + link CTA
4. **Produtos** – Cards "Seguros para mim" e "Seguros para minha empresa"
5. **Sobre** – Texto histórico + vídeo manifesto + cards Missão/Visão/Valores
6. **Equipe** – 3 cards de membros (dados a preencher)
7. **Palma & Grupo Exalt** – Chips de destaque + 3 vídeos depoimento
8. **FAQ** – Accordion sanfonado (client component)
9. **Footer** – 3 colunas: institucional, contato, redes sociais

## Convenções

- Seções da página são funções locais em `page.tsx` (server components)
- Interatividade → criar client component separado em `src/app/components/`
- Cores da marca sempre via classes Tailwind (`bg-palma-blue`, `text-palma-red` etc.)
- Títulos sempre com `font-maven font-black` ou `font-maven font-bold`
- Arredondamentos: `rounded-2xl` ou `rounded-3xl` (padrão do projeto)
- Sem modo escuro (dark mode removido intencionalmente)
