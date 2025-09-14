import { createI18n } from 'vue-i18n'

// Lazy load locale messages
const loadLocaleMessages = async () => {
  const modules = import.meta.glob('./locales/*.json')
  const messages: Record<string, any> = {}

  for (const path in modules) {
    const mod = await modules[path]() as { default: any }
    const locale = path.replace('./locales/', '').replace('.json', '')
    messages[locale] = mod.default
  }

  return messages
}

// Get saved language or default to English
const savedLanguage = localStorage.getItem('pico-language') || 'en'

// Create i18n instance with lazy loading
const i18n = createI18n({
  legacy: false,
  locale: savedLanguage,
  fallbackLocale: 'en',
  messages: {}
})

// Load messages asynchronously
loadLocaleMessages().then(messages => {
  Object.keys(messages).forEach(locale => {
    i18n.global.setLocaleMessage(locale, messages[locale])
  })
})

export default i18n
