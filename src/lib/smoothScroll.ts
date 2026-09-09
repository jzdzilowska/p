import Lenis from 'lenis'

// Respond quickly, then settle into a short, soft glide.
export const lenis = new Lenis({
  smoothWheel: true,
  duration: 0.55,
  easing: (t: number) => 1 - Math.pow(1 - t, 5),
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
