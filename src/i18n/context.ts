import { createContext, useContext } from 'react'
import type { L, Lang } from './strings'

export interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Pick the current language's version of a bilingual string. */
  t: (text: L) => string
}

export const LangContext = createContext<LangContextValue>({
  lang: 'pt',
  setLang: () => {},
  t: (text) => text.pt,
})

export function useLang() {
  return useContext(LangContext)
}
