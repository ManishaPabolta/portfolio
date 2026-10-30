import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function useSoundManager() {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('portfolio-sound') === 'enabled'
  })
  const contextRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio-sound', soundEnabled ? 'enabled' : 'disabled')
    }
  }, [soundEnabled])

  const ensureAudioContext = () => {
    if (typeof window === 'undefined') return null
    const AudioCtor = window.AudioContext || window.webkitAudioContext
    if (!AudioCtor) return null
    if (!contextRef.current) contextRef.current = new AudioCtor()
    if (contextRef.current.state === 'suspended') contextRef.current.resume()
    return contextRef.current
  }

  const playTone = ({ frequency = 420, duration = 0.06, type = 'triangle', volume = 0.02, glide = 0 }) => {
    if (!soundEnabled) return
    const ctx = ensureAudioContext()
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.type = type
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime)
    if (glide) {
      oscillator.frequency.exponentialRampToValueAtTime(Math.max(60, frequency + glide), ctx.currentTime + duration)
    }

    gainNode.gain.setValueAtTime(0.0001, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration)

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)
    oscillator.start()
    oscillator.stop(ctx.currentTime + duration)
  }

  const playLetterSound = (index = 0) => {
    playTone({ frequency: 240 + index * 20, duration: 0.045, type: 'triangle', volume: 0.022, glide: 18 })
  }

  const playSuccessSound = () => {
    playTone({ frequency: 420, duration: 0.08, type: 'sine', volume: 0.025, glide: 90 })
    setTimeout(() => playTone({ frequency: 620, duration: 0.1, type: 'sine', volume: 0.028, glide: 80 }), 90)
  }

  const playButtonSound = () => {
    playTone({ frequency: 580, duration: 0.04, type: 'square', volume: 0.015, glide: 30 })
  }

  return {
    soundEnabled,
    setSoundEnabled,
    playLetterSound,
    playSuccessSound,
    playButtonSound,
  }
}

export function SoundToggle({ soundEnabled, setSoundEnabled, className = '' }) {
  const toggle = () => {
    const nextState = !soundEnabled
    if (nextState) {
      const ctx = typeof window !== 'undefined' ? (window.AudioContext || window.webkitAudioContext) : null
      if (ctx) {
        const audioContext = new ctx()
        if (audioContext.state === 'suspended') audioContext.resume()
      }
    }
    setSoundEnabled(nextState)
  }

  return (
    <button
      type="button"
      aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
      onClick={toggle}
      className={`sound-toggle ${className}`}
    >
      {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
      <span>{soundEnabled ? 'Sound on' : 'Enable sound'}</span>
    </button>
  )
}
