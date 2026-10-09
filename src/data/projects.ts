export interface Project {
  title: string
  meta: string
  tags: string[]
  description: string
  link?: { label: string; href: string }
  note?: string
}

export const projects: Project[] = [
  {
    title: 'NEXUS',
    meta: 'Pessoal — IA + full stack',
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Claude', 'OpenAI', 'Gemini', 'React', 'Docker'],
    description:
      'Plataforma de automação para YouTube, da descoberta de tendências ao roteiro e à narração. Backend FastAPI assíncrono com PostgreSQL e filas em Redis + Celery, adaptadores para Claude, OpenAI e Gemini, síntese de voz com vários provedores e frontend React + TypeScript com shadcn/ui, tudo orquestrado com Docker Compose e Nginx.',
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/nexus' },
  },
  {
    title: 'Meeting Copilot',
    meta: 'Pessoal — IA, desktop',
    tags: ['Python', 'PySide6', 'faster-whisper', 'OpenAI', 'Ollama'],
    description:
      'Assistente de reuniões que transcreve microfone e áudio do sistema 100% local com faster-whisper e sugere pontos de fala com um LLM, na nuvem (OpenAI) ou totalmente local (Ollama). Mostra um aviso visível de que há uma IA assistindo a reunião e troca a interface entre português e inglês em tempo real.',
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/Meeting_Copilot' },
  },
  {
    title: 'kof-auth-api',
    meta: 'Pessoal — segurança',
    tags: ['Kof', 'JVM', 'JWT', 'SQLite', 'Bash'],
    description:
      'API de autenticação em Kof, linguagem brasileira que compila para JVM, com tokens JWT, rate limit por IP e rotas restritas a admin. Vem com um script que ataca a própria API: na última execução, os 37 ataques foram bloqueados. No caminho, encontrei e documentei bugs na própria linguagem.',
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/kof-auth-api' },
  },
  {
    title: 'Viapiana Store',
    meta: 'Projeto para cliente — e-commerce em produção, 2026',
    tags: ['FastAPI', 'React 19', 'TypeScript', 'Supabase', 'Docker', 'GitHub Actions'],
    description:
      'E-commerce full stack para uma marca artesanal de aromas: API em camadas sobre Supabase/PostgreSQL com JWT, frontend React 19 + TypeScript com SSR (TanStack Start/Router/Query, Tailwind) publicado na Cloudflare Workers, CI/CD com GitHub Actions e revisão de segurança documentada.',
    note: 'Projeto de cliente — sem link público',
  },
  {
    title: 'blacktools',
    meta: 'Pessoal — segurança, Arch Linux',
    tags: ['Bash', 'BlackArch', 'Pentest'],
    description:
      'Coleção das ferramentas do BlackArch organizada por categoria (recon, web, exploração, senhas, wireless, reversing, forense), com instalação por grupo, modo dry-run e guias rápidos com os fluxos típicos de cada área.',
    link: { label: 'Source', href: 'https://github.com/FernandoJohansen/blacktools' },
  },
  {
    title: 'Controle de Estoque Desktop',
    meta: 'Pessoal — desktop Windows',
    tags: ['Python', 'PyQt5', 'SQLite', 'PyInstaller'],
    description:
      'Sistema offline de gestão de estoque: cadastro de produtos, controle de entradas/saídas com validação, alertas visuais de estoque mínimo/zerado, exportação CSV e backup do banco. Empacotado como instalador standalone.',
    link: {
      label: 'Source',
      href: 'https://github.com/FernandoJohansen/CRUD-Python-do-Zero---projeto---PDU',
    },
  },
]
