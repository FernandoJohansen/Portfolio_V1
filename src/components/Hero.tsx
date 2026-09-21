import Button from './Button'
import Terminal from './Terminal'
import Neofetch from './Neofetch'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="avatar">
        <img src={profile} alt="Fernando Johansen" />
      </div>
      <h1>Oi, eu sou o Fernando.</h1>
      <p className="role">
        Sou <b>Desenvolvedor Full Stack</b>, focado em Python, FastAPI, React e
        PostgreSQL. Construo backends escaláveis, APIs REST e frontends
        responsivos, do zero ao deploy.
      </p>
      <Button href="#contato">Falar comigo</Button>

      <Terminal filename="[fernando@archlinux ~]">
        <div style={{ marginBottom: 12 }}>
          <span className="sym">❯</span> <span className="muted">neofetch</span>
        </div>
        <Neofetch />
      </Terminal>
    </section>
  )
}
