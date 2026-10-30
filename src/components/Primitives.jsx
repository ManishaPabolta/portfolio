import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTilt } from '../hooks/useInteractions'

export function Reveal({ children, className = '', delay = 0, y = 24, amount = 0.15 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedText({ text, className = '' }) {
  return (
    <span className={className}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, delay: index * 0.018, ease: 'easeOut' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  )
}

export function LetterReveal({ text, className = '', soundEnabled = false, playLetterSound, onComplete }) {
  const [visibleCharacters, setVisibleCharacters] = useState(0)

  useEffect(() => {
    if (visibleCharacters >= text.length) {
      onComplete?.()
      return undefined
    }

    const timer = window.setTimeout(() => {
      setVisibleCharacters((current) => current + 1)
      if (soundEnabled) {
        playLetterSound?.(visibleCharacters)
      }
    }, 120)

    return () => window.clearTimeout(timer)
  }, [soundEnabled, onComplete, playLetterSound, text.length, visibleCharacters])

  return (
    <div className={className} aria-label={text}>
      {text.split('').map((letter, index) => {
        const isVisible = index < visibleCharacters
        return (
          <motion.span
            key={`${letter}-${index}`}
            initial={{ opacity: 0, y: 18, filter: 'blur(12px)', scale: 0.85 }}
            animate={
              isVisible
                ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }
                : { opacity: 0, y: 16, filter: 'blur(10px)', scale: 0.92 }
            }
            transition={{ duration: 0.42, ease: 'easeOut' }}
            className="letter-item"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        )
      })}
    </div>
  )
}

export function TypingText({ phrases, className = '', typingSpeed = 90, deletingSpeed = 40, pauseDuration = 1500 }) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex % phrases.length]

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = phrase.slice(0, text.length + 1)
        setText(nextText)

        if (nextText.length === phrase.length) {
          window.setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      } else {
        const nextText = phrase.slice(0, text.length - 1)
        setText(nextText)

        if (nextText.length === 0) {
          setIsDeleting(false)
          setCurrentPhraseIndex((current) => (current + 1) % phrases.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => window.clearTimeout(timeout)
  }, [currentPhraseIndex, deletingSpeed, isDeleting, pauseDuration, phrases, text, typingSpeed])

  return (
    <span className={className}>
      {text}
      <span className="typing-cursor" aria-hidden="true" />
    </span>
  )
}

export function TiltCard({ children, className = '', ...props }) {
  const tilt = useTilt()
  return (
    <div ref={tilt.ref} onPointerMove={tilt.onMove} onPointerLeave={tilt.onLeave} className={`tilt-card ${className}`} {...props}>
      {children}
    </div>
  )
}

export function MagneticButton({ children, href = '#', variant = 'primary', className = '', onClick }) {
  const ref = useRef(null)

  const onMove = (event) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / rect.width
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / rect.height

    ref.current.style.transform = `translate(${offsetX * 12}px, ${offsetY * 12}px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`magnetic-button ${variant === 'secondary' ? 'secondary' : 'primary'} ${className}`}
    >
      {children}
      <ArrowUpRight size={16} />
    </motion.a>
  )
}

export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="heading-title">
          <AnimatedText text={title} />
        </h2>
      </div>
      {children && <p className="heading-copy">{children}</p>}
    </div>
  )
}

export function SkillCard({ skill, index }) {
  const Icon = skill.icon

  return (
    <Reveal delay={index * 0.04}>
      <TiltCard className="skill-card">
        <div className="skill-head">
          <Icon size={20} style={{ color: skill.color }} />
          <span>{String(skill.level).padStart(2, '0')}%</span>
        </div>
        <h3>{skill.name}</h3>
        <div className="progress-track">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.04 }}
            className="progress-fill"
            style={{ background: `linear-gradient(90deg, ${skill.color}, #6d7cff)` }}
          />
        </div>
      </TiltCard>
    </Reveal>
  )
}

export function ProjectCard({ project, index, onSelect }) {
  const Icon = project.icon

  return (
    <Reveal delay={index * 0.08}>
      <TiltCard className="project-card group" onClick={() => onSelect(project)}>
        <div
          className={`project-visual ${project.image ? 'has-image' : ''}`}
          style={{ '--accent': project.accent }}
        >
          {project.image ? (
            <img className="project-preview" src={project.image} alt={`${project.title} preview`} />
          ) : (
            <>
              <div className="project-glow" style={{ background: `radial-gradient(circle at 80% 20%, ${project.accent}, transparent 45%)` }} />
              <Icon size={64} strokeWidth={1} className="project-icon" />
            </>
          )}
          <span className="project-number">{project.number}</span>
        </div>

        <div className="project-body">
          <span className="project-eyebrow">{project.eyebrow}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          <div className="project-meta">
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="project-link"
                >
                  GitHub <ExternalLink size={12} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="project-link highlight"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              )}
              {!project.github && !project.live && (
                <button type="button" onClick={() => onSelect(project)} className="project-link highlight">
                  View details <ArrowUpRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  )
}

export function Timeline({ items }) {
  return (
    <div className="timeline-list">
      {items.map((item, index) => (
        <Reveal key={`${item.company}-${item.date}`} delay={index * 0.1} className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-grid">
            <div className="timeline-date">{item.date}</div>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <div className="timeline-company">{item.company}</div>
              <p>{item.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
