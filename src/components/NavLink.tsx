interface NavLinkProps {
  href: string
  children: string
}

export default function NavLink({ href, children }: NavLinkProps) {
  return <a href={href}>{children}</a>
}
