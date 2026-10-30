import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

import { SectionHeading, SkillCard } from '../components/Primitives'
import { skills } from '../data'

export default function Skills() {
  const [showAllSkills, setShowAllSkills] = useState(false)

  return (
    <section id="skills" className="section-space">
      <div className="container">
        <SectionHeading eyebrow="02 / toolkit" title="The tools I reach for.">
          A practical stack for turning a blank canvas into something fast, useful and easy to evolve.
        </SectionHeading>

        <div className="skills-panel">
          <div className="skills-panel-heading">
            <div>
              <span className="skills-panel-eyebrow">My toolkit</span>
              <h3>Skills &amp; proficiency</h3>
            </div>
            <span className="skills-count">{skills.length} skills</span>
          </div>

          <div
            id="skills-list"
            className={`skills-scroll ${showAllSkills ? 'is-expanded' : ''}`}
          >
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="skills-panel-footer">
            <span>{showAllSkills ? 'Scroll here to explore' : 'Showing a few skills'}</span>
            <button
              type="button"
              className="skills-more-button"
              aria-expanded={showAllSkills}
              aria-controls="skills-list"
              onClick={() => setShowAllSkills((isExpanded) => !isExpanded)}
            >
              {showAllSkills ? 'Show less' : 'More skills'}
              {showAllSkills ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
