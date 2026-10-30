import { SectionHeading, Timeline } from '../components/Primitives'
import { experiences } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container">
        <SectionHeading eyebrow="04 / experience" title="Learning in the real world.">
          Every team has taught me to communicate clearly, ask better questions and sweat the right details.
        </SectionHeading>

        <Timeline items={experiences} />
      </div>
    </section>
  )
}
