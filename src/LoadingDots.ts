import { createElement } from 'react'

function LoadingDots() {
  return createElement(
    'span',
    { className: 'loading-dots', role: 'status', 'aria-label': 'Loading' },
    [1, 2, 3].map((dot) =>
      createElement(
        'span',
        { className: 'loading-dot', 'aria-hidden': true, key: dot },
        '.',
      ),
    ),
  )
}

export default LoadingDots
