import Lenis from 'lenis'

// Whole-page smooth scroll with just a touch of ease — not a heavy lag.
// Higher lerp = the page catches up to the wheel faster.
export const lenis = new Lenis({
  duration: 1.0,
  easing: (t: number) => 1 - Math.pow(1 - t, 3),
  smoothWheel: true,
  lerp: 0.15,
  wheelMultiplier: 1,
})

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
