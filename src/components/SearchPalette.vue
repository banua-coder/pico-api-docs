<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-[70] bg-scrim/60 px-4 pt-[10vh]" @mousedown.self="close">
      <div
        role="dialog"
        aria-modal="true"
        :aria-label="t('search.title')"
        class="mx-auto flex max-h-[75vh] w-full max-w-[40rem] flex-col overflow-hidden rounded-lg border border-rule bg-surface text-ink shadow-pop"
        @keydown="onPanelKey"
      >
        <div class="flex items-center gap-3 border-b border-rule px-4">
          <Icon name="search" class="text-muted" />
          <label for="search-input" class="sr-only">{{ t('search.label') }}</label>
          <input
            id="search-input"
            ref="input"
            v-model="query"
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results"
            aria-autocomplete="list"
            :aria-activedescendant="results.length ? `search-opt-${active}` : undefined"
            autocomplete="off"
            spellcheck="false"
            :placeholder="t('search.placeholder')"
            class="min-w-0 flex-1 bg-transparent py-4 text-base text-ink placeholder:text-muted focus:outline-none"
            @keydown="onInputKey"
          />
          <button ref="closeBtn" type="button" class="btn-ghost touch-target inline-flex h-7 items-center px-2 text-xs font-semibold" @click="close">
            Esc<span class="sr-only"> {{ t('search.close') }}</span>
          </button>
        </div>

        <ul id="search-results" role="listbox" :aria-label="t('search.results')" class="min-h-0 flex-1 overflow-y-auto py-1">
          <li
            v-for="(item, i) in results"
            :id="`search-opt-${i}`"
            :key="item.id"
            role="option"
            :aria-selected="i === active"
            class="mx-2 my-0.5 flex cursor-pointer items-center gap-3 rounded-md px-3 py-2.5 text-sm"
            :class="i === active ? 'bg-brand-tint' : 'hover:bg-sunk'"
            @mousemove="active = i"
            @click="choose(item)"
          >
            <span v-if="item.kind === 'endpoint'" class="method-pill shrink-0">{{ item.method }}</span>
            <span v-else class="state-pill state-off shrink-0">{{ t('search.page') }}</span>
            <span class="min-w-0 flex-1">
              <span class="block break-all" :class="item.kind === 'endpoint' ? 'font-mono' : 'font-semibold'">{{ item.label }}</span>
              <span class="block text-muted">{{ item.hint }}</span>
            </span>
          </li>
        </ul>
        <p v-if="!results.length" class="px-4 py-8 text-center text-sm text-muted">{{ t('search.empty', { query }) }}</p>
        <p class="sr-only" role="status" aria-live="polite">{{ t('search.count', { count: results.length }, results.length) }}</p>
        <p class="hidden border-t border-rule bg-sunk px-4 py-2 text-xs text-muted sm:block">{{ t('search.hint') }}</p>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/Icon.vue'
import { useSearch } from '@/composables/useSearch'
import { buildSearchItems, searchItems, type SearchItem } from '@/lib/search'

const { t, locale } = useI18n()
const router = useRouter()
const { open, openSearch, closeSearch } = useSearch()

const query = ref('')
const active = ref(0)
const input = ref<HTMLInputElement>()
const closeBtn = ref<HTMLButtonElement>()
let returnTo: HTMLElement | null = null

const items = computed(() => (locale.value ? buildSearchItems((k) => t(k)) : []))
const results = computed(() => searchItems(items.value, query.value))

watch(query, () => (active.value = 0))

watch(open, async (isOpen) => {
  document.documentElement.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) {
    returnTo = document.activeElement as HTMLElement | null
    query.value = ''
    active.value = 0
    await nextTick()
    input.value?.focus()
  } else {
    await nextTick()
    returnTo?.focus()
  }
})

function close() { closeSearch() }

function choose(item: SearchItem | undefined) {
  if (!item) return
  closeSearch()
  router.push(item.to)
}

async function move(delta: number) {
  const n = results.value.length
  if (!n) return
  active.value = (active.value + delta + n) % n
  await nextTick()
  document.getElementById(`search-opt-${active.value}`)?.scrollIntoView({ block: 'nearest' })
}

function onInputKey(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') { e.preventDefault(); move(1) }
  else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1) }
  else if (e.key === 'Enter') { e.preventDefault(); choose(results.value[active.value]) }
}

// Focus trap (input <-> close button) and Esc.
function onPanelKey(e: KeyboardEvent) {
  if (e.key === 'Escape') { e.preventDefault(); close(); return }
  if (e.key !== 'Tab') return
  const first = input.value
  const last = closeBtn.value
  if (!first || !last) return
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
}

function isTyping(el: EventTarget | null) {
  const node = el as HTMLElement | null
  return !!node && (node.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(node.tagName))
}

function onGlobalKey(e: KeyboardEvent) {
  if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
    e.preventDefault()
    open.value ? closeSearch() : openSearch()
  } else if (e.key === '/' && !open.value && !isTyping(e.target) && !e.metaKey && !e.ctrlKey && !e.altKey) {
    e.preventDefault()
    openSearch()
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onGlobalKey)
  document.documentElement.style.overflow = ''
})
</script>
