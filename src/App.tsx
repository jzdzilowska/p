import { useEffect, useRef, useState } from 'react'
import './App.css'
import { profile, about, now, experience, education } from './data'
import Favorites from './Favorites'
import LoadingScreen from './LoadingScreen'
import WorldClock from './WorldClock'
import CustomCursor from './CustomCursor'
import AmbientAscii from './AmbientAscii'
import DefinitionTerm from './DefinitionTerm'
import HoverImage from './HoverImage'
import LoadingDots from './LoadingDots'
import ScrollHome from './ScrollHome'
import { lenis } from './lib/smoothScroll'

type View = 'about' | 'experience' | 'projects' | 'favorites'

const navigation: { id: View; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Side Work' },
  { id: 'favorites', label: 'Favorites' },
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
            ) : 'image' in segment && segment.image !== undefined ? (
              <HoverImage
                label={segment.text}
                src={segment.image}
                key={segmentIndex}
              />
            ) : 'definition' in segment &&
              segment.definition !== undefined &&
              segment.id !== undefined ? (
              <DefinitionTerm
                id={segment.id}
                term={segment.text}
                definition={segment.definition}
                key={segmentIndex}
              />
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
    <section className="about-copy" aria-label="About">
      <p>
        Check the{' '}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>{' '}
        for now. To be attached
        <LoadingDots />
      </p>
    </section>
  )
}

function App() {
  const [activeView, setActiveView] = useState<View>('about')
  const [showScrollHome, setShowScrollHome] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const observer = new IntersectionObserver(([entry]) => {
      setShowScrollHome(
        !entry.isIntersecting && entry.boundingClientRect.top < 0,
      )
    })

    observer.observe(header)
    return () => observer.disconnect()
  }, [])

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
      <ScrollHome
        name={profile.name}
        visible={showScrollHome}
        onActivate={() => {
          const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
          ).matches
          lenis.scrollTo(0, { immediate: reduceMotion })
        }}
      />

      <div className="page">
        <header className="header" id="top" ref={headerRef}>
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
        </nav>

        <main className="view-panel">
          {activeView === 'about' && <AboutView />}
          {activeView === 'experience' && <ExperienceView />}
          {activeView === 'projects' && <ProjectsView />}
          {activeView === 'favorites' && <Favorites />}
        </main>

        <footer className="footer">
          Current as of {new Date().getFullYear()}
        </footer>
      </div>

      <div className="available-tag">AVAILABLE WORLDWIDE</div>
      <WorldClock />
    </>
  )
}

export default App
