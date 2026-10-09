import { useLang } from '../i18n/context'
import { strings, type Lang } from '../i18n/strings'

const options: { value: Lang; label: string }[] = [
  { value: 'pt', label: 'PT' },
  { value: 'en', label: 'EN' },
]

/** Two-state PT / EN switch shown in the header. */
export default function LangToggle() {
  const { lang, setLang, t } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label={t(strings.nav.switchTo)}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          lang={opt.value === 'pt' ? 'pt-BR' : 'en'}
          aria-pressed={lang === opt.value}
          className={lang === opt.value ? 'active' : undefined}
          onClick={() => setLang(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
