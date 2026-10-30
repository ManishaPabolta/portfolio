import { motion } from 'framer-motion'

const codeSymbols = ['{ }', '</>', 'JS', 'API', 'UI', 'SQL']

export default function Background() {
  return (
    <div className="background-art" aria-hidden="true">
      <div className="grid-layer" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />
      <div className="mouse-glow" />

      {Array.from({ length: 22 }).map((_, index) => (
        <motion.span
          key={`particle-${index}`}
          className="particle"
          style={{
            left: `${(index * 17 + 7) % 100}%`,
            top: `${(index * 23 + 11) % 100}%`,
          }}
          animate={{
            y: [0, -22, 0],
            opacity: [0.12, 0.6, 0.12],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 4.5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.18,
            ease: 'easeInOut',
          }}
        />
      ))}

      {codeSymbols.map((symbol, index) => (
        <motion.div
          key={symbol}
          className="code-float"
          style={{
            left: `${9 + index * 17}%`,
            top: `${18 + (index % 3) * 26}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, index % 2 === 0 ? 8 : -8, 0],
            opacity: [0.24, 0.8, 0.24],
          }}
          transition={{
            duration: 7 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.4,
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  )
}
