import { createElement } from 'react'

function ScrollHome({
  name,
  visible,
  onActivate,
}: {
  name: string
  visible: boolean
  onActivate: () => void
}) {
  return createElement(
    'div',
    {
      className: `scroll-home${visible ? ' is-visible' : ''}`,
      'aria-hidden': !visible,
    },
    createElement('span', { className: 'scroll-home-name' }, name),
    createElement(
      'button',
      {
        type: 'button',
        className: 'scroll-home-arrow',
        onClick: onActivate,
        tabIndex: visible ? 0 : -1,
        'aria-label': 'Scroll to top',
      },
      createElement('span', { 'aria-hidden': true }, '↑'),
    ),
  )
}

export default ScrollHome
