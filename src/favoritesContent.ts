export type InspirationImage = {
  alt: string
  src: string
}

const boardMarker = '<!-- inspiration-board -->'
const markdownImage = /!\[([^\]]*)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)/g

export function splitFavorites(source: string): {
  essay: string
  images: InspirationImage[]
} {
  const markerIndex = source.indexOf(boardMarker)

  if (markerIndex === -1) {
    return { essay: source.trim(), images: [] }
  }

  const essay = source.slice(0, markerIndex).trim()
  const boardSource = source.slice(markerIndex + boardMarker.length)
  const images = Array.from(boardSource.matchAll(markdownImage), ([, alt, src]) => ({
    alt,
    src,
  }))

  return { essay, images }
}
