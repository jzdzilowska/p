import Markdown from 'react-markdown'
import favorites from './favorites.md?raw'

export default function Favorites() {
  return (
    <section className="about-copy" aria-label="Favorites">
      <Markdown>{favorites}</Markdown>
    </section>
  )
}
