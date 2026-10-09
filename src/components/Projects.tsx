import { portfolioContent } from '../data/portfolioContent'
import ProjectCard from './ProjectCard'
import { Reveal } from './Reveal'

export function Projects() {
  const { projects } = portfolioContent
  return (
    <section className="projects section-shell" id="obra" aria-labelledby="projects-title">
      <div className="section-intro">
        <span className="section-index">{projects.eyebrow}</span>
        <Reveal>
          <h2 id="projects-title">{projects.title}</h2>
          <p>{projects.intro}</p>
        </Reveal>
      </div>
      <div className="project-list">
        {projects.items.map((project, index) => (
          <Reveal key={project.number}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
