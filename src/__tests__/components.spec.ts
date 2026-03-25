import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseBadge from '@/components/BaseBadge.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseCard from '@/components/BaseCard.vue'

describe('BaseBadge', () => {
  it('renders with default slot', () => {
    const wrapper = mount(BaseBadge, {
      slots: { default: 'New' },
    })
    expect(wrapper.text()).toContain('New')
  })

  it('renders with custom color prop', () => {
    const wrapper = mount(BaseBadge, {
      props: { color: 'green' },
      slots: { default: 'Active' },
    })
    expect(wrapper.text()).toContain('Active')
  })
})

describe('BaseButton', () => {
  it('renders with default slot', () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click Me' },
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('emits click event', async () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click' },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})

describe('BaseCard', () => {
  it('renders with default slot', () => {
    const wrapper = mount(BaseCard, {
      slots: { default: 'Card content' },
    })
    expect(wrapper.text()).toContain('Card content')
  })
})
