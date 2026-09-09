import { createElement } from 'react'
import type { InspirationImage } from './favoritesContent'

type InspirationBoardProps = {
  images: InspirationImage[]
}

export default function InspirationBoard({ images }: InspirationBoardProps) {
  if (images.length === 0) return null
  const [primaryImage, leftImage, rightImage] = images

  return createElement(
    'section',
    {
      className: 'inspiration-board',
      'aria-label': 'Inspiration board',
    },
    createElement(
      'figure',
      { className: 'inspiration-pin', tabIndex: leftImage ? 0 : undefined },
      leftImage
        ? createElement('span', {
            className: 'inspiration-hover-zone inspiration-hover-zone-left',
            'aria-hidden': 'true',
          })
        : null,
      rightImage
        ? createElement('span', {
            className: 'inspiration-hover-zone inspiration-hover-zone-right',
            'aria-hidden': 'true',
          })
        : null,
      createElement('img', {
        className: 'inspiration-image inspiration-image-primary',
        src: primaryImage.src,
        alt: primaryImage.alt,
        loading: 'lazy',
        decoding: 'async',
      }),
      leftImage
        ? createElement('img', {
            className: 'inspiration-image inspiration-image-left',
            src: leftImage.src,
            alt: leftImage.alt,
            loading: 'lazy',
            decoding: 'async',
          })
        : null,
      rightImage
        ? createElement('img', {
            className: 'inspiration-image inspiration-image-right',
            src: rightImage.src,
            alt: rightImage.alt,
            loading: 'lazy',
            decoding: 'async',
          })
        : null,
    ),
  )
}
