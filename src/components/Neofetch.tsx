const ASCII_ARCH = `      /\\
     /  \\
    /\\   \\
   /      \\
  /   ,,   \\
 /   |  |  -\\
/_-''    ''-_\\`

interface InfoRow {
  k: string
  v: string
}

const rows: InfoRow[] = [
  { k: 'OS', v: 'Arch Linux x86_64' },
  { k: 'Host', v: 'Corumbá – MS, Brasil' },
  { k: 'Shell', v: 'zsh' },
  { k: 'WM', v: 'i3wm' },
  { k: 'Role', v: 'Full Stack Developer' },
  { k: 'Stack', v: 'Python, FastAPI, React, PostgreSQL' },
  { k: 'Langs', v: 'PT-BR (nativo), EN (C2)' },
]

/** neofetch-style system info card used in the hero terminal window. */
export default function Neofetch() {
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
            <span className="v">{row.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
