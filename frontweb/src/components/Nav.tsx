import { useState } from 'react'
import { Button } from './Button'
import './Nav.css'

const links = [
  { label: 'Vision', href: '#vision' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#" className="nav__logo">
          Indigenous Tech
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Main">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" size="sm" className="nav__cta">
            Contact us
          </Button>
        </nav>

        <button
          type="button"
          className={`nav__toggle ${open ? 'nav__toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
