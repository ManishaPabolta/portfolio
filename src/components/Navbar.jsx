import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems, profile } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-18% 0px -50% 0px', threshold: [0.2, 0.45, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <button onClick={() => go('home')} className="brand-button" aria-label="Go to home">
          <span className="brand-mark">M</span>
          <span className="brand-name">manisha<span>.</span></span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={`nav-link ${activeId === id ? 'is-active' : ''}`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="desktop-actions">
          <a href={profile.resumeHref} className="resume-pill">
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`mobile-menu-wrap ${open ? 'is-open' : ''}`}>
        <nav className="mobile-menu glass" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={`mobile-link ${activeId === id ? 'is-active' : ''}`}
            >
              {label}
            </button>
          ))}
          <a href={profile.resumeHref} className="mobile-resume-link">
            Request resume
          </a>
        </nav>
      </div>
    </header>
  )
}
