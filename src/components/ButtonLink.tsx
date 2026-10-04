import Link from 'next/link'
import type { ReactNode } from 'react'

export function ButtonLink({
  href,
  children,
  variant = 'primary'
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'text'
}) {
  const remote = /^https?:\/\//.test(href)
  const external = remote || href.startsWith('mailto:')
  const className = `button-link button-${variant}`

  if (external) {
    return (
      <a
        href={href}
        className={className}
        {...(remote ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
