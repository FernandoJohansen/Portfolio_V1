interface TechIconProps {
  abbr: string
  bg: string
  color: string
}

/** Small colored square badge standing in for a technology's logo (e.g. "Py" on yellow for Python). */
export default function TechIcon({ abbr, bg, color }: TechIconProps) {
  return (
    <span className="badge" style={{ background: bg, color }}>
      {abbr}
    </span>
  )
}
