import { portfolioContent } from '../data/portfolioContent'

export function Footer() {
  const { footer, ui, brand } = portfolioContent
  return (
    <footer className="site-footer section-shell">
      <span>{footer.credit.replace('{year}', String(new Date().getFullYear()))}</span>
      <span>{footer.note}</span>
      <a href="#inicio" aria-label={ui.backTop}>
        {brand.initials} ↑
      </a>
    </footer>
  )
}
