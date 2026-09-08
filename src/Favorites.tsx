import Markdown from 'react-markdown'
import favorites from './favorites.md?raw'
import InspirationBoard from './InspirationBoard'
import { splitFavorites } from './favoritesContent'
import './Favorites.css'

export default function Favorites() {
  const { essay, images } = splitFavorites(favorites)

  return (
    <section className="favorites-view" aria-label="Favorites">
      <div className="about-copy">
        <Markdown>{essay}</Markdown>
      </div>
      <InspirationBoard images={images} />
    </section>
  )
}
