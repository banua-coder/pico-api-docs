<template>
  <div v-if="open" class="fixed inset-0 top-nav z-30 bg-scrim/60 lg:hidden" aria-hidden="true" @click="$emit('close')" />
  <div
    class="w-rail shrink-0 lg:sticky lg:top-nav lg:flex lg:h-[calc(100vh-var(--nav-h))]"
    :class="open ? 'max-lg:fixed max-lg:inset-y-0 max-lg:top-nav max-lg:z-40 max-lg:flex max-lg:w-[min(20rem,88vw)] max-lg:shadow-pop' : 'max-lg:hidden'"
  >
    <aside
      id="doc-sidebar"
      :aria-label="t('docs.sidebar.label')"
      class="flex min-w-0 flex-1 flex-col overflow-y-auto border-r border-rule bg-surface lg:bg-ground"
      @keydown.esc="$emit('close')"
    >
      <div class="flex items-center gap-2 p-4 pb-2">
        <button type="button" class="touch-target flex h-10 min-w-0 flex-1 items-center gap-2 rounded-lg border border-rule bg-ground px-3 text-sm text-muted transition-colors hover:border-rule-strong lg:bg-surface" :aria-label="t('search.open')" @click="onSearch">
          <Icon name="search" :size="16" />
          <span class="flex-1 text-left">{{ t('search.button') }}</span>
          <kbd class="rounded border border-rule bg-surface/60 px-1.5 text-xs leading-4">/</kbd>
        </button>
        <button type="button" class="btn-ghost touch-target inline-flex h-10 w-10 items-center justify-center rounded-lg lg:hidden" :aria-label="t('docs.sidebar.close')" @click="$emit('close')">
          <Icon name="close" />
        </button>
      </div>

      <nav :aria-label="t('docs.sidebar.sections')" class="flex-1 px-4 pb-4">
        <section v-for="group in groups" :key="group.id" :aria-labelledby="`grp-${group.id}`" class="mt-5">
          <p :id="`grp-${group.id}`" class="label px-3 pb-1 text-muted">{{ t(`docs.groups.${group.id}`) }}</p>
          <ul>
            <li v-for="s in group.items" :key="s.slug">
              <router-link
                :to="`/docs/${s.slug}`"
                class="flex h-9 items-center rounded-md px-3 text-sm transition-colors"
                :class="s.slug === current ? 'bg-brand-tint font-semibold text-brand' : 'text-ink-soft hover:bg-sunk hover:text-ink'"
                :aria-current="s.slug === current ? 'page' : undefined"
                @click="$emit('close')"
              >
                {{ t(`docs.pages.${s.key}.nav`) }}
              </router-link>
            </li>
          </ul>
        </section>
      </nav>
      <p class="border-t border-rule px-7 py-3 text-xs text-muted">{{ t('docs.sidebar.version', { version }) }}</p>
    </aside>
  </div>
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
