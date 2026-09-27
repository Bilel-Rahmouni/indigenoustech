import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Vision } from './components/Vision'
import { Innovation } from './components/Innovation'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Vision />
        <Innovation />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
