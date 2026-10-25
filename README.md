# front-end-admin-portfolio

Painel administrativo do portfólio **lanecodes.dev**, de Kailane Sousa (Fireframe | Experiências Responsivas). É aqui que se gerencia todo o conteúdo do site: projetos, blog, perfil e crachá, agenda, trajetória, certificados, serviços e mensagens.

| Repositório                                                                | Papel                         |
| -------------------------------------------------------------------------- | ----------------------------- |
| [back-end-portfolio](https://github.com/DevLaneSousa/back-end-portfolio)   | API, banco e contrato OpenAPI |
| [front-end-portfolio](https://github.com/DevLaneSousa/front-end-portfolio) | Site público em Next.js       |
| **front-end-admin-portfolio** (este)                                       | Painel em Vue + Quasar        |

## Stack

Vue 3 · Quasar 2 · Vite · TypeScript · Pinia · Vue Router · Axios · Tiptap · openapi-typescript

## Rodando localmente

Requisitos: Node 22+, pnpm 10+ e a API rodando ([back-end-portfolio](https://github.com/DevLaneSousa/back-end-portfolio)).

```bash
pnpm install
cp .env.example .env.local
pnpm dev                     # http://localhost:5173
```

O login usa o `ADMIN_EMAIL` e o `ADMIN_PASSWORD` definidos no `.env` da API antes do seed.

## Tipos da API

Os tipos em `src/api/schema.d.ts` são gerados a partir do `openapi.json` do back-end. Não edite esse arquivo à mão.

```bash
pnpm api:types
```

O script usa `../back-end-portfolio/openapi.json` se os repositórios estiverem lado a lado. Se não estiverem, baixa a versão da `main` no GitHub. Os nomes usados nas telas (`ProjectInput`, `PostRow`, `Message`...) ficam em `src/api/index.ts`.

## Telas

| Rota                                           | Tela                                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `/login`                                       | Login                                                                                                        |
| `/`                                            | Visão geral com contadores                                                                                   |
| `/projetos`, `/projetos/novo`, `/projetos/:id` | Lista ordenável e editor com abas (dados, case, mídias por dispositivo, SEO)                                 |
| `/blog`, `/blog/novo`, `/blog/:id`             | Lista e editor Tiptap com galeria, evento vinculado, agendamento e SEO                                       |
| `/perfil`                                      | Perfil e prévia do crachá                                                                                    |
| `/mensagens`                                   | Caixa de entrada do formulário de contato                                                                    |
| `/conteudo/:recurso`                           | CRUD genérico de serviços, processo, tecnologias, categorias, trajetória, agenda, certificados, redes e tags |

Os conteúdos simples são descritos em `src/config/resources.ts`. Um novo tipo de conteúdo é uma entrada nesse arquivo.

## Sessão

O token de acesso fica só em memória. O refresh token vem em cookie httpOnly da API, e um 401 dispara um único `POST /auth/refresh` antes de repetir a requisição.

## Deploy

Vercel ou Netlify, em `painel.lanecodes.dev`, como SPA (todas as rotas apontando para `index.html`). Variáveis: `VITE_API_URL` e `VITE_SITE_URL`. A API precisa ter `ADMIN_URL` igual ao endereço do painel.
