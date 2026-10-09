import TerminalCommand from './TerminalCommand'
import Terminal from './Terminal'
import { education } from '../data/education'
import { strings } from '../i18n/strings'
import { useLang } from '../i18n/context'

export default function Education() {
  const { t } = useLang()
  return (
    <section id="formacao">
      <TerminalCommand command={t(strings.education.command)} />
      <div className="section-head">
        <h2>{t(strings.education.title)}</h2>
      </div>

      <Terminal filename={t(strings.education.file)}>
        {education.map((entry, i) => (
          <div key={entry.course.pt} style={{ marginTop: i === 0 ? 0 : 10 }}>
            <div className="out">
              {t(entry.course)} <span className="muted">— {entry.institution}</span>
            </div>
            <div className="muted">
              {entry.period ? `${t(entry.period)} · ` : ''}
              <span style={entry.done ? { color: 'var(--accent)' } : undefined}>
                {t(entry.status)}
              </span>
            </div>
          </div>
        ))}
      </Terminal>
    </section>
  )
}
