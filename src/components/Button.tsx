import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <a className="cta" href={href}>
      {children}
    </a>
  )
}
