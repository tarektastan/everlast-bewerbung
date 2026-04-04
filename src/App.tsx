import { useEffect, useRef, useState } from 'react'
import './index.css'
import bildUrl from './assets/Bild.jpg'

const skills = [
  {
    icon: '⚡',
    name: 'KI-Tools & Modelle',
    desc: 'Tägliche Arbeit mit Claude, ChatGPT und Gemini — nicht als Nutzer, sondern als jemand, der versteht, wie diese Systeme funktionieren und wie man sie sinnvoll in echte Prozesse bringt.',
  },
  {
    icon: '🔁',
    name: 'Automatisierung mit n8n',
    desc: 'Eigene Automatisierungs-Workflows mit n8n gebaut: API-Verbindungen, Trigger-Logik, datengetriebene Abläufe. Ich weiß, wie manuelle Prozesse in automatisierte überführt werden.',
  },
  {
    icon: '🧠',
    name: 'Produktdenken',
    desc: 'Studium Produktmanagement an der HfWU: Ich denke in Nutzerproblemen, Lösungsdesign und messbarer Wirkung — nicht in Features. Das macht den Unterschied bei KI-Implementierungen.',
  },
  {
    icon: '🗣',
    name: 'Technische Kommunikation',
    desc: 'Komplexe KI-Konzepte verständlich erklären — für technische Teams genauso wie für Kunden, die noch ganz am Anfang stehen.',
  },
  {
    icon: '🚀',
    name: 'Schnelle Einarbeitung',
    desc: 'Neue Tools, neue Systeme, neue Kontexte: Ich brauche keine langen Einführungen. Ich lese, teste, verstehe — und fange an zu arbeiten.',
  },
  {
    icon: '🤝',
    name: 'Teamarbeit',
    desc: 'Ich arbeite am liebsten in Teams, in denen Ideen direkt diskutiert und getestet werden. Kein Silodenken — gemeinsames Lösen realer Probleme.',
  },
]

function useScrollFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useTypewriter(text: string, delay = 900) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    let i = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, 55)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])
  return { displayed, done }
}

function useNavScroll() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return scrolled
}

export default function App() {
  useScrollFade()
  const navScrolled = useNavScroll()
  const { displayed, done } = useTypewriter('sie ist mein Alltag.')

  return (
    <>
      {/* Nav */}
      <nav className={`nav${navScrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-logo">Tarek<span>.</span></div>
          <a href="#kontakt" className="nav-cta">Kontakt aufnehmen</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero">
        <div className="hero-glow" />
        <div className="container hero-layout">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              Pflichtpraktikum · 6 Monate · Everlast Consulting
            </div>
            <h1 className="hero-title">
              KI ist nicht<br />
              meine Zukunft —<br />
              <em>{displayed}<span className={`cursor${done ? ' cursor-hide' : ''}`}>|</span></em>
            </h1>
            <p className="hero-sub">
              Ich bin Tarek Tastan, Produktmanagement-Student an der HfWU. Für mein Pflichtpraktikum bewerbe ich mich bewusst bei Everlast — denn hier ist das Umfeld, in dem ich wirklich etwas bewegen kann.
            </p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn-primary">
                Gespräch starten
                <ArrowIcon />
              </a>
              <a href="#warum" className="btn-secondary">Mehr erfahren</a>
            </div>
          </div>
          <HeroPhoto />
        </div>
        <div className="scroll-indicator">
          <a href="#warum" aria-label="Nach unten scrollen">
            <ScrollArrow />
          </a>
        </div>
      </section>

      {/* Warum Everlast */}
      <section id="warum" className="section-dark">
        <div className="container fade-up">
          <span className="label">Motivation</span>
          <h2 className="section-title">Warum Everlast — und warum jetzt.</h2>
          <div className="section-body">
            <p>
              Viele beschäftigen sich aktuell mit KI. Spannend wird es aber erst dann, wenn daraus echte Systeme, sinnvolle Automatisierungen und konkrete Ergebnisse für Unternehmen entstehen. Genau deshalb finde ich Everlast interessant.
            </p>
            <p>
              Ich beschäftige mich nicht nur oberflächlich mit KI, sondern setze mich aktiv mit Tools, Workflows, Automatisierung und praktischen Einsatzmöglichkeiten auseinander. Mich reizt vor allem die Schnittstelle aus Technologie, Struktur und echter Umsetzung — also genau dort, wo KI im Unternehmensalltag wirklich relevant wird.
            </p>
            <p>
              Mein Praxissemester ziehe ich bewusst vor, weil ich im Anschluss ein Auslandssemester in Hanoi, Vietnam plane. Das heißt: Ich bin jetzt gezielt auf der Suche nach einem Umfeld, in dem ich in 6 Monaten viel lernen, schnell Verantwortung übernehmen und echten Mehrwert leisten kann.
            </p>
          </div>
          <div className="quote-box">
            <strong>Was ich mitbringe, das ihr braucht:</strong> Ich denke produktgetrieben, kommuniziere technische Konzepte klar — für technische Teams genauso wie für Kunden am Anfang ihrer KI-Reise. Das ist keine Selbstbeschreibung — das ist der Grund, warum ich diese Website mit Claude Code gebaut habe, statt eine Word-Vorlage auszufüllen.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="container fade-up">
          <span className="label">Kompetenzen</span>
          <h2 className="section-title">Was ich konkret mitbringe.</h2>
          <p className="section-body">Keine Liste von Soft Skills. Nur das, was tatsächlich relevant ist.</p>
          <div className="skills-grid">
            {skills.map((s) => (
              <SkillCard key={s.name} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber" className="section-dark">
        <div className="container fade-up">
          <span className="label">Über mich</span>
          <h2 className="section-title">Wer ich bin — jenseits des Lebenslaufs.</h2>
          <div className="section-body">
            <p>
              Ich sitze selten still. Sport gehört fest zu meinem Alltag — Laufen, Gym, am liebsten draußen. Wenn ich nicht am Rechner bin, bin ich vermutlich in der Küche: Ich koche gerne, probiere neue Rezepte aus und esse noch lieber mit anderen zusammen.
            </p>
            <p>
              Ich gehe schnell auf Menschen zu, bin neugierig auf Geschichten und fühle mich in neuen Umgebungen schnell wohl. Neue Situationen machen mir keine Angst — sie machen mich neugierig. Das gilt für fremde Städte genauso wie für Gespräche mit Menschen, die ich gerade erst kennengelernt habe.
            </p>
          </div>
          <div className="chips">
            <span className="chip"><span className="chip-icon">📍</span>Geislingen an der Steige</span>
            <span className="chip"><span className="chip-icon">🎓</span>Produktmanagement, HfWU</span>
            <span className="chip"><span className="chip-icon">📅</span>21 Jahre</span>
            <span className="chip"><span className="chip-icon">🌏</span>Auslandssemester Hanoi, Vietnam</span>
            <span className="chip"><span className="chip-icon">🕐</span>6 Monate Pflichtpraktikum</span>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt">
        <div className="container fade-up">
          <span className="label">Kontakt</span>
          <h2 className="section-title">Bereit für das Gespräch.</h2>
          <p className="section-body">
            Kein langes Motivationsschreiben, kein Formular. Schreibt mir einfach — ich antworte schnell.
          </p>
          <div className="contact-links">
            <a href="mailto:tarektastan66@icloud.com" className="btn-primary">
              <MailIcon />
              E-Mail schreiben
            </a>
            <a
              href="https://www.linkedin.com/in/tarek-tastan-37333638a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p className="footer-note">
            Diese Website wurde vollständig mit{' '}
            <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer">
              Claude Code
            </a>{' '}
            erstellt — als bewusste Entscheidung, nicht als Zufall.
          </p>
        </div>
      </footer>
    </>
  )
}

function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.03)`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <div
      className="hero-photo-wrap"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={bildUrl} alt="Tarek Tastan" className="hero-photo" />
    </div>
  )
}

function SkillCard({ s }: { s: (typeof skills)[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    card.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div className="skill-card" ref={ref} onMouseMove={handleMouseMove}>
      <span className="skill-icon">{s.icon}</span>
      <div className="skill-name">{s.name}</div>
      <div className="skill-desc">{s.desc}</div>
    </div>
  )
}

function ScrollArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M1 3.5A1.5 1.5 0 012.5 2h10A1.5 1.5 0 0114 3.5v8a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 11.5v-8zm1.5-.5a.5.5 0 00-.5.5l5.5 4 5.5-4a.5.5 0 00-.5-.5h-10zm10 1.72l-4.84 3.51a.5.5 0 01-.58 0L2 4.72V11.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V4.72z" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M2 1a1 1 0 100 2 1 1 0 000-2zM1 4.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9zm4 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5V5c.48-.62 1.27-1 2.25-1C11.32 4 13 5.4 13 8v5.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V8.25C11 7 10.35 6 9.25 6S7.5 7 7.5 8.25V13.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-9z" fill="currentColor" />
    </svg>
  )
}
