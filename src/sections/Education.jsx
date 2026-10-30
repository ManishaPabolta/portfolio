import { Award, GraduationCap } from 'lucide-react'
import { Reveal, SectionHeading, TiltCard } from '../components/Primitives'
import { certifications } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-space pt-0">
      <div className="container">
        <SectionHeading eyebrow="05 / education" title="The foundation underneath." />

        <div className="education-grid">
          <Reveal>
            <TiltCard className="education-card">
              <GraduationCap className="text-electric" size={28} />
              <div className="education-card-copy">
                <span>2024 — 2027</span>
                <h3>Bachelor of Computer Applications</h3>
                <p>Full Stack Web Development</p>
              </div>
              <div className="divider" />
              <p className="education-summary">
                A practical education focused on software engineering fundamentals, web technologies and building for the web.
              </p>
            </TiltCard>
          </Reveal>

          <div>
            <div className="cert-heading">
              <Award size={17} className="text-violet-400" /> Certifications
            </div>

            <div className="cert-list">
              {certifications.map((cert, index) => (
                <Reveal key={cert.name} delay={index * 0.08}>
                  <div className="glass cert-item">
                    <div>
                      <h3>{cert.name}</h3>
                      <p>{cert.issuer}</p>
                    </div>
                    <span>{cert.year}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
