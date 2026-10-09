import TerminalCommand from './TerminalCommand'
import Button from './Button'
import SocialLink from './SocialLink'
import { strings } from '../i18n/strings'
import { useLang } from '../i18n/context'

const EMAIL = 'fernando.johansenn@gmail.com'

export default function ContactMe() {
  const { t } = useLang()
  return (
    <section id="contato">
      <TerminalCommand command="mail --compose" />
      <div className="section-head">
        <h2>{t(strings.contact.title)}</h2>
        <p>{t(strings.contact.subtitle)}</p>
      </div>

      <Button href={`mailto:${EMAIL}`}>{t(strings.contact.cta)}</Button>

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
