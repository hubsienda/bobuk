import { getAllWriting, writingTypeLabel } from '@/lib/writing'
import { site } from '@/data/site'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = await getAllWriting()
  const itemXml = items.map(item => {
    const categories = [
      '<category>' + escapeXml(writingTypeLabel(item.type)) + '</category>',
      ...item.tags.map(tag => '<category>' + escapeXml(tag) + '</category>')
    ].join('\n      ')

    return [
      '    <item>',
      '      <title>' + escapeXml(item.title) + '</title>',
      '      <link>' + site.url + '/writing/' + item.slug + '/</link>',
      '      <guid>' + site.url + '/writing/' + item.slug + '/</guid>',
      '      <description>' + escapeXml(item.description) + '</description>',
      '      ' + categories,
      '      <pubDate>' + new Date(item.date + 'T12:00:00Z').toUTCString() + '</pubDate>',
      '      <author>' + escapeXml(site.name) + '</author>',
      '    </item>'
    ].join('\n')
  }).join('\n')

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    '    <title>' + escapeXml(site.name) + ' — Writing</title>',
    '    <link>' + site.url + '/writing/</link>',
    '    <description>' + escapeXml('Essays, articles, fiction and extracts by Bob Mazzei.') + '</description>',
    '    <language>en-gb</language>',
    itemXml,
    '  </channel>',
    '</rss>'
  ].join('\n')

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  })
}
