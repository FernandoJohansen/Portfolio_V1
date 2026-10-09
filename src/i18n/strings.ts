export type Lang = 'pt' | 'en'

/** A piece of text available in both languages. */
export type L = Record<Lang, string>

/** Interface copy that isn't part of the data files. */
export const strings = {
  nav: {
    projects: { pt: 'projetos', en: 'projects' },
    education: { pt: 'formação', en: 'education' },
    contact: { pt: 'contato', en: 'contact' },
    switchTo: { pt: 'Ver em inglês', en: 'View in Portuguese' },
  },
  hero: {
    greeting: { pt: 'Oi, eu sou o Fernando.', en: "Hi, I'm Fernando." },
    cta: { pt: 'Falar comigo', en: 'Get in touch' },
  },
  skills: {
    command: { pt: 'pacman -Qi skills', en: 'pacman -Qi skills' },
    title: { pt: 'Minhas habilidades', en: 'My skills' },
  },
  projects: {
    command: { pt: 'ls projetos/', en: 'ls projects/' },
    title: { pt: 'Meu trabalho', en: 'My work' },
  },
  education: {
    command: { pt: 'cat formacao.log', en: 'cat education.log' },
    file: { pt: 'formacao.log', en: 'education.log' },
    title: { pt: 'Formação acadêmica', en: 'Education' },
  },
  contact: {
    title: { pt: 'Vamos conversar', en: "Let's talk" },
    subtitle: {
      pt: 'Aberto a oportunidades como AI Engineer e desenvolvedor full stack.',
      en: 'Open to opportunities as an AI Engineer and full-stack developer.',
    },
    cta: { pt: 'Falar comigo', en: 'Get in touch' },
  },
  meta: {
    title: {
      pt: 'Fernando Johansen — Full Stack Developer & AI Engineer',
      en: 'Fernando Johansen — Full Stack Developer & AI Engineer',
    },
  },
} satisfies Record<string, Record<string, L>>
