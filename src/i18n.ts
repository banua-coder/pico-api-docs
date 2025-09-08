import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const messages = {
  en,
  id
}

// Get saved language or default to English
const savedLanguage = localStorage.getItem('pico-language') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages
})

export default i18n
