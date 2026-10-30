
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen({
  onComplete,
  soundEnabled,
  playSuccessSound,
}) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2200
    const intervalTime = 25
    const increment = 100 / (duration / intervalTime)

    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + increment, 100)

        if (next >= 100) {
          window.clearInterval(interval)

          window.setTimeout(() => {
            if (soundEnabled) {
              playSuccessSound?.()
            }

            onComplete?.()
          }, 350)
        }

        return next
      })
    }, intervalTime)

    return () => window.clearInterval(interval)
  }, [onComplete, playSuccessSound, soundEnabled])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: {
          duration: 0.7,
          ease: 'easeInOut',
        },
      }}
      className="loading-screen"
    >
      {/* Background Glow */}
      <div className="loading-orb" />

      <div className="relative z-10 flex flex-col items-center">

        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="mb-8"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_60px_rgba(139,92,246,0.25)] backdrop-blur-xl">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="h-10 w-10 rounded-xl border-2 border-violet-400 border-t-transparent"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
          className="text-center text-2xl font-semibold tracking-wide text-white md:text-3xl"
        >
          Welcome to my portfolio
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.7,
          }}
          className="mt-3 text-sm tracking-[0.2em] text-slate-400 uppercase"
        >
          Preparing your experience
        </motion.p>

        {/* Progress */}
        <div className="mt-10 w-64 md:w-80">
          <div className="mb-3 flex justify-between text-xs text-slate-500">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="mt-6 flex items-center gap-2 text-xs text-slate-500"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
          <span>Building something meaningful</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
