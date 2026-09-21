interface TerminalCommandProps {
  command: string
}

/** Prompt-style command line used as a section header, e.g. "[fernando@archlinux ~]❯ ls projetos/" */
export default function TerminalCommand({ command }: TerminalCommandProps) {
  return (
    <div className="prompt-line">
      <span className="sym">[fernando@archlinux ~]❯</span>
      <span>{command}</span>
      <span className="caret" />
    </div>
  )
}
