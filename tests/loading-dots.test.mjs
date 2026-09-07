import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import LoadingDots from '../src/LoadingDots.ts'

test('renders three animated dots as one accessible loading status', () => {
  const html = renderToStaticMarkup(createElement(LoadingDots))

  assert.match(html, /role="status"/)
  assert.match(html, /aria-label="Loading"/)
  assert.equal((html.match(/class="loading-dot"/g) ?? []).length, 3)
  assert.equal((html.match(/aria-hidden="true"/g) ?? []).length, 3)
})
