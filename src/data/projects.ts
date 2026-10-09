import type { L } from '../i18n/strings'

export interface Project {
  title: string
  meta: L
  tags: string[]
  description: L
  link?: { label: string; href: string }
  note?: L
}

export const projects: Project[] = [
  {
    title: 'NEXUS',
    meta: { pt: 'Pessoal — IA + full stack', en: 'Personal — AI + full stack' },
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Claude', 'OpenAI', 'Gemini', 'React', 'Docker'],
    description: {
      pt: 'Plataforma de automação para YouTube, da descoberta de tendências ao roteiro e à narração. Backend FastAPI assíncrono com PostgreSQL e filas em Redis + Celery, adaptadores para Claude, OpenAI e Gemini, síntese de voz com vários provedores e frontend React + TypeScript com shadcn/ui, tudo orquestrado com Docker Compose e Nginx.',
      en: 'YouTube automation platform that goes from trend discovery to script and voiceover. Async FastAPI backend with PostgreSQL and Redis + Celery job queues, adapters for Claude, OpenAI and Gemini, multi-provider text-to-speech, and a React + TypeScript frontend with shadcn/ui, all orchestrated with Docker Compose and Nginx.',
    },
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/nexus' },
  },
  {
    title: 'Meeting Copilot',
    meta: { pt: 'Pessoal — IA, desktop', en: 'Personal — AI, desktop' },
    tags: ['Python', 'PySide6', 'faster-whisper', 'OpenAI', 'Ollama'],
    description: {
      pt: 'Assistente de reuniões que transcreve microfone e áudio do sistema 100% local com faster-whisper e sugere pontos de fala com um LLM, na nuvem (OpenAI) ou totalmente local (Ollama). Mostra um aviso visível de que há uma IA assistindo a reunião e troca a interface entre português e inglês em tempo real.',
      en: 'Meeting assistant that transcribes microphone and system audio fully locally with faster-whisper and suggests talking points with an LLM, in the cloud (OpenAI) or fully local (Ollama). It shows a visible notice that an AI is assisting the meeting and switches its interface between Portuguese and English on the fly.',
    },
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/Meeting_Copilot' },
  },
  {
    title: 'kof-auth-api',
    meta: { pt: 'Pessoal — segurança', en: 'Personal — security' },
    tags: ['Kof', 'JVM', 'JWT', 'SQLite', 'Bash'],
    description: {
      pt: 'API de autenticação em Kof, linguagem brasileira que compila para JVM, com tokens JWT, rate limit por IP e rotas restritas a admin. Vem com um script que ataca a própria API: na última execução, os 37 ataques foram bloqueados. No caminho, encontrei e documentei bugs na própria linguagem.',
      en: 'Authentication API written in Kof, a Brazilian language that compiles to the JVM, with JWT tokens, per-IP rate limiting and admin-only routes. It ships with a script that attacks the API itself: on the last run, all 37 attacks were blocked. Along the way, I found and documented bugs in the language itself.',
    },
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/kof-auth-api' },
  },
  {
    title: 'Viapiana Store',
    meta: {
      pt: 'Projeto para cliente — e-commerce em produção, 2026',
      en: 'Client project — e-commerce in production, 2026',
    },
    tags: ['FastAPI', 'React 19', 'TypeScript', 'Supabase', 'Docker', 'GitHub Actions'],
    description: {
      pt: 'E-commerce full stack para uma marca artesanal de aromas: API em camadas sobre Supabase/PostgreSQL com JWT, frontend React 19 + TypeScript com SSR (TanStack Start/Router/Query, Tailwind) publicado na Cloudflare Workers, CI/CD com GitHub Actions e revisão de segurança documentada.',
      en: 'Full-stack e-commerce for an artisanal fragrance brand: layered API on Supabase/PostgreSQL with JWT, React 19 + TypeScript SSR frontend (TanStack Start/Router/Query, Tailwind) deployed to Cloudflare Workers, CI/CD with GitHub Actions and a documented security review.',
    },
    note: { pt: 'Projeto de cliente — sem link público', en: 'Client project — no public link' },
  },
  {
    title: 'blacktools',
    meta: { pt: 'Pessoal — segurança, Arch Linux', en: 'Personal — security, Arch Linux' },
    tags: ['Bash', 'BlackArch', 'Pentest'],
    description: {
      pt: 'Coleção das ferramentas do BlackArch organizada por categoria (recon, web, exploração, senhas, wireless, reversing, forense), com instalação por grupo, modo dry-run e guias rápidos com os fluxos típicos de cada área.',
      en: 'The BlackArch toolset organized by category (recon, web, exploitation, passwords, wireless, reversing, forensics), with per-group installation, a dry-run mode and quick-start guides covering the typical workflows of each area.',
    },
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/blacktools' },
  },
  {
    title: 'Controle de Estoque Desktop',
    meta: { pt: 'Pessoal — desktop Windows', en: 'Personal — Windows desktop' },
    tags: ['Python', 'PyQt5', 'SQLite', 'PyInstaller'],
    description: {
      pt: 'Sistema offline de gestão de estoque: cadastro de produtos, controle de entradas/saídas com validação, alertas visuais de estoque mínimo/zerado, exportação CSV e backup do banco. Empacotado como instalador standalone.',
      en: 'Offline inventory management system: product registry, validated stock-in/stock-out tracking, visual low/zero-stock alerts, CSV export and database backup. Packaged as a standalone installer.',
    },
    link: {
      label: 'Source',
      href: 'https://github.com/FernandoJohansen/CRUD-Python-do-Zero---projeto---PDU',
    },
  },
]
