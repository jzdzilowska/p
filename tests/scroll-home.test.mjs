import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ScrollHome from '../src/ScrollHome.ts'

test('renders the compact name and an accessible scroll-to-top control', () => {
  const html = renderToStaticMarkup(
    createElement(ScrollHome, {
      name: 'Julia Zdzilowska',
      visible: true,
      onActivate: () => {},
    }),
  )

  assert.match(html, /Julia Zdzilowska/)
  assert.match(html, /aria-label="Scroll to top"/)
  assert.match(html, /class="scroll-home is-visible"/)
  assert.match(html, /aria-hidden="true">↑/)
})

test('keeps the compact header out of keyboard navigation while hidden', () => {
  const html = renderToStaticMarkup(
    createElement(ScrollHome, {
      name: 'Julia Zdzilowska',
      visible: false,
      onActivate: () => {},
    }),
  )

  assert.match(html, /class="scroll-home"/)
  assert.match(html, /tabindex="-1"/)
})
