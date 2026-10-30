import { motion } from 'framer-motion'
import { ArrowDown, Code2, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { LetterReveal, MagneticButton, TypingText } from '../components/Primitives'
import { profile } from '../data'

export default function Hero({ soundEnabled, playLetterSound, playSuccessSound, playButtonSound }) {
  return (
    <section id="home" className="hero-shell relative overflow-hidden">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-violet-300 backdrop-blur-md"
          >
            <span className="h-px w-8 bg-violet-400" />
            HELLO, I&apos;M
          </motion.div>

          <LetterReveal
            text="MANISHA"
            className="hero-name"
            soundEnabled={soundEnabled}
            playLetterSound={playLetterSound}
            onComplete={() => {
              if (soundEnabled) playSuccessSound?.()
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-4 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 shadow-[0_0_40px_rgba(124,137,255,0.12)] backdrop-blur-sm"
          >
            <h2 className="m-0 text-2xl font-semibold tracking-[-0.06em] text-white md:text-4xl">
              Full Stack Developer
            </h2>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-slate-300 md:text-base">
              3rd Year BCA Student
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="hero-description max-w-xl text-base leading-8 text-slate-300"
          >
            I design and build thoughtful digital products where clean interfaces meet reliable systems.
            I enjoy bringing ideas from concept to working products with strong attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="cta-row"
          >
            <MagneticButton href="#projects" onClick={() => playButtonSound?.()}>View projects</MagneticButton>
            <MagneticButton href="#contact" variant="secondary" onClick={() => playButtonSound?.()}>Let&apos;s talk</MagneticButton>
            <a href={profile.resumeHref} className="resume-link">
              <Download size={16} /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35 }}
            className="meta-row mt-6"
          >
            <span>
              <MapPin size={14} /> India · Open to opportunities
            </span>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
            className="typing-wrap"
          >
            <TypingText
              phrases={['I AM MANISHA', 'I BUILD WEB EXPERIENCES', 'I LOVE CLEAN UI', 'I CREATE FULL STACK APPLICATIONS']}
              className="typing-text"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="hero-visual"
        >
          <div className="relative z-20 rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_40px_120px_rgba(15,23,42,0.7)] backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-200">
              <span className="flex items-center gap-2"><span className="status-dot" /> Available for projects</span>
            </div>
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] border border-violet-400/30 bg-[radial-gradient(circle_at_center,_rgba(124,137,255,0.45),_rgba(16,24,40,0.9)_62%)] text-5xl font-bold text-white shadow-[0_0_50px_rgba(124,137,255,0.35)]">
              M
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{profile.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-slate-300">{profile.role}</p>
            </div>
          </div>

          <div className="code-window glass relative z-20 mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
            <div className="code-window-header">
              <div className="traffic-lights">
                <i />
                <i />
                <i />
              </div>
              <span>portfolio.tsx</span>
            </div>
            <div className="code-window-body">
              <div>
                <span className="token-keyword">const</span> <span className="token-variable">developer</span> = {'{'}
              </div>
              <div className="indent">
                <span className="token-muted">name:</span> <span className="token-string">'Manisha Pabolta'</span>,
              </div>
              <div className="indent">
                <span className="token-muted">focus:</span> <span className="token-string">'full stack'</span>,
              </div>
              <div className="indent">
                <span className="token-muted">mindset:</span> <span className="token-string">'always curious'</span>,
              </div>
              <div className="indent">
                <span className="token-muted">ships:</span> <span className="token-bool">true</span>
              </div>
              <div>{'}'}</div>
              <div className="token-comment">// turning ideas into usable interfaces</div>
            </div>
          </div>

          <div className="floating-badge badge-one">
            <Code2 size={14} /> React · Node
          </div>
          <div className="floating-badge badge-two">
            Building thoughtful digital experiences
          </div>
          <div className="scroll-cue">
            <ArrowDown size={18} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
