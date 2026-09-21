import TerminalCommand from './TerminalCommand'
import Terminal from './Terminal'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="formacao">
      <TerminalCommand command="cat formacao.log" />
      <div className="section-head">
        <h2>Formação acadêmica</h2>
      </div>

      <Terminal filename="formacao.log">
        {education.map((entry, i) => (
          <div key={entry.course} style={{ marginTop: i === 0 ? 0 : 10 }}>
            <div className="out">
              {entry.course} <span className="muted">— {entry.institution}</span>
            </div>
            <div className="muted">
              {entry.period ? `${entry.period} · ` : ''}
              <span style={entry.done ? { color: 'var(--accent)' } : undefined}>
                {entry.status}
              </span>
            </div>
          </div>
        ))}
      </Terminal>
    </section>
  )
}
