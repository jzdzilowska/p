import { useEffect, useState } from 'react'
import AsciiField from './AsciiField'
import { lenis } from './lib/smoothScroll'
import './LoadingScreen.css'

const SHOW_MS = 3500 // how long the loader is fully visible
const FADE_MS = 500 // how long the fade-out transition takes

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    lenis.stop()
    document.body.style.overflow = 'hidden'

    const fadeTimer = setTimeout(() => setFading(true), SHOW_MS)
    const removeTimer = setTimeout(() => {
      setMounted(false)
      document.body.style.overflow = ''
      lenis.start()
    }, SHOW_MS + FADE_MS)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`loading-screen${fading ? ' fading' : ''}`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <AsciiField className="loading-canvas" />
    </div>
  )
}
