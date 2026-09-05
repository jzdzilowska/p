import { useEffect, useState } from 'react'
import './App.css'
import { profile, about, now, experience, education, projects } from './data'
import Favorites from './Favorites'
import LoadingScreen from './LoadingScreen'
import WorldClock from './WorldClock'
import CustomCursor from './CustomCursor'
import AmbientAscii from './AmbientAscii'
import { lenis } from './lib/smoothScroll'

type View = 'about' | 'experience' | 'projects'

const navigation: { id: View; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

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

function AboutView() {
  return (
    <section className="about-copy" aria-label="About">
      {about.map((paragraph, paragraphIndex) => (
        <p key={paragraphIndex}>
          {paragraph.map((segment, segmentIndex) =>
            'href' in segment ? (
              <a
                href={segment.href}
                target="_blank"
                rel="noreferrer"
                key={segmentIndex}
              >
                {segment.text}
              </a>
            ) : (
              segment.text
            ),
          )}
        </p>
      ))}
    </section>
  )
}

function ExperienceView() {
  return (
    <>
      <section className="row">
        <div className="label">Current</div>
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

      <section className="row previous-experience">
        <div className="label">Previously</div>
        <div className="content">
          {experience.map((item) => (
            <Entry
              key={item.company}
              title={`${item.role}, ${item.company}`}
              sub={item.location}
              dates={item.dates}
              bullets={item.bullets}
              stack={item.stack}
            />
          ))}
        </div>
      </section>

      <section className="row">
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
            <div className="section-text education-detail">{education.detail}</div>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectsView() {
  return (
    <section className="row">
      <div className="label">Projects</div>
      <div className="content">
        {projects.map((project) => (
          <Entry
            key={project.name}
            title={project.name}
            sub={project.tagline}
            dates={project.dates}
            bullets={project.bullets}
            stack={project.stack}
          />
        ))}
      </div>
    </section>
  )
}

function App() {
  const [favoritesOpen, setFavoritesOpen] = useState(false)
  const [activeView, setActiveView] = useState<View>('about')

  useEffect(() => {
    const locked = activeView === 'about'
    document.documentElement.classList.toggle('about-view-locked', locked)
    document.body.classList.toggle('about-view-locked', locked)

    if (locked) {
      lenis.stop()
    } else {
      lenis.start()
    }

    return () => {
      document.documentElement.classList.remove('about-view-locked')
      document.body.classList.remove('about-view-locked')
    }
  }, [activeView])

  return (
    <>
      <CustomCursor />
      <LoadingScreen />
      <AmbientAscii />

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
          <div className="portrait-reveal" aria-hidden="true">
            <img src="/portrait.webp" alt="" width="520" height="780" />
          </div>
        </header>

        <nav className="nav" aria-label="Portfolio">
          {navigation.map((item) => (
            <button
              type="button"
              className={`nav-link${activeView === item.id ? ' is-active' : ''}`}
              aria-current={activeView === item.id ? 'page' : undefined}
              onClick={() => setActiveView(item.id)}
              key={item.id}
            >
              {item.label}
            </button>
          ))}
          <button className="nav-link" onClick={() => setFavoritesOpen(true)}>
            Favorites
          </button>
        </nav>

        <main className="view-panel">
          {activeView === 'about' && <AboutView />}
          {activeView === 'experience' && <ExperienceView />}
          {activeView === 'projects' && <ProjectsView />}
        </main>

        <footer className="footer">
          Current as of {new Date().getFullYear()}
        </footer>
      </div>

      <Favorites open={favoritesOpen} onClose={() => setFavoritesOpen(false)} />

      <div className="available-tag">AVAILABLE WORLDWIDE</div>
      <WorldClock />
    </>
  )
}

export default App
