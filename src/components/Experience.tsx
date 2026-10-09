import { portfolioContent } from '../data/portfolioContent'
import { Reveal } from './Reveal'

export function Experience() {
  const { experience } = portfolioContent
  return (
    <section
      className="experience section-shell"
      id="trayectoria"
      aria-labelledby="experience-title"
    >
      <div className="experience-header">
        <span className="section-index">{experience.eyebrow}</span>
        <Reveal>
          <h2 id="experience-title">{experience.title}</h2>
        </Reveal>
      </div>
      <div className="roles">
        {experience.roles.map((item, index) => (
          <Reveal key={item.period} className="role">
            <span className="role-number">0{index + 1}</span>
            <div className="role-main">
              <span className="role-period">{item.period}</span>
              <h3>{item.role}</h3>
              <p className="role-company">
                {item.company} <span>· {item.place}</span>
              </p>
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="education">
        <h3>{experience.educationTitle}</h3>
        <ul>
          {experience.education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
