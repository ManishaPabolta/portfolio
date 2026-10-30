import { useEffect, useRef, useState } from 'react'

export function useTilt() {
  const ref = useRef(null)

  const onMove = (event) => {
    const node = ref.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    node.style.setProperty('--rx', `${-y * 8}deg`)
    node.style.setProperty('--ry', `${x * 8}deg`)
  }

  const onLeave = () => {
    if (ref.current) {
      ref.current.style.setProperty('--rx', '0deg')
      ref.current.style.setProperty('--ry', '0deg')
    }
  }

  return { ref, onMove, onLeave }
}

export function useMouseGlow() {
  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return progress
}
