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

test('shows one inspiration image with labeled slideshow controls', async () => {
  const boardModule = await import('../src/InspirationBoard.ts').catch(() => null)
  assert.ok(boardModule, 'Inspiration board component is missing')

  const html = renderToStaticMarkup(
    createElement(boardModule.default, {
      images: [
        { alt: 'Modernist house overlooking Los Angeles', src: '/favorites/modernist-house-overlook.png' },
        { alt: 'Modernist house interior at night', src: '/favorites/modernist-house-interior.png' },
        { alt: 'Modernist house bedroom overlooking Los Angeles', src: '/favorites/modernist-house-bedroom.png' },
      ],
    }),
  )

  assert.match(html, /class="inspiration-board"/)
  assert.match(html, /aria-label="Inspiration board"/)
  assert.match(html, /class="inspiration-pin"/)
  assert.equal((html.match(/<button/g) ?? []).length, 2)
  assert.match(html, /aria-label="Previous image"/)
  assert.match(html, /aria-label="Next image"/)
  assert.doesNotMatch(html, /inspiration-controls|inspiration-position/)
  assert.doesNotMatch(html, /role="dialog"/)
  assert.equal((html.match(/<img/g) ?? []).length, 1)
  assert.match(html, /alt="Modernist house overlooking Los Angeles"/)
})

test('lays out the inspiration image responsively without horizontal scrolling', async () => {
  const css = await readFile(new URL('../src/Favorites.css', import.meta.url), 'utf8')
  const boardRule = css.match(/\.inspiration-board\s*\{([^}]*)\}/)?.[1]
  const imageRule = css.match(/\.inspiration-pin img\s*\{([^}]*)\}/)?.[1]

  assert.ok(boardRule)
  assert.doesNotMatch(boardRule, /overflow-x\s*:\s*auto/)
  assert.ok(imageRule)
  assert.match(imageRule, /width\s*:\s*100%/)
  assert.match(imageRule, /height\s*:\s*100%/)
  assert.match(imageRule, /object-fit\s*:\s*cover/)
  assert.match(css, /\.inspiration-pin\s*\{[^}]*aspect-ratio\s*:\s*3\s*\/\s*2/s)
})

test('favorites markdown declares the inspiration board section', async () => {
  const source = await readFile(new URL('../src/favorites.md', import.meta.url), 'utf8')
  const images = [...source.matchAll(/!\[[^\]]*\]\([^)]+\)/g)]

  assert.match(source, /<!-- inspiration-board -->/)
  assert.equal(images.length, 3)
  assert.deepEqual(images.map(([image]) => image), [
    '![Modernist house overlooking Los Angeles](/favorites/21.jpg)',
    '![Modernist house interior at night](/favorites/21_2.jpg)',
    '![Modernist house bedroom overlooking Los Angeles](/favorites/21_3.jpg)',
  ])
  assert.doesNotMatch(source, /\/favorites\/modernist-house\.png/)
})
