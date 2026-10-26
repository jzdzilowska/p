import { createElement, Fragment, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { InspirationImage } from './favoritesContent'

type InspirationBoardProps = {
  images: InspirationImage[]
}

export default function InspirationBoard({ images }: InspirationBoardProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  if (images.length === 0) return null
  const currentIndex = activeIndex % images.length
  const activeImage = images[currentIndex]
  const move = (direction: number) => {
    setActiveIndex(index => (index + direction + images.length) % images.length)
  }

  return createElement(
    'section',
    {
      className: 'inspiration-board',
      'aria-label': 'Inspiration board',
      'aria-roledescription': 'carousel',
      onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault()
          move(event.key === 'ArrowLeft' ? -1 : 1)
        }
      },
    },
    createElement(
      'figure',
      { className: 'inspiration-pin' },
      createElement('img', {
        key: activeImage.src,
        className: 'inspiration-image',
        src: activeImage.src,
        alt: activeImage.alt,
        loading: 'lazy',
        decoding: 'async',
      }),
      images.length > 1
        ? createElement(
            Fragment,
            null,
            createElement('button', {
              type: 'button',
              className: 'inspiration-arrow inspiration-arrow-left',
              'aria-label': 'Previous image',
              onClick: () => move(-1),
            }, createElement('span', { 'aria-hidden': true }, '<')),
            createElement('button', {
              type: 'button',
              className: 'inspiration-arrow inspiration-arrow-right',
              'aria-label': 'Next image',
              onClick: () => move(1),
            }, createElement('span', { 'aria-hidden': true }, '>')),
          )
        : null,
    ),
  )
}
