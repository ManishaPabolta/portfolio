import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading, TiltCard } from '../components/Primitives'

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="container">
        <SectionHeading eyebrow="01 / about" title="Curious by nature. Precise by practice.">
          I care about the details that make products feel inevitable: clear language, considered motion and dependable foundations.
        </SectionHeading>

        <div className="about-grid">
          <Reveal>
            <TiltCard className="about-card">
              <div className="about-card-inner">
                <div className="about-topline">
                  <span className="soft-pill">A little about me</span>
                  <Sparkles size={18} className="text-electric" />
                </div>

                <div className="about-avatar">
                  <span>MP</span>
                </div>

                <p className="about-highlight">
                  Building with empathy, curiosity and a bias for shipping.
                </p>

                <div className="status-badge">
                  <span className="status-dot" />
                  Currently building polished, practical experiences.
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="about-side-grid">
              <TiltCard className="glass about-story-card">
                <p>
                  I&apos;m a Full Stack Developer and 3rd-year BCA student who enjoys the space between a polished frontend and the systems powering it.
                  From accessible React interfaces to REST APIs and data models, I like understanding the whole picture and making every layer work together.
                </p>
                <a href="#contact" className="inline-link">
                  Work with me <ArrowUpRight size={15} />
                </a>
              </TiltCard>

              <Stat value="05+" label="Selected projects" />
              <Stat value="14" label="Core technologies" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}
