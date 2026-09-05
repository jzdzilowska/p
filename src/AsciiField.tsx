import { useEffect, useRef } from 'react'

// Ramp from empty to dense — mirrors the ASCII-density look of character-art
// backgrounds (sparse dots fading into denser marks).
const RAMP = ' ..::--==++**##'

// Cheap multi-octave "noise" built from a handful of offset sine waves.
// Not true Perlin/simplex, but smooth and organic enough for this — and it's
// zero-dependency, so no extra weight in the bundle.
function fbm(x: number, y: number, t: number) {
  let value = 0
  let amp = 0.55
  let freq = 1
  for (let i = 0; i < 4; i++) {
    value +=
      amp *
      Math.sin(x * freq + t * (0.6 + i * 0.15)) *
      Math.cos(y * freq - t * (0.4 + i * 0.1))
    freq *= 1.85
    amp *= 0.58
  }
  return value // roughly [-1, 1]
}

export default function AsciiField({
  className,
  speed = 0.035,
}: {
  className?: string
  speed?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cell = 10
    let cols = 0
    let rows = 0
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(width / cell)
      rows = Math.ceil(height / cell)
    }

    resize()
    window.addEventListener('resize', resize)

    let raf = 0
    let time = 0
    let lastDraw = 0
    const FRAME_MS = 33 // ~30fps — motion should actually read as moving

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      if (now - lastDraw < FRAME_MS) return
      lastDraw = now
      time += speed

      ctx.clearRect(0, 0, width, height)
      ctx.font = `${cell}px ui-monospace, SFMono-Regular, Consolas, monospace`
      ctx.textBaseline = 'top'

      const cx = cols / 2
      const cy = rows / 2

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const nx = col * 0.09
          const ny = row * 0.09
          const n = fbm(nx, ny, time) // [-1, 1]

          const dx = (col - cx) / cols
          const dy = (row - cy) / rows
          const dist = Math.sqrt(dx * dx + dy * dy)
          const falloff = Math.max(0, 1 - dist * 1.55)

          let v = (n * 0.5 + 0.5) * falloff
          if (v < 0.08) continue

          const idx = Math.min(RAMP.length - 1, Math.floor(v * RAMP.length))
          const ch = RAMP[idx]
          if (ch === ' ') continue

          const alpha = 0.16 + v * 0.34
          ctx.fillStyle = `rgba(30, 30, 30, ${alpha.toFixed(3)})`
          ctx.fillText(ch, col * cell, row * cell)
        }
      }
    }

    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [speed])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
