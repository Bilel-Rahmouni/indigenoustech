import './About.css'

const ventures = [
  {
    name: 'mint.',
    label: 'Web & product',
    href: 'https://mintstudio.io',
  },
  {
    name: 'Pixy',
    label: 'Digital marketing',
    href: 'https://pixystudio.io',
  },
]

export function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__intro reveal">
          <p className="section-label">About</p>
          <h2 className="about__title">
            A company designed for what&apos;s ahead.
          </h2>
        </div>

        <div className="about__body reveal reveal-delay-1">
          <p className="about__text">
            Indigenous Tech is a technology group focused on innovation across
            software and marketing — with the patience and standards of an
            organization built for the long run.
          </p>

          <div className="about__ventures">
            <p className="about__ventures-label">Our ventures</p>
            <ul className="about__ventures-list">
              {ventures.map((venture) => (
                <li key={venture.name}>
                  <a
                    href={venture.href}
                    className="about__venture"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="about__venture-name">{venture.name}</span>
                    <span className="about__venture-label">{venture.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
