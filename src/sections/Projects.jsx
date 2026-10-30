import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, X } from 'lucide-react'
import { useState } from 'react'
import { ProjectCard, SectionHeading } from '../components/Primitives'
import { projects } from '../data'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  return (
    <section id="projects" className="section-space">
      <div className="container">
        <SectionHeading eyebrow="03 / selected work" title="A few things I’ve built.">
          Each project is an opportunity to solve a real problem with less noise and more intention.
        </SectionHeading>

        <div className="projects-panel">
          <div className="projects-panel-heading">
            <div>
              <span className="projects-panel-eyebrow">Selected work</span>
              <h3>Projects I have built</h3>
            </div>
            <span className="projects-count">{projects.length} projects</span>
          </div>

          <div
            id="projects-list"
            className={`projects-scroll ${showAllProjects ? 'is-expanded' : ''}`}
          >
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>

          <div className="projects-panel-footer">
            <span>{showAllProjects ? 'Scroll here to explore' : 'Showing a few projects'}</span>
            <button
              type="button"
              className="projects-more-button"
              aria-expanded={showAllProjects}
              aria-controls="projects-list"
              onClick={() => setShowAllProjects((isExpanded) => !isExpanded)}
            >
              {showAllProjects ? 'Show less' : 'More projects'}
              {showAllProjects ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="project-modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 18 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="project-modal glass"
            >
              <button type="button" className="modal-close" onClick={() => setSelectedProject(null)}>
                <X size={16} />
              </button>

              <div
                className={`project-modal-visual ${selectedProject.image ? 'has-image' : ''}`}
                style={{ '--accent': selectedProject.accent }}
              >
                {selectedProject.image ? (
                  <img
                    className="project-preview"
                    src={selectedProject.image}
                    alt={`${selectedProject.title} preview`}
                  />
                ) : (
                  <>
                    <div className="project-glow" style={{ background: `radial-gradient(circle at 80% 20%, ${selectedProject.accent}, transparent 50%)` }} />
                    <selectedProject.icon size={72} strokeWidth={1} className="project-icon large" />
                  </>
                )}
              </div>

              <div className="project-modal-copy">
                <span className="project-eyebrow">{selectedProject.eyebrow}</span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.description}</p>

                <div className="tag-list modal-tags">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="feature-list">
                  {selectedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-modal-actions">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="project-link highlight">
                      GitHub <ExternalLink size={12} />
                    </a>
                  )}
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="project-link highlight">
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
