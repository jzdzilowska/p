import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Markdown from 'react-markdown'

test('links from Getting Personal to the hidden writing page', async () => {
  const source = await readFile(new URL('../src/favorites.md', import.meta.url), 'utf8')
  const html = renderToStaticMarkup(createElement(Markdown, null, source))

  assert.match(html, /href="\/#\/writing"[^>]*>here<\/a>/)
})

test('renders the writing page with a way back to Getting Personal', async () => {
  const writingModule = await import('../src/Writing.ts').catch(() => null)

  assert.ok(writingModule, 'Writing page component is missing')

  const html = renderToStaticMarkup(createElement(writingModule.default))

  assert.match(html, /<h2>Writing<\/h2>/)
  assert.match(html, /href="\/#\/favorites"/)
})

test('recognizes hidden pages from the URL hash', async () => {
  const routes = await import('../src/routes.ts').catch(() => null)

  assert.ok(routes, 'Hash route parser is missing')
  assert.equal(routes.viewFromHash('#/writing'), 'writing')
  assert.equal(routes.viewFromHash('#/favorites'), 'favorites')
  assert.equal(routes.viewFromHash('#/unknown'), 'about')
})
