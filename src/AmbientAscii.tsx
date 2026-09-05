import AsciiField from './AsciiField'
import './AmbientAscii.css'

export default function AmbientAscii() {
  return (
    <div className="ambient-ascii" aria-hidden="true">
      <div className="ambient-ascii__cluster ambient-ascii__cluster--left">
        <AsciiField className="ambient-ascii__canvas" />
      </div>
      <div className="ambient-ascii__cluster ambient-ascii__cluster--right">
        <AsciiField className="ambient-ascii__canvas" />
      </div>
    </div>
  )
}
