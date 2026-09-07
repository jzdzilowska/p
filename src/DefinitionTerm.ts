import { createElement } from 'react'

type DefinitionTermProps = {
  id: string
  term: string
  definition: string
}

function DefinitionTerm({ id, term, definition }: DefinitionTermProps) {
  const definitionId = `${id}-definition`

  return createElement(
    'span',
    { className: 'definition-term' },
    createElement(
      'button',
      {
        type: 'button',
        className: 'definition-term-trigger',
        'aria-describedby': definitionId,
      },
      term,
    ),
    createElement(
      'span',
      {
        id: definitionId,
        className: 'definition-term-popup',
        role: 'tooltip',
      },
      createElement('em', null, 'n.'),
      ` - ${definition}`,
    ),
  )
}

export default DefinitionTerm
