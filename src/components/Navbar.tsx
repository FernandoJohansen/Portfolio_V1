import NavLink from './NavLink'
import LangToggle from './LangToggle'
import { strings } from '../i18n/strings'
import { useLang } from '../i18n/context'

export default function Navbar() {
  const { t } = useLang()
  return (
    <header className="nameplate">
      <span className="plate-id">
        [fernando<span className="dot">@</span>archlinux]
      </span>
      <div className="nav-right">
        <nav className="navlinks">
          <NavLink href="#projetos">{t(strings.nav.projects)}</NavLink>
          <NavLink href="#formacao">{t(strings.nav.education)}</NavLink>
          <NavLink href="#contato">{t(strings.nav.contact)}</NavLink>
        </nav>
        <LangToggle />
      </div>
    </header>
  )
}
