import TechIcon from './TechIcon'
import type { Skill } from '../data/skills'

export default function SkillBadge({ name, abbr, bg, color }: Skill) {
  return (
    <div className="skill">
      <TechIcon abbr={abbr} bg={bg} color={color} />
      <span className="name">{name}</span>
    </div>
  )
}
