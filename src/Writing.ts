import { createElement } from 'react'

export default function Writing() {
  return createElement(
    'section',
    { className: 'about-copy writing-view', 'aria-label': 'Writing' },
    createElement('h2', null, 'Writing'),
    createElement('p', null, 'Coming soon.'),
    createElement(
      'a',
      { className: 'writing-back', href: '/#/favorites' },
      'Back to Getting Personal',
    ),
  )
}
