import type { CSSProperties, ReactNode } from 'react'

interface TerminalProps {
  filename: string
  children: ReactNode
  style?: CSSProperties
}

/** macOS-style terminal window chrome wrapping arbitrary terminal-body content. */
export default function Terminal({ filename, children, style }: TerminalProps) {
  return (
    <div className="term" style={style}>
      <div className="term-bar">
        <span className="tl r" />
        <span className="tl y" />
        <span className="tl g" />
        <span className="fname">{filename}</span>
      </div>
      <div className="term-body">{children}</div>
    </div>
  )
}
