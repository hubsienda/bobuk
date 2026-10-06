import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy information for bobmazzei.co.uk, operated by Sienda Ltd.',
  alternates: { canonical: '/privacy-policy/' }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className="page-hero">
        <div className="shell">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="legal-updated">Last updated: 6 October 2026</p>
        </div>
      </header>
      <div className="page-rule" />
      <section className="section-tight">
        <article className="legal-copy">
          <h2>1. Who we are</h2>
          <p>This website, <strong>bobmazzei.co.uk</strong>, is the official website of author Bob Mazzei and is operated by:</p>
          <address>
            <strong>Sienda Ltd</strong><br />
            Third Floor<br />
            207 Regent Street<br />
            London W1B 3HH<br />
            United Kingdom
          </address>
          <p>For the purposes of applicable data protection law, Sienda Ltd is the data controller for personal information processed through this website.</p>
          <p>For privacy enquiries, contact: <a href="mailto:privacy@siendaweblines.com"><strong>privacy@siendaweblines.com</strong></a>.</p>

          <h2>2. Information we may collect</h2>
          <p>We aim to collect as little personal information as reasonably necessary.</p>
          <p>Depending on how you use this website, we may process the following categories of information.</p>
          <h3>Information you provide directly</h3>
          <p>If you contact Bob Mazzei or Sienda Ltd by email, we may receive information including:</p>
          <ul>
            <li>your name;</li>
            <li>your email address;</li>
            <li>the contents of your message;</li>
            <li>any information or attachments you choose to provide.</li>
          </ul>
          <p>Please do not send sensitive personal information unless it is genuinely necessary.</p>
          <h3>Website and analytics information</h3>
          <p>If you consent to Analytics cookies, Google Analytics may collect information about how the website is used, including information such as:</p>
          <ul>
            <li>pages visited;</li>
            <li>approximate location;</li>
            <li>browser and device information;</li>
            <li>referral source;</li>
            <li>session information;</li>
            <li>interactions with the website;</li>
            <li>cookie or similar identifiers used to distinguish users and sessions.</li>
          </ul>
          <p>Google Analytics is not activated for a visitor unless Analytics consent has been granted.</p>
          <h3>Cookie preference information</h3>
          <p>We store a limited record of your cookie preference so that the website can remember whether you accepted or rejected optional cookies.</p>
          <p>This preference is necessary to respect your privacy choice.</p>

          <h2>3. Why we use personal information</h2>
          <h3>Responding to communications</h3>
          <p>If you contact us, we use the information you provide to read, manage and respond to your enquiry.</p>
          <p>Depending on the circumstances, this processing may be necessary for our legitimate interests in communicating with readers, publishers, journalists, professional contacts and other people who contact us, or to take steps at your request before entering into an arrangement with you.</p>
          <h3>Operating and protecting the website</h3>
          <p>Limited technical information may be processed where necessary to operate, secure, maintain and protect the website.</p>
          <p>Our legal basis for this processing is our legitimate interest in providing and protecting a functioning website.</p>
          <h3>Website analytics</h3>
          <p>We use Google Analytics only where you have given consent.</p>
          <p>Analytics helps us understand, in aggregate, matters such as:</p>
          <ul>
            <li>which pages are visited;</li>
            <li>how visitors arrive at the website;</li>
            <li>what devices or browsers are used;</li>
            <li>how visitors navigate through the site.</li>
          </ul>
          <p>The legal basis for optional Analytics processing is your consent.</p>
          <p>You may withdraw that consent at any time through <strong>Cookie Preferences</strong>.</p>
          <h3>Legal obligations</h3>
          <p>We may process or retain information where reasonably necessary to comply with legal obligations or to establish, exercise or defend legal claims.</p>

          <h2>4. Google Analytics</h2>
          <p>This website may use <strong>Google Analytics 4</strong>, provided by Google.</p>
          <p>Google Analytics helps us understand how visitors use the website.</p>
          <p>Analytics is optional.</p>
          <p>Google Analytics is not activated until you have chosen to allow Analytics cookies.</p>
          <p>If you reject Analytics cookies, or make no choice, the website continues to function normally without Google Analytics tracking being activated.</p>
          <p>Google Analytics may process information including website usage, session information, approximate location, device/browser characteristics and identifiers associated with Analytics cookies.</p>
          <p>For more information about Google&apos;s own privacy practices, visitors may consult Google&apos;s privacy information.</p>

          <h2>5. Cookies</h2>
          <p>This website uses:</p>
          <ul>
            <li>strictly necessary technologies required to operate the website and remember privacy choices; and</li>
            <li>optional Analytics cookies, but only after consent.</li>
          </ul>
          <p>Detailed information is available in our <Link href="/cookie-policy/"><strong>Cookie Policy</strong></Link>.</p>
          <p>Visitors can change their choice at any time through <strong>Cookie Preferences</strong>.</p>

          <h2>6. Sharing personal information</h2>
          <p>We do not sell personal information.</p>
          <p>Personal information may be processed by service providers acting on our behalf where reasonably necessary to operate this website and related communications.</p>
          <p>These may include:</p>
          <ul>
            <li>website hosting and infrastructure providers;</li>
            <li>email and communications providers;</li>
            <li>Google, where Google Analytics has been enabled with consent;</li>
            <li>technical service providers;</li>
            <li>professional or legal advisers where necessary.</li>
          </ul>
          <p>We may also disclose information where required by law.</p>
          <p>Service providers should receive only the information reasonably necessary for the service they provide.</p>

          <h2>7. International processing</h2>
          <p>Some technology providers used to operate this website may process information in countries outside the United Kingdom.</p>
          <p>Where applicable data protection law requires safeguards for an international transfer of personal information, we rely on appropriate transfer mechanisms or protections provided by the relevant service provider.</p>

          <h2>8. How long we keep information</h2>
          <p>We do not keep personal information longer than reasonably necessary for the purpose for which it was collected.</p>
          <p>For example:</p>
          <ul>
            <li>correspondence is retained only for as long as reasonably necessary to deal with the communication and maintain appropriate records;</li>
            <li>cookie preferences are retained for a limited period so that the website can remember your choice;</li>
            <li>Analytics information is retained according to the retention settings applied to the Google Analytics property and our need for website statistics;</li>
            <li>information required for legal, regulatory or dispute purposes may be retained for longer where necessary.</li>
          </ul>
          <p>When information is no longer required, it should be deleted or anonymised where appropriate.</p>

          <h2>9. Your rights</h2>
          <p>Depending on the circumstances and applicable data protection law, you may have rights including:</p>
          <ul>
            <li>the right to be informed about the use of your personal information;</li>
            <li>the right to request access to personal information we hold about you;</li>
            <li>the right to request correction of inaccurate or incomplete information;</li>
            <li>the right to request deletion of your information in certain circumstances;</li>
            <li>the right to request restriction of processing in certain circumstances;</li>
            <li>the right to object to certain processing;</li>
            <li>the right to data portability where applicable;</li>
            <li>the right to withdraw consent where processing is based on consent.</li>
          </ul>
          <p>Withdrawing consent does not affect the lawfulness of processing carried out before consent was withdrawn.</p>
          <p>To exercise a privacy right, contact: <a href="mailto:privacy@siendaweblines.com"><strong>privacy@siendaweblines.com</strong></a>.</p>
          <p>We may need to verify your identity before responding to certain requests.</p>

          <h2>10. Complaints</h2>
          <p>If you have concerns about how we handle personal information, please contact us first at: <a href="mailto:privacy@siendaweblines.com"><strong>privacy@siendaweblines.com</strong></a>.</p>
          <p>You also have the right to raise a complaint with the UK Information Commissioner&apos;s Office where applicable.</p>
          <p><a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer">Information Commissioner&apos;s Office</a></p>

          <h2>11. External websites</h2>
          <p>This website contains links to third-party websites, including services such as Amazon and Substack.</p>
          <p>When you follow an external link, that website operates under its own privacy practices and policies.</p>
          <p>Sienda Ltd is not responsible for the privacy practices of third-party websites.</p>

          <h2>12. Children</h2>
          <p>This website is not specifically directed at children and we do not intentionally seek to collect personal information from children through the website.</p>

          <h2>13. Automated decision-making</h2>
          <p>We do not use information collected through this website to make solely automated decisions about individuals that produce legal or similarly significant effects.</p>

          <h2>14. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy when the website, our services, technology or legal requirements change.</p>
          <p>The current version will always be published on this page together with its latest revision date.</p>
        </article>
      </section>
    </>
  )
}
