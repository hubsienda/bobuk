import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie information for bobmazzei.co.uk, operated by Sienda Ltd.',
  alternates: { canonical: '/cookie-policy/' }
}

export default function CookiePolicyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1>Cookie Policy</h1>
          <p className="legal-updated">Last updated: 6 October 2026</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight">
        <article className="legal-copy">
          <h2>1. About this policy</h2>
          <p>This Cookie Policy explains how cookies and similar technologies are used on <strong>https://bobmazzei.co.uk/</strong>.</p>
          <p>The website is operated by:</p>
          <address>
            <strong>Sienda Ltd</strong><br />
            Third Floor<br />
            207 Regent Street<br />
            London W1B 3HH<br />
            United Kingdom
          </address>
          <p>Privacy enquiries: <a href="mailto:privacy@siendaweblines.com"><strong>privacy@siendaweblines.com</strong></a>.</p>

          <h2>2. What are cookies?</h2>
          <p>Cookies are small pieces of information that websites can store on a visitor&apos;s device.</p>
          <p>They can be used for purposes including:</p>
          <ul>
            <li>remembering preferences;</li>
            <li>maintaining website functionality;</li>
            <li>measuring website usage.</li>
          </ul>
          <p>Some technologies are necessary for a website to operate or remember privacy choices.</p>
          <p>Others, including Analytics technologies, are optional.</p>

          <h2>3. Cookies used on this website</h2>
          <p>This website uses two categories:</p>
          <ul>
            <li><strong>Necessary</strong></li>
            <li><strong>Analytics</strong></li>
          </ul>
          <p>There are currently no advertising or marketing cookie categories.</p>

          <h2>4. Necessary technologies</h2>
          <p>Necessary technologies are required for the website to function correctly or to remember choices you have made.</p>
          <p>These cannot be disabled through the cookie preferences panel where they are genuinely necessary.</p>
          <div className="legal-cookie-list">
            <div className="legal-cookie-item">
              <h3>bobmazzei_cookie_consent</h3>
              <p><strong>Purpose:</strong> Stores the visitor&apos;s cookie/privacy preference.</p>
              <p><strong>Duration:</strong> 6 months.</p>
              <p><strong>Type:</strong> First-party · Strictly necessary.</p>
            </div>
          </div>

          <h2>5. Analytics cookies</h2>
          <p>We use Google Analytics to understand how visitors use the website.</p>
          <p>Google Analytics is optional and does not run until the visitor explicitly gives Analytics consent.</p>
          <div className="legal-cookie-list">
            <div className="legal-cookie-item">
              <h3>_ga</h3>
              <p><strong>Provider:</strong> Google Analytics.</p>
              <p><strong>Purpose:</strong> Used to distinguish users.</p>
              <p><strong>Default duration:</strong> up to 2 years.</p>
              <p><strong>Category:</strong> Analytics.</p>
            </div>
            <div className="legal-cookie-item">
              <h3>_ga_&lt;container-id&gt;</h3>
              <p><strong>Provider:</strong> Google Analytics.</p>
              <p><strong>Purpose:</strong> Used to maintain session state.</p>
              <p><strong>Default duration:</strong> up to 2 years.</p>
              <p><strong>Category:</strong> Analytics.</p>
            </div>
          </div>
          <p>The actual <code>&lt;container-id&gt;</code> varies according to the site&apos;s Google Analytics configuration.</p>
          <p>Browser restrictions or configuration may result in shorter durations.</p>

          <h2>6. Google Analytics information</h2>
          <p>When Analytics is enabled, Google Analytics may process information such as:</p>
          <ul>
            <li>number of users;</li>
            <li>session statistics;</li>
            <li>approximate location;</li>
            <li>browser information;</li>
            <li>device information;</li>
            <li>pages visited;</li>
            <li>interactions with the website.</li>
          </ul>
          <p>Google Analytics remains disabled where Analytics consent has not been given.</p>

          <h2>7. Your choice</h2>
          <p>On your first visit, the website presents cookie choices. You can:</p>
          <ul>
            <li><strong>Accept All</strong> — enables Analytics;</li>
            <li><strong>Reject Non-essential</strong> — keeps Analytics disabled;</li>
            <li><strong>Preferences</strong> — allows you to choose whether Analytics is enabled.</li>
          </ul>
          <p>Necessary technologies remain active where required to operate the website or remember your preference.</p>

          <h2>8. Changing your mind</h2>
          <p>You can change or withdraw your Analytics consent at any time.</p>
          <p>A persistent <strong>Cookie Preferences</strong> control is available in the website footer and reopens the preferences panel.</p>
          <p>If Analytics was previously enabled and you later disable it:</p>
          <ul>
            <li>future Google Analytics tracking stops;</li>
            <li>Analytics consent changes to denied for this website;</li>
            <li>first-party Google Analytics cookies belonging to this site are removed where technically possible.</li>
          </ul>

          <h2>9. Browser controls</h2>
          <p>Most browsers also provide controls that allow users to inspect, block or delete cookies.</p>
          <p>Browser controls operate separately from this website&apos;s own privacy preferences.</p>
          <p>Blocking all browser storage may affect some website functionality.</p>

          <h2>10. Changes to this Cookie Policy</h2>
          <p>We may update this policy when technologies used by the website, cookies, providers or legal or regulatory requirements change.</p>
          <p>The current version and revision date will always appear on this page.</p>
          <p>For questions contact: <a href="mailto:privacy@siendaweblines.com"><strong>privacy@siendaweblines.com</strong></a>.</p>
        </article>
      </section>
    </>
  )
}
