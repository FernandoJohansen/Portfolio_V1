import type { Project } from '../data/projects'
import { useLang } from '../i18n/context'

export default function ProjectRow({ title, meta, tags, description, link, note }: Project) {
  const { t } = useLang()
  return (
    <div className="proj-row">
      <div className="proj-head">
        <h3>{title}</h3>
      </div>
      <div className="proj-meta">{t(meta)}</div>
      <div className="proj-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="desc">{t(description)}</p>
      {(link || note) && (
        <div className="proj-links">
          {link && (
            <a href={link.href} target="_blank" rel="noopener">
              {link.label}
            </a>
          )}
          {note && <span className="tag-plain">{t(note)}</span>}
        </div>
      )}
    </div>
  )
}
