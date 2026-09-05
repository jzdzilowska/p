import { useEffect, useState } from 'react'
import './WorldClock.css'

const CITIES: { label: string; tz: string }[] = [
  { label: 'LONDON', tz: 'Europe/London' },
  { label: 'ZURICH', tz: 'Europe/Zurich' },
  { label: 'NEW YORK', tz: 'America/New_York' },
  { label: 'SAN FRANCISCO', tz: 'America/Los_Angeles' },
]

function timeIn(tz: string) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date())
}

export default function WorldClock() {
  const [, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="world-clock" aria-hidden="true">
      {CITIES.map((c) => (
        <div className="world-clock-row" key={c.tz}>
          <span className="world-clock-city">{c.label}</span>
          <span className="world-clock-time">{timeIn(c.tz)}</span>
        </div>
      ))}
    </div>
  )
}
