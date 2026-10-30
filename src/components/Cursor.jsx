import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const [active, setActive] = useState(false)
  const [ready, setReady] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    if (!finePointer.matches || window.innerWidth < 768) {
      return undefined
    }

    setReady(true)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let hasPointerMoved = false
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let animationFrame = 0

    const onMove = (event) => {
      if (event.pointerType !== 'mouse') return

      targetX = event.clientX
      targetY = event.clientY
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
      document.documentElement.classList.add('has-custom-cursor')

      if (!hasPointerMoved) {
        hasPointerMoved = true
        currentX = targetX
        currentY = targetY
        setHasMoved(true)
      }

      if (prefersReducedMotion) {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
        }
        return
      }

      if (!animationFrame) {
        const followCursor = () => {
          currentX += (targetX - currentX) * 0.18
          currentY += (targetY - currentY) * 0.18

          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
          }

          if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.2) {
            animationFrame = window.requestAnimationFrame(followCursor)
          } else {
            currentX = targetX
            currentY = targetY
            animationFrame = 0
          }
        }

        animationFrame = window.requestAnimationFrame(followCursor)
      }
    }

    const onOver = (event) => {
      const target = event.target
      const hoverTarget = target instanceof Element
        && target.closest('a, button, .tilt-card, .skill-card, .project-card, .contact-card, input, textarea, .sound-toggle')
      setActive(Boolean(hoverTarget))
    }

    const onOut = (event) => {
      if (!event.relatedTarget) setActive(false)
    }

    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerover', onOver)
    document.addEventListener('pointerout', onOut)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      document.removeEventListener('pointerout', onOut)
      document.documentElement.style.removeProperty('--cursor-x')
      document.documentElement.style.removeProperty('--cursor-y')
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!ready) return null

  return (
    <div className={`cursor-shell ${hasMoved ? 'is-visible' : ''}`} aria-hidden="true">
      <div ref={cursorRef} className={`custom-cursor ${active ? 'is-active' : ''}`} />
      <span className="cursor-dot" />
    </div>
  )
}
