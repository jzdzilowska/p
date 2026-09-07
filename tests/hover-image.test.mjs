import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import HoverImage from '../src/HoverImage.ts'

test('renders BrownU as a focusable trigger for the graduation image', () => {
  const html = renderToStaticMarkup(
    createElement(HoverImage, {
      label: 'BrownU',
      src: '/grad.PNG',
    }),
  )

  assert.match(html, /<button[^>]*>BrownU<\/button>/)
  assert.match(html, /<img[^>]*src="\/grad\.PNG"/)
  assert.match(html, /aria-hidden="true"/)
})
