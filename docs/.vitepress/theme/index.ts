import DefaultTheme from 'vitepress/theme'
import ApiPlayground from './components/ApiPlaygroundWrapper.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ApiPlayground', ApiPlayground)
  },
} satisfies Theme
