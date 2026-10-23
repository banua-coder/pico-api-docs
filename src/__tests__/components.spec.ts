import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton', () => {
  it('renders its slot', () => {
    const wrapper = mount(BaseButton, { slots: { default: 'Click Me' } })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('emits click through to the native button', async () => {
    const wrapper = mount(BaseButton, { slots: { default: 'Click' } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
