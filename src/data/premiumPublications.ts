export type PremiumPublication = {
  slug: string
  title: string
  description: string
  kind: 'Briefing' | 'Guide' | 'Special report' | 'Author note' | 'Research file'
  url: string
}

/**
 * Paid digital publications with a real purchase destination belong here.
 * The homepage renders this collection only when it is non-empty.
 */
export const premiumPublications: PremiumPublication[] = [
  {
    slug: 'before-you-buy-ai',
    title: 'Before You Buy AI',
    description:
      'The Executive Due-Diligence Kit for evaluating AI proposals, vendor claims, hidden costs, return on investment, operational risk and the evidence required before approving the investment.',
    kind: 'Guide',
    url: 'https://siendamedia.com/b/2rXSb'
  }
]
