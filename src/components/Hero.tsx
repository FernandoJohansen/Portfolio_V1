import Button from './Button'
import Terminal from './Terminal'
import Neofetch from './Neofetch'
import profile from '../assets/profile.jpg'
import { strings } from '../i18n/strings'
import { useLang } from '../i18n/context'

export default function Hero() {
  const { lang, t } = useLang()
  return (
    <section className="hero">
      <div className="avatar">
        <img src={profile} alt="Fernando Johansen" />
      </div>
      <h1>{t(strings.hero.greeting)}</h1>
      {lang === 'pt' ? (
        <p className="role">
          Sou <b>Desenvolvedor Full Stack</b> e <b>AI Engineer</b>, focado em
          Python, FastAPI, React e PostgreSQL. Construo aplicações do zero ao
          deploy, coloco LLMs para trabalhar dentro delas e trato segurança como
          parte do projeto, não como etapa final.
        </p>
      ) : (
        <p className="role">
          I'm a <b>Full Stack Developer</b> and <b>AI Engineer</b> focused on
          Python, FastAPI, React and PostgreSQL. I build applications from
          scratch to deploy, put LLMs to work inside them, and treat security as
          part of the design, not a final step.
        </p>
      )}
      <Button href="#contato">{t(strings.hero.cta)}</Button>

      <Terminal filename="[fernando@archlinux ~]">
        <div style={{ marginBottom: 12 }}>
          <span className="sym">❯</span> <span className="muted">neofetch</span>
        </div>
        <Neofetch />
      </Terminal>
    </section>
  )
}
