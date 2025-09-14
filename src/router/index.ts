import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/docs',
      name: 'documentation',
      component: () => import('@/views/Documentation.vue')
    },
    {
      path: '/api',
      name: 'api-reference',
      component: () => import('@/views/ApiReference.vue')
    }
  ]
})

export default router
