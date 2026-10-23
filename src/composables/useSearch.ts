import { ref } from 'vue'

const open = ref(false)

/** Shared open state for the command palette (nav button, sidebar button, keyboard). */
export function useSearch() {
  return {
    open,
    openSearch: () => { open.value = true },
    closeSearch: () => { open.value = false },
  }
}
