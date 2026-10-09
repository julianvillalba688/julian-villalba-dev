'use client'

import { useEffect, useRef, useState } from 'react'
import { portfolioContent } from '../data/portfolioContent'

export function Header() {
  const [open, setOpen] = useState(false)
  const button = useRef<HTMLButtonElement>(null)
  const { brand, navigation, ui } = portfolioContent

  useEffect(() => {
    if (!open) return
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        button.current?.focus()
      }
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [open])

  return (
    <header className="site-header">
      <span className="scroll-progress" aria-hidden="true" />
      <a
        className="brand-mark"
        href="#inicio"
        aria-label={brand.fullName}
        onClick={() => setOpen(false)}
      >
        {brand.initials}
        <span className="brand-dot">.</span>
      </a>
      <nav
        id="site-navigation"
        className={`floating-nav ${open ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navigation.map((link, index) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <span className="nav-number">0{index + 1}</span>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="header-side">
        <span>{brand.location}</span>
        <a href={portfolioContent.contact.emailHref}>Hablemos ↗</a>
      </div>
      <button
        ref={button}
        type="button"
        className="menu-button"
        aria-label={open ? ui.closeMenu : ui.menu}
        aria-controls="site-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Cerrar ×' : 'Menú +'}
      </button>
    </header>
  )
}
