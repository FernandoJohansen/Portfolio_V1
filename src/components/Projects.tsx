import TerminalCommand from './TerminalCommand'
import ProjectRow from './ProjectRow'
import { projects } from '../data/projects'
import { strings } from '../i18n/strings'
import { useLang } from '../i18n/context'

export default function Projects() {
  const { t } = useLang()
  return (
    <section id="projetos">
      <TerminalCommand command={t(strings.projects.command)} />
      <div className="section-head">
        <h2>{t(strings.projects.title)}</h2>
      </div>
      {projects.map((project) => (
        <ProjectRow key={project.title} {...project} />
      ))}
    </section>
  )
}
