import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

test('separates inspiration images from the favorites essay', async () => {
  const contentModule = await import('../src/favoritesContent.ts').catch(() => null)
  assert.ok(contentModule, 'Favorites content parser is missing')

  const source = [
    'Essay copy.',
    '',
    '<!-- inspiration-board -->',
    '',
    '![Barcelona Pavilion](/favorites/barcelona-pavilion.webp)',
    '',
    '![Concrete interior](/favorites/concrete-interior.jpg)',
  ].join('\n')

  assert.deepEqual(contentModule.splitFavorites(source), {
    essay: 'Essay copy.',
    images: [
      { alt: 'Barcelona Pavilion', src: '/favorites/barcelona-pavilion.webp' },
      { alt: 'Concrete interior', src: '/favorites/concrete-interior.jpg' },
    ],
  })
})

test('renders inspiration images as a lazy-loaded board', async () => {
  const boardModule = await import('../src/InspirationBoard.ts').catch(() => null)
  assert.ok(boardModule, 'Inspiration board component is missing')

  const html = renderToStaticMarkup(
    createElement(boardModule.default, {
      images: [
        { alt: 'Barcelona Pavilion', src: '/favorites/barcelona-pavilion.webp' },
      ],
    }),
  )

  assert.match(html, /class="inspiration-board"/)
  assert.match(html, /aria-label="Inspiration board"/)
  assert.match(html, /class="inspiration-pin"/)
  assert.match(html, /loading="lazy"/)
  assert.match(html, /alt="Barcelona Pavilion"/)
})

test('favorites markdown declares the inspiration board section', async () => {
  const source = await readFile(new URL('../src/favorites.md', import.meta.url), 'utf8')

  assert.match(source, /<!-- inspiration-board -->/)
  assert.match(source, /\/favorites\/barcelona-pavilion\.webp/)
})
