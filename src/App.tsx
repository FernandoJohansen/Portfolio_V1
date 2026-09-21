import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import ContactMe from './components/ContactMe'

function Footer() {
  return (
    <footer>
      [fernando@archlinux ~]❯<span className="caret" />
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}
