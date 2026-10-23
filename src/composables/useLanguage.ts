import { useI18n } from 'vue-i18n'

/** Language toggle shared by the nav and the mobile drawer. Persists to `pico-language`. */
export function useLanguage() {
  const { locale } = useI18n()
  const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'id' : 'en'
    try { localStorage.setItem('pico-language', locale.value) } catch { /* ignore */ }
  }
  return { locale, toggleLanguage }
}
