import { createRouter, createWebHistory } from 'vue-router'
import { DEFAULT_SECTION, isSectionSlug } from '@/data/sections'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue'), meta: { page: 'home' } },
    // Old links: /docs#national-latest still lands on the right page.
    {
      path: '/docs',
      redirect: (to) => {
        const hash = to.hash.slice(1)
        return { path: `/docs/${isSectionSlug(hash) ? hash : DEFAULT_SECTION}` }
      },
    },
    {
      path: '/docs/:section',
      name: 'docs',
      component: () => import('@/views/Documentation.vue'),
    },
    // The old API Reference page now lives in the Endpoints index.
    { path: '/api', redirect: '/docs/endpoints' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 80 }
    if (to.path === from.path) return false
    return { top: 0 }
  },
})

// A guard (not beforeEnter) so it also runs when only the :section param changes.
router.beforeEach((to) => {
  if (to.name === 'docs' && !isSectionSlug(to.params.section)) return { path: `/docs/${DEFAULT_SECTION}`, replace: true }
})

export default router
