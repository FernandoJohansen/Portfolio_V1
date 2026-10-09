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
        Sou <b>Desenvolvedor Full Stack</b> e <b>AI Engineer</b>, focado em
        Python, FastAPI, React e PostgreSQL. Construo aplicações do zero ao
        deploy, coloco LLMs para trabalhar dentro delas e trato segurança como
        parte do projeto, não como etapa final.
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
