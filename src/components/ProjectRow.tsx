import type { Project } from '../data/projects'

export default function ProjectRow({ title, meta, tags, description, link, note }: Project) {
  return (
    <div className="proj-row">
      <div className="proj-head">
        <h3>{title}</h3>
      </div>
      <div className="proj-meta">{meta}</div>
      <div className="proj-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="desc">{description}</p>
      {(link || note) && (
        <div className="proj-links">
          {link && (
            <a href={link.href} target="_blank" rel="noopener">
              {link.label}
            </a>
          )}
          {note && <span className="tag-plain">{note}</span>}
        </div>
      )}
    </div>
  )
}
