export type PremiumPublication = {
  slug: string
  title: string
  description: string
  kind: 'Briefing' | 'Guide' | 'Special report' | 'Author note' | 'Research file'
  url: string
}

/**
 * Future paid digital publications belong here when a real product and purchase
 * destination exist. The homepage renders this collection only when it is non-empty.
 */
export const premiumPublications: PremiumPublication[] = []
