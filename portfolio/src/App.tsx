import { useState } from 'react'
import './App.css'
import { profile, now, experience, education, projects } from './data'
import Favorites from './Favorites'
import LoadingScreen from './LoadingScreen'
import WorldClock from './WorldClock'

function Entry({
  title,
  sub,
  dates,
  bullets,
  stack,
}: {
  title: string
  sub?: string
  dates: string
  bullets: string[]
  stack?: string
}) {
  return (
    <div className="entry">
      <div className="entry-head">
        <div>
          <div className="entry-title">{title}</div>
          {sub && <div className="entry-sub">{sub}</div>}
        </div>
        <div className="entry-date">{dates}</div>
      </div>
      <ul className="bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {stack && <div className="stack">{stack}</div>}
    </div>
  )
}

function App() {
  const [favoritesOpen, setFavoritesOpen] = useState(false)

  return (
    <>
      <LoadingScreen />

      <div className="page">
        <header className="header" id="top">
          <h1>{profile.name}</h1>
          <div className="title">{profile.title}</div>
          <div className="links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </header>

        <nav className="nav">
          <a href="#now">Now</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <button className="nav-link" onClick={() => setFavoritesOpen(true)}>
            Favorites
          </button>
        </nav>

        <section className="row" id="now">
          <div className="label">Now</div>
          <div className="content">
            <Entry
              title={`${now.role}, ${now.company}`}
              sub={now.location}
              dates={now.dates}
              bullets={now.bullets}
              stack={now.stack}
            />
          </div>
        </section>

        <section className="row" id="experience">
          <div className="label">Previously</div>
          <div className="content">
            {experience.map((e) => (
              <Entry
                key={e.company}
                title={`${e.role}, ${e.company}`}
                sub={e.location}
                dates={e.dates}
                bullets={e.bullets}
                stack={e.stack}
              />
            ))}
          </div>
        </section>

        <section className="row" id="education">
          <div className="label">Education</div>
          <div className="content">
            <div className="entry">
              <div className="entry-head">
                <div>
                  <div className="entry-title">{education.school}</div>
                  <div className="entry-sub">{education.degree}</div>
                </div>
                <div className="entry-date">{education.dates}</div>
              </div>
              <div className="section-text" style={{ marginTop: 10 }}>
                {education.detail}
              </div>
            </div>
          </div>
        </section>

        <section className="row" id="projects">
          <div className="label">Projects</div>
          <div className="content">
            {projects.map((p) => (
              <Entry
                key={p.name}
                title={p.name}
                sub={p.tagline}
                dates={p.dates}
                bullets={p.bullets}
                stack={p.stack}
              />
            ))}
          </div>
        </section>

        <footer className="footer">
          <a href="#top">{profile.name}</a> · updated {new Date().getFullYear()}
        </footer>
      </div>

      <Favorites open={favoritesOpen} onClose={() => setFavoritesOpen(false)} />

      <div className="available-tag">AVAILABLE WORLDWIDE</div>
      <WorldClock />
    </>
  )
}

export default App
