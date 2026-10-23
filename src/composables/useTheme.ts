import { ref } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const KEY = 'pico-theme'
const theme = ref<Theme>('system')
const isDark = ref(false)
let started = false

const read = (): Theme => {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'light' || v === 'dark' || v === 'system' ? v : 'system'
  } catch {
    return 'system'
  }
}

const apply = () => {
  const dark = theme.value === 'dark' || (theme.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
  isDark.value = dark
}

/** Shared theme state: one source for every toggle. Persists to localStorage `pico-theme`. */
export function useTheme() {
  const initTheme = () => {
    if (started) return
    started = true
    theme.value = read()
    apply()
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', apply)
  }

  const setTheme = (next: Theme) => {
    theme.value = next
    try { localStorage.setItem(KEY, next) } catch { /* private mode: keep in memory */ }
    apply()
  }

  const toggleTheme = () => setTheme(theme.value === 'light' ? 'dark' : theme.value === 'dark' ? 'system' : 'light')

  return { theme, isDark, setTheme, toggleTheme, initTheme }
}
