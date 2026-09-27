import { Logo } from './Logo'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__row">
          <span className="footer__copy">&copy; {year} Indigenous Tech</span>
          <p className="footer__credit">
            <span className="footer__credit-label">Built by</span>
            <a
              className="footer__credit-link"
              href="https://mintstudio.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
