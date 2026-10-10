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
      <p className="profile-quote">
        <span aria-hidden="true">“</span>
        {profile.approach}
      </p>
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
      <section className="toolset" aria-labelledby="toolset-title">
        <h3 id="toolset-title" className="tiny-label">
          TECNOLOGÍAS Y MÉTODOS
        </h3>
        <div>
          {profile.toolset.map((group) => (
            <div className="toolset-group" key={group.label}>
              <h4>{group.label}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
