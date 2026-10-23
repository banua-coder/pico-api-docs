import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

export type Locale = 'en' | 'id'

const stored = (() => {
  try { return localStorage.getItem('pico-language') } catch { return null }
})()
const initial: Locale = stored === 'id' ? 'id' : 'en'

// Both locales are bundled (a few KB gzipped) so no key ever flashes before load.
const i18n = createI18n({
  legacy: false,
  locale: initial,
  fallbackLocale: 'en',
  messages: { en, id },
})

export default i18n
