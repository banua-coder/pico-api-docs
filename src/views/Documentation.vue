<template>
  <div class="mx-auto flex w-full max-w-[90rem] flex-1 items-start">
    <DocSidebar :current="slug" :open="sidebarOpen" @close="closeSidebar" />

    <main id="main-content" class="min-w-0 flex-1" tabindex="-1">
      <!-- Small screens: sections drawer trigger, sticky under the nav (never floats over content). -->
      <div class="sticky top-nav z-20 border-b border-rule bg-surface lg:hidden">
        <button
          ref="menuBtn"
          type="button"
          class="flex min-h-11 w-full items-center gap-3 px-4 text-left text-sm font-semibold"
          aria-controls="doc-sidebar"
          :aria-expanded="sidebarOpen"
          @click="sidebarOpen = true"
        >
          <Icon name="menu" />
          <span class="text-muted">{{ t('docs.sidebar.sections') }}</span>
          <Icon name="chevron-right" :size="14" class="text-muted" />
          <span class="truncate">{{ t(`docs.pages.${section.key}.nav`) }}</span>
        </button>
      </div>

      <div class="px-4 py-6 sm:px-8 lg:px-12 lg:py-10">
        <div class="mx-auto flex max-w-[76rem] gap-12">
          <div class="min-w-0 flex-1">
            <header>
              <h1 ref="h1" tabindex="-1" class="h1 !text-[2.25rem] !leading-[1.2] focus:outline-none sm:!text-[2.5rem]">{{ t(`docs.pages.${section.key}.title`) }}</h1>
              <p class="mt-3 max-w-prose text-lg leading-7 text-ink-soft">{{ t(`docs.pages.${section.key}.description`) }}</p>
            </header>

            <details v-if="toc.length" class="mt-6 rounded-lg border border-rule bg-surface xl:hidden">
              <summary class="flex min-h-11 cursor-pointer items-center gap-2 px-4 text-sm font-semibold">
                <Icon name="list" />{{ t('docs.toc.title') }}
              </summary>
              <div class="border-t border-rule px-4 py-3"><OnThisPage :items="toc" :active="activeId" /></div>
            </details>

            <div ref="content" class="mt-10 min-w-0">
              <component :is="current" :key="slug" v-bind="section.kind === 'endpoint' ? { slug } : {}" />
            </div>

            <nav :aria-label="t('docs.pager.label')" class="mt-16 grid gap-4 sm:grid-cols-2">
              <router-link v-if="prev" :to="`/docs/${prev.slug}`" rel="prev" class="group flex items-center gap-3 rounded-lg border border-rule bg-surface p-4 transition-colors hover:border-rule-strong hover:bg-sunk">
                <Icon name="chevron-left" />
                <span class="min-w-0"><span class="block text-xs text-muted">{{ t('docs.pager.prev') }}</span><span class="block truncate font-semibold text-brand">{{ t(`docs.pages.${prev.key}.nav`) }}</span></span>
              </router-link>
              <span v-else class="hidden sm:block" />
              <router-link v-if="next" :to="`/docs/${next.slug}`" rel="next" class="group flex items-center justify-end gap-3 rounded-lg border border-rule bg-surface p-4 text-right transition-colors hover:border-rule-strong hover:bg-sunk">
                <span class="min-w-0"><span class="block text-xs text-muted">{{ t('docs.pager.next') }}</span><span class="block truncate font-semibold text-brand">{{ t(`docs.pages.${next.key}.nav`) }}</span></span>
                <Icon name="chevron-right" />
              </router-link>
            </nav>
          </div>

          <aside v-if="toc.length" :aria-label="t('docs.toc.label')" class="sticky top-[calc(var(--nav-h)+2.5rem)] hidden max-h-[calc(100vh-var(--nav-h)-5rem)] w-52 shrink-0 self-start overflow-y-auto xl:block">
            <OnThisPage :items="toc" :active="activeId" />
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, nextTick, onBeforeUnmount, onMounted, ref, watch, type Component } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import DocSidebar from '@/components/DocSidebar.vue'
import Icon from '@/components/icons/Icon.vue'
import OnThisPage, { type TocItem } from '@/components/OnThisPage.vue'
import { DEFAULT_SECTION, findSection, neighbours } from '@/data/sections'

const { t, locale } = useI18n()
const route = useRoute()

const slug = computed(() => String(route.params.section))
const section = computed(() => findSection(slug.value) ?? findSection(DEFAULT_SECTION)!)
const prev = computed(() => neighbours(slug.value).prev)
const next = computed(() => neighbours(slug.value).next)

// Each page is its own lazy chunk: only the section being read is downloaded.
const guides: Record<string, Component> = {
  overview: defineAsyncComponent(() => import('@/components/documentation/OverviewSection.vue')),
  endpoints: defineAsyncComponent(() => import('@/components/documentation/EndpointsSection.vue')),
  glossary: defineAsyncComponent(() => import('@/components/documentation/GlossarySection.vue')),
  authentication: defineAsyncComponent(() => import('@/components/documentation/AuthenticationSection.vue')),
  errors: defineAsyncComponent(() => import('@/components/documentation/ErrorsSection.vue')),
  pagination: defineAsyncComponent(() => import('@/components/documentation/PaginationSection.vue')),
}
const endpointPage = defineAsyncComponent(() => import('@/components/documentation/EndpointSection.vue'))
const current = computed(() => (section.value.kind === 'endpoint' ? endpointPage : guides[section.value.slug]))

// --- mobile sections drawer ---
const sidebarOpen = ref(false)
const menuBtn = ref<HTMLButtonElement>()
const closeSidebar = () => {
  if (!sidebarOpen.value) return
  sidebarOpen.value = false
  nextTick(() => menuBtn.value?.focus())
}

// --- "On this page": h2/h3 of the current section ---
const content = ref<HTMLElement>()
const h1 = ref<HTMLElement>()
const toc = ref<TocItem[]>([])
const activeId = ref('')
let mutation: MutationObserver | undefined
let spy: IntersectionObserver | undefined
let raf = 0

const slugify = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-')

function rebuildToc() {
  const root = content.value
  if (!root) return
  const used = new Set<string>()
  const list: TocItem[] = []
  spy?.disconnect()
  root.querySelectorAll<HTMLElement>('h2, h3').forEach((el) => {
    const text = el.textContent?.trim() ?? ''
    if (!text) return
    let id = el.id || slugify(text) || 'section'
    while (used.has(id)) id += '-2'
    used.add(id)
    el.id = id
    list.push({ id, text, level: el.tagName === 'H3' ? 3 : 2 })
    spy?.observe(el)
  })
  const same = list.length === toc.value.length && list.every((x, i) => x.id === toc.value[i].id && x.text === toc.value[i].text)
  if (!same) toc.value = list
  if (!list.some((x) => x.id === activeId.value)) activeId.value = list[0]?.id ?? ''
}
const schedule = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(rebuildToc) }

onMounted(() => {
  spy = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible.length) activeId.value = visible[0].target.id
    },
    { rootMargin: '-90px 0px -65% 0px', threshold: 0 },
  )
  if (content.value) {
    mutation = new MutationObserver(schedule)
    mutation.observe(content.value, { childList: true, subtree: true, characterData: true })
  }
  schedule()
})

onBeforeUnmount(() => {
  mutation?.disconnect()
  spy?.disconnect()
  cancelAnimationFrame(raf)
})

// New page: reset the rail and move focus to the heading so screen readers announce it.
watch(slug, async () => {
  toc.value = []
  activeId.value = ''
  await nextTick()
  h1.value?.focus({ preventScroll: true })
})
watch(locale, schedule)
</script>
