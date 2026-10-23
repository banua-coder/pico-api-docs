import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { findSection } from '@/data/sections'

/** Sets document.title, meta description and <html lang> for the current route and language. */
export function usePageMeta() {
  const route = useRoute()
  const { t, locale } = useI18n()

  watchEffect(() => {
    const site = t('site.name')
    let title = t('home.metaTitle')
    let description = t('home.metaDescription')
    const section = route.name === 'docs' ? findSection(route.params.section) : undefined
    if (section) {
      title = `${t(`docs.pages.${section.key}.title`)} | ${site}`
      description = t(`docs.pages.${section.key}.description`)
    }
    document.title = title
    document.documentElement.lang = locale.value
    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  })
}
