import { useEffect } from 'react'
import { favorites } from './data'
import { lenis } from './lib/smoothScroll'
import './Favorites.css'

type Item = { img: string; caption: string }

function Column({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="fav-column">
      <h3>{title}</h3>
      <div className="fav-track">
        {items.map((item, i) => (
          <figure className="fav-card" key={i}>
            <img src={item.img} alt={item.caption} loading="lazy" />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function Favorites({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    lenis.stop()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      if (!document.body.classList.contains('about-view-locked')) {
        lenis.start()
      }
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fav-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="fav-glass">
        <div className="fav-header">
          <h2>Favorites</h2>
          <button className="fav-close" onClick={onClose} aria-label="Close">
            Close ✕
          </button>
        </div>
        <div className="fav-columns">
          <Column title="Houses" items={favorites.houses} />
          <Column title="Books" items={favorites.books} />
          <Column title="Paintings" items={favorites.paintings} />
        </div>
      </div>
    </div>
  )
}
