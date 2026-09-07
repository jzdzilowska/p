import { createElement } from 'react'

type ExperienceEntryProps = {
  company: string
  logo: string
  logoAlt?: string
  logoStyle?: 'contain' | 'portrait'
  role: string
  location?: string
  dates: string
  bullets: string[]
  stack?: string
}

function ExperienceEntry({
  company,
  logo,
  logoAlt,
  logoStyle = 'contain',
  role,
  location,
  dates,
  bullets,
  stack,
}: ExperienceEntryProps) {
  return createElement(
    'article',
    { className: 'experience-item' },
    createElement(
      'div',
      { className: `company-logo company-logo--${logoStyle}` },
      createElement('img', {
        src: logo,
        alt: logoAlt ?? `${company} logo`,
        width: 36,
        height: 36,
      }),
    ),
    createElement(
      'div',
      { className: 'entry' },
      createElement(
        'div',
        { className: 'entry-head' },
        createElement(
          'div',
          null,
          createElement('div', { className: 'entry-title' }, `${role}, ${company}`),
          location && createElement('div', { className: 'entry-sub' }, location),
        ),
        createElement('div', { className: 'entry-date' }, dates),
      ),
      createElement(
        'ul',
        { className: 'bullets' },
        bullets.map((bullet) => createElement('li', { key: bullet }, bullet)),
      ),
      stack && createElement('div', { className: 'stack' }, stack),
    ),
  )
}

export default ExperienceEntry
