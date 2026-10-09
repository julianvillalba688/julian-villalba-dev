import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { portfolioContent } from './data/portfolioContent'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        {portfolioContent.ui.skip}
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
