import TerminalCommand from './TerminalCommand'
import ProjectRow from './ProjectRow'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projetos">
      <TerminalCommand command="ls projetos/" />
      <div className="section-head">
        <h2>Meu trabalho</h2>
      </div>
      {projects.map((project) => (
        <ProjectRow key={project.title} {...project} />
      ))}
    </section>
  )
}
