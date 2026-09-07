import { createElement } from 'react'

type HoverImageProps = {
  label: string
  src: string
}

function HoverImage({ label, src }: HoverImageProps) {
  return createElement(
    'span',
    { className: 'hover-image' },
    createElement(
      'button',
      { type: 'button', className: 'hover-image-trigger' },
      label,
    ),
    createElement(
      'span',
      { className: 'hover-image-reveal', 'aria-hidden': true },
      createElement('img', {
        src,
        alt: '',
        width: 3512,
        height: 4677,
      }),
    ),
  )
}

export default HoverImage
