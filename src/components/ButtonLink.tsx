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
  const primaryStyle = variant === 'primary' ? { color: 'var(--ink)' } : undefined

  if (external) {
    return (
      <a
        href={href}
        className={className}
        style={primaryStyle}
        {...(remote ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} style={primaryStyle}>
      {children}
    </Link>
  )
}
