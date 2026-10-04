'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { site } from '@/data/site'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Bob Mazzei home">
          <span className="brand-name">BOB MAZZEI</span>
          <span className="brand-role">WRITER</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {site.navigation.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(value => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell mobile-nav-inner">
            {site.navigation.map(item => (
              <Link key={item.href} href={item.href} className="mobile-nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
