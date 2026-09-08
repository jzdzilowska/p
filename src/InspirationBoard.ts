import { createElement } from 'react'
import type { InspirationImage } from './favoritesContent'

type InspirationBoardProps = {
  images: InspirationImage[]
}

export default function InspirationBoard({ images }: InspirationBoardProps) {
  if (images.length === 0) return null

  return createElement(
    'section',
    {
      className: 'inspiration-board',
      'aria-label': 'Inspiration board',
      tabIndex: 0,
      style: { columnCount: Math.min(images.length, 3) },
    },
    images.map((image) =>
      createElement(
        'figure',
        { className: 'inspiration-pin', key: image.src },
        createElement('img', {
          src: image.src,
          alt: image.alt,
          loading: 'lazy',
          decoding: 'async',
        }),
      ),
    ),
  )
}
