import type { CSSProperties } from 'react'

const style: CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundImage:
    'radial-gradient(var(--border) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
  pointerEvents: 'none',
  zIndex: -1,
}

/** Decorative dotted-grid backdrop, matching the body's global dot pattern for use behind a section. */
export default function DotPattern() {
  return <div aria-hidden style={style} />
}
