import type { Metadata } from 'next'
import { ButtonLink } from '@/components/ButtonLink'

export const metadata: Metadata = {
  title: 'Advisory',
  description: 'Independent analysis by Bob Mazzei for difficult business, technology and artificial intelligence decisions.',
  alternates: { canonical: '/advisory/' }
}

export default function AdvisoryPage() {
  return (
    <>
      <header className="page-hero advisory-hero">
        <div className="shell">
          <p className="eyebrow">Advisory</p>
          <h1>Independent analysis for difficult business and technology decisions.</h1>
          <p>Independent judgement, evidence and experience applied to questions where the answer matters more than the presentation.</p>
        </div>
      </header>
      <div className="page-rule" />

      <section className="section-tight">
        <div className="shell advisory-intro">
          <p>
            Bob Mazzei works independently with organisations and decision-makers on focused questions involving technology, artificial intelligence, commercial choices and operating decisions.
          </p>
          <p>
            The aim is not to sell a platform or a predetermined solution. It is to examine the problem, the evidence and the assumptions behind the decision.
          </p>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="shell advisory-areas">
          <div>
            <p className="eyebrow">AI &amp; Technology</p>
            <h2>Assess the technology and the claims around it.</h2>
            <p>Independent assessment of artificial intelligence, automation, software choices, technical proposals and the practical consequences of adopting them.</p>
          </div>
          <div>
            <p className="eyebrow">Business &amp; Decision Analysis</p>
            <h2>Interrogate the assumptions behind the decision.</h2>
            <p>Analysis of commercial problems, projects, operating choices and the evidence on which management decisions depend.</p>
          </div>
          <div>
            <p className="eyebrow">Executive Briefings</p>
            <h2>Turn a difficult question into a usable decision document.</h2>
            <p>Focused research and independent analysis for executives who need a concise view of the evidence, uncertainties, risks and practical choices.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell advisory-detail-grid">
          <div>
            <p className="eyebrow">Selected areas of experience</p>
            <h2>Commercial and technical perspective.</h2>
          </div>
          <div className="advisory-list">
            <p>Technology and software systems.</p>
            <p>Artificial intelligence and automation.</p>
            <p>Business engineering and operating decisions.</p>
            <p>International commerce and commercial analysis.</p>
            <p>Evidence, reasoning and decision quality.</p>
          </div>
        </div>
      </section>

      <section className="section editorial-section">
        <div className="shell advisory-detail-grid">
          <div>
            <p className="eyebrow">How engagements work</p>
            <h2>Start with the question.</h2>
          </div>
          <div className="advisory-copy">
            <p>Engagements are scoped around a defined problem, decision or research question.</p>
            <p>The work may take the form of an independent review, focused analysis, written briefing or decision-oriented research. The scope should remain proportionate to the decision being made.</p>
            <p>If a question is not a good fit, that should be clear before unnecessary work begins.</p>
          </div>
        </div>
      </section>

      <section className="section advisory-contact">
        <div className="shell">
          <p className="eyebrow">Contact</p>
          <h2>Discuss a project.</h2>
          <p>If you have a defined business, technology or AI question, send enough context to make the decision or problem clear.</p>
          <div className="action-group">
            <ButtonLink href="/contact/">Discuss a project</ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
