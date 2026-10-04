import Link from 'next/link'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <p className="footer-name">Bob Mazzei</p>
          <p className="footer-role">Writer</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {site.navigation.slice(1).map(item => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="copyright">© {new Date().getFullYear()} Bob Mazzei. All rights reserved.</p>
      </div>
    </footer>
  )
}
