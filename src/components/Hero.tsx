import { portfolioContent } from '../data/portfolioContent'

export function Hero() {
  const { hero, brand } = portfolioContent
  return (
    <section className="hero section-shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-meta">
        <span>{hero.eyebrow}</span>
        <span>{hero.index}</span>
      </div>
      <div className="hero-stage">
        <div className="hero-heading-wrap">
          <h1 id="hero-title" className="hero-heading">
            <span className="hero-line">
              {hero.lineOne} <em>{hero.lineTwo}</em>
            </span>
            <span className="hero-line hero-line-offset">{hero.lineThree}</span>
            <span className="hero-line hero-line-final">
              <em>{hero.lineFour}</em>
            </span>
          </h1>
          <span className="hero-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <aside className="hero-intro" aria-label="Presentación">
          <span className="tiny-label">JULIÁN VILLALBA / FULL-STACK</span>
          <p>{hero.intro}</p>
          <div className="hero-intro-bottom">
            <span>{hero.note}</span>
            <a href="#obra">{hero.explore} ↓</a>
          </div>
        </aside>
      </div>
      <div className="hero-bottom">
        <span>{brand.role}</span>
        <span>{brand.location}</span>
        <span>DESLIZA PARA CONTINUAR ↓</span>
      </div>
    </section>
  )
}
