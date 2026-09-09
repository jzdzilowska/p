import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import DefinitionTerm from '../src/DefinitionTerm.ts'

test('styles definition terms like regular links without a bottom border', async () => {
  const css = await readFile(new URL('../src/App.css', import.meta.url), 'utf8')
  const triggerRule = css.match(/\.definition-term-trigger\s*\{([^}]*)\}/)?.[1]

  assert.ok(triggerRule)
  assert.doesNotMatch(triggerRule, /border-bottom\s*:/)
  assert.match(triggerRule, /text-decoration\s*:\s*underline\s*;/)
  assert.match(triggerRule, /text-underline-offset\s*:\s*2px\s*;/)
  assert.match(triggerRule, /text-decoration-color\s*:\s*var\(--border\)\s*;/)
  assert.match(triggerRule, /color\s*:\s*var\(--link\)\s*;/)
  assert.match(triggerRule, /cursor\s*:\s*pointer\s*;/)
  assert.match(
    css,
    /\.definition-term-trigger:hover\s*\{[^}]*text-decoration-color\s*:\s*var\(--link\)\s*;/s,
  )
})

test('renders a definition term as an accessible tooltip', () => {
  const html = renderToStaticMarkup(
    createElement(DefinitionTerm, {
      id: 'software-romanticism',
      term: 'Software Romanticism',
      definition:
        'the view that software forms part of the human environment, and that its beauty, atmosphere, tactility, coherence, and character therefore influence human experience and wellbeing. Coined by me',
    }),
  )

  assert.match(html, />Software Romanticism</)
  assert.match(html, /aria-describedby="software-romanticism-definition"/)
  assert.match(html, /role="tooltip"/)
  assert.match(html, /<em>n\.<\/em>/)
  assert.match(
    html,
    /the view that software forms part of the human environment, and that its beauty, atmosphere, tactility, coherence, and character therefore influence human experience and wellbeing\. Coined by me/,
  )
})

test('renders Aesthetic Egalitarianism with its own tooltip relationship', () => {
  const html = renderToStaticMarkup(
    createElement(DefinitionTerm, {
      id: 'aesthetic-egalitarianism',
      term: 'Aesthetic Egalitarianism',
      definition:
        'the principle that access to beauty, refinement, and well-designed environments should be distributed equally, not reserved as a privilege of wealth or status.',
    }),
  )

  assert.match(html, />Aesthetic Egalitarianism</)
  assert.match(
    html,
    /aria-describedby="aesthetic-egalitarianism-definition"/,
  )
  assert.match(html, /id="aesthetic-egalitarianism-definition"/)
  assert.match(html, /<em>n\.<\/em>/)
  assert.match(
    html,
    /the principle that access to beauty, refinement, and well-designed environments should be distributed equally, not reserved as a privilege of wealth or status\./,
  )
})
