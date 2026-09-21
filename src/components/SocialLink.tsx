interface SocialLinkProps {
  href: string
  children: string
}

export default function SocialLink({ href, children }: SocialLinkProps) {
  const isMail = href.startsWith('mailto:')
  return (
    <a href={href} target={isMail ? undefined : '_blank'} rel={isMail ? undefined : 'noopener'}>
      {children}
    </a>
  )
}
