import assert from 'node:assert/strict'
import test from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import DefinitionTerm from '../src/DefinitionTerm.ts'

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
