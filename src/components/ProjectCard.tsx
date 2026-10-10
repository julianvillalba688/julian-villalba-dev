'use client'

import { useState } from 'react'
import { portfolioContent, type PortfolioProject } from '../data/portfolioContent'

export default function ProjectCard({
  project,
  index,
}: {
  project: PortfolioProject
  index: number
}) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(project.imageSrc) && !failed
  return (
    <article className={`project project-${index + 1}`}>
      <div className="project-visual">
        {showImage && (
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="project-image"
            onError={() => setFailed(true)}
          />
        )}
        {!showImage && (
          <div className="visual-caption" aria-hidden="true">
            <span>{portfolioContent.ui.imagePending}</span>
            <span>{project.number} / 03</span>
          </div>
        )}
      </div>
      <div className="project-copy">
        <div className="project-overline">
          <span>{project.category}</span>
          <span>{project.number} / 03</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-detail">{project.detail}</p>
        <ul className="project-stack" aria-label="Tecnologías">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            {portfolioContent.ui.source} ↗
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              {portfolioContent.ui.visit} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
