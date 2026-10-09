import { portfolioContent } from '../data/portfolioContent'
import { Reveal } from './Reveal'

export function Contact() {
  const { contact } = portfolioContent
  return (
    <section className="contact section-shell" id="contacto" aria-labelledby="contact-title">
      <span className="section-index">{contact.eyebrow}</span>
      <Reveal>
        <h2 id="contact-title">{contact.title}</h2>
      </Reveal>
      <div className="contact-bottom">
        <p>{contact.intro}</p>
        <a className="contact-email" href={contact.emailHref}>
          {contact.email}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-links">
        <a href={contact.phoneHref}>{contact.phone}</a>
        {contact.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            download={link.href.endsWith('.pdf') ? true : undefined}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  )
}
