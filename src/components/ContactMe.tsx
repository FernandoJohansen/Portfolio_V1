import TerminalCommand from './TerminalCommand'
import Button from './Button'
import SocialLink from './SocialLink'

const EMAIL = 'fernando.johansenn@gmail.com'

export default function ContactMe() {
  return (
    <section id="contato">
      <TerminalCommand command="mail --compose" />
      <div className="section-head">
        <h2>Vamos conversar</h2>
        <p>Aberto a oportunidades como desenvolvedor full stack.</p>
      </div>

      <Button href={`mailto:${EMAIL}`}>Falar comigo</Button>

      <div className="contact-links">
        <SocialLink href="https://github.com/FernandoJohansen">GitHub</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/fernando-johansen-3721a7370/">
          LinkedIn
        </SocialLink>
        <SocialLink href={`mailto:${EMAIL}`}>Email</SocialLink>
      </div>
    </section>
  )
}
