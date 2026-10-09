import type { L } from '../i18n/strings'

export interface EducationEntry {
  course: L
  institution: string
  status: L
  period?: L
  done?: boolean
}

const inProgress: L = { pt: 'em andamento', en: 'in progress' }

export const education: EducationEntry[] = [
  {
    course: {
      pt: 'Técnico em Tecnologia da Informação',
      en: 'Information Technology Technician',
    },
    institution: 'IFMS',
    period: { pt: 'Jun 2023 – Dez 2024', en: 'Jun 2023 – Dec 2024' },
    status: { pt: 'concluído', en: 'completed' },
    done: true,
  },
  {
    course: {
      pt: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree in Systems Analysis and Development',
    },
    institution: 'UNIFAEL',
    status: inProgress,
    done: false,
  },
  {
    course: {
      pt: 'Bacharelado em Segurança Digital',
      en: "Bachelor's Degree in Digital Security",
    },
    institution: 'UNIFAEL',
    status: inProgress,
    done: false,
  },
]
