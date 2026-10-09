import TerminalCommand from './TerminalCommand'
import SkillBadge from './SkillBadge'
import { skills } from '../data/skills'
import { strings } from '../i18n/strings'
import { useLang } from '../i18n/context'

export default function Skills() {
  const { t } = useLang()
  return (
    <section id="skills">
      <TerminalCommand command={t(strings.skills.command)} />
      <div className="section-head">
        <h2>{t(strings.skills.title)}</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}
