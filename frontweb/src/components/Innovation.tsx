import './Innovation.css'

const pillars = [
  {
    title: 'Research & development',
    text: 'Exploring new tools, platforms, and methods before the market demands them.',
  },
  {
    title: 'Product excellence',
    text: 'Shipping software and digital products that are fast, reliable, and refined.',
  },
  {
    title: 'Strategic growth',
    text: 'Pairing innovation with marketing and distribution that scales with intent.',
  },
]

export function Innovation() {
  return (
    <section id="innovation" className="innovation">
      <div className="container">
        <header className="innovation__header reveal">
          <p className="section-label">Innovation</p>
          <h2 className="innovation__title">Where we put our energy.</h2>
        </header>

        <ul className="innovation__list">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className={`innovation__item reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <h3 className="innovation__item-title">{pillar.title}</h3>
              <p className="innovation__item-text">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
