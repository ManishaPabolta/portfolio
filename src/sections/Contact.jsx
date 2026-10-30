import { Check, Github, Linkedin, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { Reveal, SectionHeading } from '../components/Primitives'
import { profile } from '../data'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (event) => {
    event.preventDefault()
    setSent(true)
    window.setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="section-space">
      <div className="container">
        <SectionHeading eyebrow="06 / contact" title="Have a good idea? Let’s make it real.">
          I’m open to thoughtful collaborations, internships and conversations about building better digital experiences.
        </SectionHeading>

        <div className="contact-grid">
          <Reveal>
            <div className="contact-stack">
              <a href={`mailto:${profile.email}`} className="contact-link">
                <Mail size={17} />
                <span>{profile.email}</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
                <Github size={17} />
                <span>github.com/ManishaPabolta</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <Linkedin size={17} />
                <span>linkedin.com/in/manisha-pabolta2413</span>
              </a>

              <div className="contact-note">
                Usually replies within a couple of days.
                <br />
                No pitch decks required.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass contact-form">
              <div className="form-row">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>

              <Field label="Subject" name="subject" placeholder="What are you building?" />

              <label className="field">
                <span>Message</span>
                <textarea required name="message" rows="5" placeholder="Tell me a little about it..." />
              </label>

              <button className="send-button" type="submit">
                {sent ? (
                  <>
                    Sent <Check size={16} />
                  </>
                ) : (
                  <>
                    Send message <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input required {...props} />
    </label>
  )
}
