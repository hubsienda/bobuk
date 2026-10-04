import type { MetadataRoute } from 'next'
import { getAllWriting } from '@/lib/writing'
import { site } from '@/data/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    '',
    '/books/',
    '/books/declans-lost-race/',
    '/books/the-ghost-of-highgate/',
    '/writing/',
    '/about/',
    '/contact/'
  ]
  const writing = await getAllWriting()

  return [
    ...staticRoutes.map(route => ({ url: `${site.url}${route}`, lastModified: new Date() })),
    ...writing.map(item => ({ url: `${site.url}/writing/${item.slug}/`, lastModified: new Date(`${item.date}T12:00:00Z`) }))
  ]
}
