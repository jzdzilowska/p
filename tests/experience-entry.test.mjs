import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ExperienceEntry from '../src/ExperienceEntry.ts'

test('renders a company logo beside an experience entry', () => {
  const html = renderToStaticMarkup(
    createElement(ExperienceEntry, {
      company: 'Amazon',
      logo: '/logos/amazon.svg',
      role: 'Software Development Engineer Intern',
      location: 'Berlin, Germany',
      dates: 'June 2025 - August 2025',
      bullets: ['Built production infrastructure.'],
      stack: 'Java, AWS',
    }),
  )

  assert.match(html, /class="experience-item"/)
  assert.match(html, /src="\/logos\/amazon\.svg"/)
  assert.match(html, /alt="Amazon logo"/)
  assert.match(html, /Software Development Engineer Intern, Amazon/)
})
