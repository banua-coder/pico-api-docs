import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import VueMathjax from 'vue-mathjax-next'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(VueMathjax)

app.mount('#app')
