<template>
  <nav v-if="items.length" :aria-label="t('docs.toc.label')">
    <p class="ledger-label mb-2 text-muted">{{ t('docs.toc.title') }}</p>
    <ul class="border-l border-rule">
      <li v-for="item in items" :key="item.id">
        <a
          :href="`#${item.id}`"
          class="-ml-px block border-l py-1 text-sm leading-snug hover:text-ink"
          :class="[
            item.level === 3 ? 'pl-6' : 'pl-3',
            item.id === active ? 'border-ink font-semibold text-ink' : 'border-transparent text-muted',
          ]"
          :aria-current="item.id === active ? 'location' : undefined"
        >{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

export interface TocItem { id: string; text: string; level: 2 | 3 }
defineProps<{ items: TocItem[]; active: string }>()
const { t } = useI18n()
</script>
