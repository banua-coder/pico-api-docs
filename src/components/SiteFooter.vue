<template>
  <footer class="mt-16 border-t border-rule bg-surface">
    <div class="mx-auto flex max-w-[90rem] flex-col gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8 lg:px-16">
      <p>{{ t('footer.copyright', { year }) }}</p>
      <ul class="flex flex-wrap items-center gap-x-6 gap-y-2">
        <li><router-link to="/docs" class="underline underline-offset-4 hover:text-ink">{{ t('nav.documentation') }}</router-link></li>
        <li><router-link to="/docs/glossary" class="underline underline-offset-4 hover:text-ink">{{ t('nav.glossary') }}</router-link></li>
        <li>
          <a :href="SWAGGER_URL" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-ink">
            {{ t('nav.swagger') }} <Icon name="external" :size="14" /><span class="sr-only">{{ t('ui.opensNewTab') }}</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/banua-coder/pico-api-go" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 underline underline-offset-4 hover:text-ink">
            {{ t('footer.source') }} <Icon name="external" :size="14" /><span class="sr-only">{{ t('ui.opensNewTab') }}</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/Icon.vue'
import { SWAGGER_URL } from '@/config/api'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>
