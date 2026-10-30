
import { ArrowUp, Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

import Background from './components/Background'
import Cursor from './components/Cursor'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import { SoundToggle, useSoundManager } from './components/SoundManager'

import { useScrollProgress } from './hooks/useInteractions'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function App() {
  const progress = useScrollProgress()

  const {
    soundEnabled,
    setSoundEnabled,
    playLetterSound,
    playSuccessSound,
    playButtonSound,
  } = useSoundManager()

  const [showLoading, setShowLoading] = useState(() => {
    if (typeof window === 'undefined') {
      return true
    }

    return window.sessionStorage.getItem('portfolio-loaded') !== 'true'
  })

  const [showBackToTop, setShowBackToTop] = useState(false)

  // =====================================================
  // POINTER RIPPLE EFFECT
  // =====================================================

  useEffect(() => {
    const ripple = (event) => {
      const element = document.createElement('span')

      element.className = 'ripple'

      element.style.left = `${event.clientX}px`
      element.style.top = `${event.clientY}px`

      document.body.appendChild(element)

      window.setTimeout(() => {
        element.remove()
      }, 650)
    }

    window.addEventListener('pointerdown', ripple)

    return () => {
      window.removeEventListener('pointerdown', ripple)
    }
  }, [])

  // =====================================================
  // BACK TO TOP VISIBILITY
  // =====================================================

  useEffect(() => {
    const updateBackToTop = () => {
      setShowBackToTop(window.scrollY > 600)
    }

    updateBackToTop()

    window.addEventListener('scroll', updateBackToTop, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', updateBackToTop)
    }
  }, [])

  // =====================================================
  // SAVE LOADING STATE
  // =====================================================

  useEffect(() => {
    if (!showLoading && typeof window !== 'undefined') {
      window.sessionStorage.setItem('portfolio-loaded', 'true')
    }
  }, [showLoading])

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="app-shell min-h-screen bg-[#070b16] text-slate-100">
      {/* Loading Screen */}
      {showLoading && (
        <LoadingScreen
          soundEnabled={soundEnabled}
          playSuccessSound={playSuccessSound}
          onComplete={() => setShowLoading(false)}
        />
      )}

      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,137,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),transparent_32%)]" />

        <div className="absolute -left-20 top-16 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-[130px]" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      </div>

      {/* Global Background */}
      <Background />
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero
          soundEnabled={soundEnabled}
          playLetterSound={playLetterSound}
          playSuccessSound={playSuccessSound}
          playButtonSound={playButtonSound}
        />

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer-shell relative z-20">
        <div className="container footer-inner">
          <span>
            © 2026 Manisha Pabolta. Built with{' '}
            <Heart
              size={12}
              className="inline text-violet-400"
            />{' '}
            and curiosity.
          </span>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="back-top"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </footer>

      {/* Floating Back To Top */}
      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        className={`back-to-top ${
          showBackToTop ? 'is-visible' : ''
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      {/* Sound Toggle */}
      <SoundToggle
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        className="fixed bottom-5 right-5 z-40"
      />
    </div>
  )
}
