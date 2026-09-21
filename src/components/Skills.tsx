import TerminalCommand from './TerminalCommand'
import SkillBadge from './SkillBadge'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills">
      <TerminalCommand command="pacman -Qi skills" />
      <div className="section-head">
        <h2>Minhas habilidades</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}
