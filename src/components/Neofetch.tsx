import type { L } from '../i18n/strings'
import { useLang } from '../i18n/context'

const ASCII_ARCH = `      /\\
     /  \\
    /\\   \\
   /      \\
  /   ,,   \\
 /   |  |  -\\
/_-''    ''-_\\`

interface InfoRow {
  k: string
  v: string | L
}

const rows: InfoRow[] = [
  { k: 'OS', v: 'Arch Linux x86_64' },
  { k: 'Host', v: { pt: 'Corumbá – MS, Brasil', en: 'Corumbá – MS, Brazil' } },
  { k: 'Shell', v: 'zsh' },
  { k: 'WM', v: 'i3wm' },
  { k: 'Role', v: 'Full Stack Developer · AI Engineer' },
  { k: 'Stack', v: 'Python, FastAPI, React, PostgreSQL' },
  { k: 'AI', v: 'Claude, OpenAI, Gemini, Ollama, Whisper' },
  { k: 'Sec', v: 'Pentest, Nmap, BlackArch' },
  { k: 'Langs', v: { pt: 'PT-BR (nativo), EN (C2)', en: 'PT-BR (native), EN (C2)' } },
]

/** neofetch-style system info card used in the hero terminal window. */
export default function Neofetch() {
  const { t } = useLang()
  return (
    <div className="neofetch">
      <pre className="ascii">{ASCII_ARCH}</pre>
      <div>
        <div className="row">
          <span className="out" style={{ fontWeight: 700 }}>
            fernando@archlinux
          </span>
        </div>
        <div className="rule" />
        {rows.map((row) => (
          <div className="row" key={row.k}>
            <span className="k">{row.k}</span>
            <span className="v">{typeof row.v === 'string' ? row.v : t(row.v)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
