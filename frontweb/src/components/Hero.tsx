import { Button } from './Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner container">
        <p className="hero__label reveal">Innovation · Vision</p>
        <h1 className="hero__title reveal reveal-delay-1">Indigenous Tech</h1>
        <p className="hero__lead reveal reveal-delay-2">
          A technology company built on long-term thinking — investing in ideas,
          products, and experiences that move industries forward.
        </p>
        <div className="hero__actions reveal reveal-delay-3">
          <Button href="#contact" variant="primary" size="lg">
            Contact us
          </Button>
          <Button href="#vision" variant="outline" size="lg">
            Our vision
          </Button>
        </div>
      </div>
    </section>
  )
}
