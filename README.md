# GitHub Profile Explorer

Aplicação React + TypeScript para visualizar perfil GitHub, repositórios e favoritos (starred), com filtros e busca.

## Stack utilizada

- **React 19 + Vite**
- **TypeScript**
- **TailwindCSS**
- **Zustand** (estado global)
- **React Query** (cache/fetch assíncrono)
- **React Router DOM** (roteamento)

## Funcionalidades implementadas

- Carregamento dinâmico via API do GitHub
- Carregamento inicial de:
  - dados do usuário
  - repositórios do usuário
- Aba de **Starred** com carregamento sob demanda
- Busca com `Enter` (submit)
- Filtros por tipo e linguagem (dinâmicos, vindos dos dados da API)
- Listagem com layout fiel ao Figma (responsivo)
- Clique no repositório para visualizar mais informações/abrir destino
- **Usuário dinâmico pela URL** (`/:username`)

## Usuário dinâmico via URL

A aplicação usa rota dinâmica para buscar qualquer perfil do GitHub:

- `http://localhost:5173/sailleribeiro`
- `http://localhost:5173/octocat`
- `http://localhost:5173/torvalds`

Em prod:

- `https://profile-github-eight.vercel.app/sailleribeiro`
- `https://profile-github-eight.vercel.app/octocat`
- `https://profile-github-eight.vercel.app/torvalds`

Comportamento:
- `/` redireciona para um usuário padrão
- `/:username` carrega perfil, repositórios e starred daquele usuário

## Arquitetura (resumo)

- `store/github-store.ts`: estado global da aplicação
- `hooks/use-github-*.ts`: integração com API + React Query
- `hooks/use-filtered-repositories.ts`: filtragem centralizada
- `layout/form-container.tsx`: busca + filtros (mobile/desktop)
- `components/*`: renderização de perfil, listas e cards

## Estrutura do projeto (atual)

```text
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   │   └── header-logo-git.png
│   ├── components
│   │   ├── profile
│   │   │   └── profile-content.tsx
│   │   ├── skeleton
│   │   │   ├── form-container-skeleton.tsx
│   │   │   ├── profile-skeleton.tsx
│   │   │   ├── repositories-content-skeleton.tsx
│   │   │   └── user-profile-skeleton.tsx
│   │   ├── ui
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card-repo.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   └── tabs.tsx
│   │   ├── filter-form-repos.tsx
│   │   ├── filter-sheet.tsx
│   │   ├── repositories-content.tsx
│   │   ├── starred-repositories-content.tsx
│   │   └── user-profile.tsx
│   ├── config
│   │   ├── api.ts
│   │   └── env.ts
│   ├── hooks
│   │   ├── use-filtered-repositories.ts
│   │   ├── use-github-repositories.ts
│   │   ├── use-github-starred.ts
│   │   ├── use-github-user.ts
│   │   └── use-repo-filter-options.ts
│   ├── layout
│   │   ├── form-container.tsx
│   │   └── header.tsx
│   ├── lib
│   │   ├── react-query.ts
│   │   └── utils.ts
│   ├── pages
│   │   └── profile.tsx
│   ├── service
│   │   └── github-service.ts
│   ├── store
│   │   └── github-store.ts
│   ├── types
│   │   ├── filters.ts
│   │   └── index.ts
│   ├── utils
│   │   └── filters.ts
│   ├── app.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Como rodar localmente

### Pré-requisitos
- Node.js 20+
- **pnpm** (via Corepack)

### Instalação do pnpm (se necessário)
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Instalação de dependências
```bash
pnpm install
```

### Ambiente
Crie `.env` com:

```env
VITE_API_GITHUB_URL=https://api.github.com
```

### Execução
```bash
pnpm dev
```

### Build
```bash
pnpm build
pnpm preview
```

### Lint
```bash
pnpm lint
```

## Deploy

Aplicação publicada em: **https://profile-github-eight.vercel.app/**

## Desafios encontrados

- Sincronizar React Query (server state) com Zustand (global UI state) sem duplicar responsabilidades
- Tipagem genérica de filtros (`FilterOption<T>`) 
- Evitar duplicação entre listagem de repositórios e starred
- validacao para limite de requisicoes para API rest do github

## Melhorias futuras

- Testes unitários para hooks de filtro e componentes críticos
- Testes de integração (fluxos: busca, troca de tabs, filtros)
- Tratamento refinado de loading/error/empty states
- Acessibilidade adicional (ARIA e navegação por teclado)
- Virtualização de lista para grande volume de repositórios
- Persistência de filtros na URL (query params)

## Boas práticas aplicadas

- DRY na lógica de filtro com hook compartilhado
- Separação de responsabilidades (hooks/store/components)
- Tipagem explícita de domínio
- Componentização e reuso de UI