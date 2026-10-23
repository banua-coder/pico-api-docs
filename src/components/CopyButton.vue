<template>
  <button
    type="button"
    class="touch-target btn-ghost inline-flex h-8 items-center justify-center gap-1.5 text-xs font-semibold"
    :class="showText ? 'px-2.5' : 'w-8'"
    :aria-label="label"
    @click="copy"
  >
    <Icon :name="copied ? 'check' : 'copy'" :size="16" />
    <span v-if="showText">{{ copied ? t('ui.copied') : t('ui.copy') }}</span>
    <span class="sr-only" role="status" aria-live="polite">{{ copied ? t('ui.copied') : '' }}</span>
  </button>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/Icon.vue'

const props = defineProps<{ text: string; label: string; showText?: boolean }>()
const { t } = useI18n()
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(props.text)
  } catch {
    // Fallback for non-secure contexts or denied permission.
    const area = document.createElement('textarea')
    area.value = props.text
    area.setAttribute('readonly', '')
    area.style.position = 'fixed'
    area.style.opacity = '0'
    document.body.appendChild(area)
    area.select()
    document.execCommand('copy')
    area.remove()
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => (copied.value = false), 1800)
}

onBeforeUnmount(() => clearTimeout(timer))
</script>
