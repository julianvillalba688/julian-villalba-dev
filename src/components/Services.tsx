import { portfolioContent } from '../data/portfolioContent'
import { Reveal } from './Reveal'

export function Services() {
  const { profile } = portfolioContent
  return (
    <section className="profile section-shell" id="perfil" aria-labelledby="profile-title">
      <div className="profile-top">
        <span className="section-index">{profile.eyebrow}</span>
        <Reveal>
          <h2 id="profile-title">{profile.title}</h2>
          <p className="profile-lede">{profile.description}</p>
        </Reveal>
      </div>
      <blockquote className="profile-quote">
        <span aria-hidden="true">“</span>
        {profile.approach}
      </blockquote>
      <div className="capabilities">
        {profile.capabilities.map((item) => (
          <Reveal key={item.label} className="capability">
            <span>{item.label}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <ul>
              {item.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="toolset">
        <span className="tiny-label">EN LA CAJA DE HERRAMIENTAS</span>
        <div>
          {profile.toolset.map((group) => (
            <p key={group.label}>
              <strong>{group.label}</strong>
              <span>{group.items}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
