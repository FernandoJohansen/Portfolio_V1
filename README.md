# Portfolio Modelo Pessoal

Portfólio pessoal de Fernando Johansen — um site inspirado em terminal, com temática Arch Linux e paleta Matrix Code Green.

Arquitetura baseada no [portfolio-v2](https://github.com/LeonardoLopesHonda/portfolio-v2) do Leonardo Honda: React + Vite + TypeScript + Tailwind CSS, organizado em componentes pequenos e reutilizáveis, com o conteúdo separado do visual.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- ESLint (flat config)
- Fonte: [Cascadia Code](https://fonts.google.com/specimen/Cascadia+Code) (a mesma do Windows Terminal/PowerShell)

## Paleta de cores

Baseada no esquema [Matrix Code Green](https://www.schemecolor.com/matrix-code-green.php), definida como variáveis CSS em `src/index.css`:

| Token           | Cor       | Uso                                  |
| --------------- | --------- | ------------------------------------- |
| `--bg`           | `#0D0208` | Fundo (Vampire Black)                 |
| `--border`       | `#003B00` | Bordas e divisórias (Dark Green)      |
| `--accent-dim`   | `#008F11` | Acento secundário (Islam Green)       |
| `--accent`       | `#00FF41` | Acento principal, prompts, links (Erin) |
| `--ink` / `--muted` | tons de verde claro | Texto principal e secundário |

## Estrutura

```
src/
  data/                  # conteúdo — o que muda quando você atualiza o portfólio
    skills.ts            # lista de habilidades (nome, ícone, cores)
    projects.ts          # lista de projetos (título, tags, descrição, link)
    education.ts         # formação acadêmica
  components/
    Navbar.tsx           # cabeçalho fixo com o prompt [fernando@archlinux]
    NavLink.tsx          # link de navegação individual
    Hero.tsx             # seção inicial: avatar, bio, botão de contato
    Neofetch.tsx          # o bloco estilo `neofetch` com o logo ASCII do Arch
    Terminal.tsx          # moldura de janela de terminal (bolinhas + nome do arquivo)
    TerminalCommand.tsx   # linha de prompt usada como cabeçalho de cada seção
    Skills.tsx / SkillBadge.tsx / TechIcon.tsx   # seção e itens de habilidades
    Projects.tsx / ProjectRow.tsx                # seção e itens de projetos
    Education.tsx         # seção de formação acadêmica
    ContactMe.tsx / SocialLink.tsx               # seção e links de contato
    Button.tsx             # botão pill reutilizável (CTA)
    DotPattern.tsx          # fundo pontilhado decorativo
  assets/
    profile.jpg            # sua foto, usada no avatar do Hero
  App.tsx                  # monta todas as seções na ordem final
  main.tsx                 # ponto de entrada do React
  index.css                # paleta de cores, tipografia e estilos do tema terminal
```

### Como atualizar o conteúdo

Você nunca precisa mexer nos componentes para atualizar o site — só nos arquivos em `src/data/`:

- **Novo projeto** → adicione um item em `src/data/projects.ts`.
- **Nova habilidade** → adicione um item em `src/data/skills.ts`.
- **Formação** → edite `src/data/education.ts`.
- **Foto** → substitua `src/assets/profile.jpg`.
- **E-mail/GitHub/LinkedIn** → edite `src/components/ContactMe.tsx`.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build para produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # pré-visualiza o build localmente
npm run lint       # checagem de lint
```

Este projeto já foi validado com `npm run build` e `npm run lint` passando sem erros.

## Deploy no GitHub Pages

O workflow em `.github/workflows/deploy.yml` já está pronto: a cada push na branch `main`, ele builda o projeto e publica automaticamente no GitHub Pages.

1. Suba este projeto para um repositório no GitHub.
2. No repositório, vá em **Settings → Pages** e em "Build and deployment" escolha a origem **GitHub Actions**.
3. Dê um push na branch `main` — o workflow builda e publica sozinho. Acompanhe em **Actions**.
4. Se o repositório **não** se chamar `FernandoJohansen.github.io` (ou seja, o site vai ficar em `usuario.github.io/nome-do-repo/`), adicione a base do caminho em `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/nome-do-repo/',
     plugins: [react(), tailwindcss()],
   })
   ```

## Créditos

Arquitetura de componentes inspirada no [portfolio-v2](https://github.com/LeonardoLopesHonda/portfolio-v2) de Leonardo Honda.
