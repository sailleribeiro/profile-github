# GitHub Profile Explorer

Aplicação React + TypeScript para visualizar perfil GitHub, repositórios e favoritos (starred), com filtros e busca.

## Stack utilizada

- **React + Vite**
- **TypeScript**
- **TailwindCSS**
- **Zustand** (estado global)
- **React Query** (cache/fetch assíncrono)

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

## Arquitetura (resumo)

- `store/github-store.ts`: estado global da aplicação
- `hooks/use-github-*.ts`: integração com API + React Query
- `hooks/use-filtered-repositories.ts`: filtragem centralizada
- `layout/form-container.tsx`: busca + filtros (mobile/desktop)
- `components/*`: renderização de perfil, listas e cards

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
Crie `.env` (se necessário, conforme `src/config/env.ts`), por exemplo:

```env
VITE_GITHUB_API_URL=https://api.github.com
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

Aplicação publicada em: **[https://profile-github-eight.vercel.app/]**


## Desafios encontrados

- Sincronizar React Query (server state) com Zustand (global UI state) sem duplicar responsabilidades.
- Manter o layout pixel-perfect no mobile com filtros sobrepostos ao input.
- Tipagem genérica de filtros (`FilterOption<T>`) sem usar type assertions desnecessárias.
- Evitar duplicação entre listagem de repositórios e starred.

## Melhorias futuras

- Testes unitários para hooks de filtro e componentes críticos.
- Testes de integração (fluxos: busca, troca de tabs, filtros).
- Tratamento refinado de loading/error/empty states.
- Acessibilidade adicional (ARIA e navegação por teclado em todos os controles).
- Virtualização de lista para grande volume de repositórios.
- Persistência de filtros na URL (query params).

## Boas práticas aplicadas

- DRY na lógica de filtro com hook compartilhado
- Separação de responsabilidades (hooks/store/components)
- Tipagem explícita de domínio
- Componentização e reuso de UI