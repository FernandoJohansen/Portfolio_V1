export interface EducationEntry {
  course: string
  institution: string
  status: string
  period?: string
  done?: boolean
}

export const education: EducationEntry[] = [
  {
    course: 'Técnico em Tecnologia da Informação',
    institution: 'IFMS',
    period: 'Jun 2023 – Dez 2024',
    status: 'concluído',
    done: true,
  },
  {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'UNIFAEL',
    status: 'em andamento',
    done: false,
  },
  {
    course: 'Bacharelado em Segurança Digital',
    institution: 'UNIFAEL',
    status: 'em andamento',
    done: false,
  },
]
