import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Documentation from '@/views/Documentation.vue'
import ApiReference from '@/views/ApiReference.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/docs',
      name: 'documentation',
      component: Documentation
    },
    {
      path: '/api',
      name: 'api-reference',
      component: ApiReference
    }
  ]
})

export default router