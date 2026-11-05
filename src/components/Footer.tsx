import Link from 'next/link'
import { CookiePreferencesButton } from '@/components/CookiePreferencesButton'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-identity">
          <p className="footer-name">BOB MAZZEI</p>
          <p className="footer-role">Author · Business Engineer · AI Consultant</p>
          <p className="footer-support">Books, writing, analysis and professional work.</p>
        </div>

        <nav className="footer-nav footer-group" aria-label="Footer navigation">
          <p className="footer-group-title">Explore</p>
          {site.navigation.slice(1).map(item => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer-social footer-group">
          <p className="footer-group-title">Follow</p>
          <a href="https://www.instagram.com/bobmazzei" target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
          <a href="https://www.linkedin.com/in/robertmazzei" target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <div className="footer-top-group">
          <a className="footer-top-button" href="#top" aria-label="Scroll to the top of this page">
            <span aria-hidden="true">↑</span> TOP
          </a>
        </div>

        <nav className="footer-legal" aria-label="Privacy and cookie settings">
          <Link href="/privacy-policy/">Privacy Policy</Link>
          <Link href="/cookie-policy/">Cookie Policy</Link>
          <CookiePreferencesButton />
        </nav>

        <p className="copyright">© {new Date().getFullYear()} Bob Mazzei. All rights reserved.</p>
      </div>
    </footer>
  )
}
