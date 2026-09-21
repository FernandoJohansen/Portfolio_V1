import NavLink from './NavLink'

export default function Navbar() {
  return (
    <header className="nameplate">
      <span className="plate-id">
        [fernando<span className="dot">@</span>archlinux]
      </span>
      <nav className="navlinks">
        <NavLink href="#projetos">projetos</NavLink>
        <NavLink href="#formacao">formação</NavLink>
        <NavLink href="#contato">contato</NavLink>
      </nav>
    </header>
  )
}
