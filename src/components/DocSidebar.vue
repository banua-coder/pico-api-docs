<template>
  <div v-if="open" class="fixed inset-0 top-nav z-30 bg-ink/50 lg:hidden" aria-hidden="true" @click="$emit('close')" />
  <aside
    id="doc-sidebar"
    :aria-label="t('docs.sidebar.label')"
    class="w-rail shrink-0 flex-col overflow-y-auto border-r border-rule-strong bg-surface lg:sticky lg:top-nav lg:flex lg:h-[calc(100vh-var(--nav-h))]"
    :class="open ? 'max-lg:fixed max-lg:inset-y-0 max-lg:top-nav max-lg:z-40 max-lg:flex max-lg:w-[min(20rem,88vw)]' : 'max-lg:hidden'"
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
              class="block border-b border-rule px-4 py-2 text-sm hover:bg-sunk"
              :class="s.slug === current ? 'on-field !bg-field-indigo font-semibold !text-field-ink' : 'text-ink'"
              :aria-current="s.slug === current ? 'page' : undefined"
              @click="$emit('close')"
            >{{ t(`docs.pages.${s.key}.nav`) }}</router-link>
          </li>
        </ul>
      </section>
    </nav>
    <p class="border-t border-rule px-4 py-3 text-xs text-muted">{{ t('docs.sidebar.version', { version }) }}</p>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
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
