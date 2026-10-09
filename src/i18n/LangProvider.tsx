import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LangContext } from './context'
import { strings, type L, type Lang } from './strings'

const STORAGE_KEY = 'lang'

/** Saved choice first, then the browser language, then Portuguese. */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // storage unavailable (private mode, blocked cookies): fall through
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'pt'
  return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export default function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // not persisting is fine
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = strings.meta.title[lang]
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t: (text: L) => text[lang] }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}
