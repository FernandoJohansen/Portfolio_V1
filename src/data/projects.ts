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
    title: 'Viapiana Store',
    meta: 'Projeto para cliente — e-commerce em produção, 2026',
    tags: ['FastAPI', 'React 19', 'TypeScript', 'Supabase', 'Docker', 'GitHub Actions'],
    description:
      'E-commerce full stack para uma marca artesanal de aromas: API em camadas sobre Supabase/PostgreSQL com JWT, frontend React 19 + TypeScript com SSR (TanStack Start/Router/Query, Tailwind) publicado na Cloudflare Workers, CI/CD com GitHub Actions e revisão de segurança documentada.',
    note: 'Projeto de cliente — sem link público',
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
