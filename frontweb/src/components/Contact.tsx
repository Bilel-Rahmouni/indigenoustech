import { Button } from './Button'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__inner reveal"> 
          <Button href="mailto:contact@indigenous-tech.com" size="lg">
            contact@indigenous-tech.com
          </Button>
        </div>
      </div>
    </section>
  )
}
