<template>
  <div v-if="open" class="fixed inset-0 top-nav z-30 bg-[rgb(20_13_9/0.6)] lg:hidden" aria-hidden="true" @click="$emit('close')" />
  <div
    class="w-rail shrink-0 lg:sticky lg:top-nav lg:flex lg:h-[calc(100vh-var(--nav-h))]"
    :class="open ? 'max-lg:fixed max-lg:inset-y-0 max-lg:top-nav max-lg:z-40 max-lg:flex max-lg:w-[min(20rem,88vw)]' : 'max-lg:hidden'"
  >
  <aside
    id="doc-sidebar"
    :aria-label="t('docs.sidebar.label')"
    class="flex min-w-0 flex-1 flex-col overflow-y-auto bg-surface"
    @keydown.esc="$emit('close')"
  >
    <div class="flex items-center gap-2 border-b border-rule p-3">
      <button type="button" class="btn-ghost touch-target flex h-10 min-w-0 flex-1 items-center justify-between px-3 text-sm text-muted" :aria-label="t('search.open')" @click="onSearch">
        <span class="inline-flex items-center gap-2"><Icon name="search" />{{ t('search.button') }}</span>
        <kbd class="border border-rule-strong px-1.5 text-xs">/</kbd>
      </button>
      <button type="button" class="btn-ghost touch-target inline-flex h-10 w-10 items-center justify-center lg:hidden" :aria-label="t('docs.sidebar.close')" @click="$emit('close')">
        <Icon name="close" />
      </button>
    </div>

    <nav :aria-label="t('docs.sidebar.sections')" class="flex-1">
      <section v-for="group in groups" :key="group.id" :aria-labelledby="`grp-${group.id}`">
        <p :id="`grp-${group.id}`" class="ledger-label border-b border-t border-rule bg-sunk px-4 py-1.5 text-muted">{{ t(`docs.groups.${group.id}`) }}</p>
        <ul>
          <li v-for="s in group.items" :key="s.slug">
            <router-link
              :to="`/docs/${s.slug}`"
              class="relative block border-b border-rule py-2 pl-9 pr-4 text-sm hover:bg-sunk"
              :class="s.slug === current ? 'on-field !bg-field-indigo font-semibold !text-field-ink' : 'text-ink'"
              :aria-current="s.slug === current ? 'page' : undefined"
              @click="$emit('close')"
            >
              <span v-if="s.slug === current" class="absolute left-4 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-bark" aria-hidden="true" />{{ t(`docs.pages.${s.key}.nav`) }}
            </router-link>
          </li>
        </ul>
      </section>
    </nav>
    <p class="border-t border-rule px-4 py-3 text-xs text-muted">{{ t('docs.sidebar.version', { version }) }}</p>
  </aside>
  <BarkBorder vertical :height="14" class="shrink-0" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BarkBorder from '@/components/BarkBorder.vue'
import Icon from '@/components/icons/Icon.vue'
import { useSearch } from '@/composables/useSearch'
import { SECTION_GROUPS, sections } from '@/data/sections'
import { version } from '../../package.json'

defineProps<{ current: string; open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const { t } = useI18n()
const { openSearch } = useSearch()

const groups = computed(() => SECTION_GROUPS.map((id) => ({ id, items: sections.filter((s) => s.group === id) })))

function onSearch() {
  emit('close')
  openSearch()
}
</script>
