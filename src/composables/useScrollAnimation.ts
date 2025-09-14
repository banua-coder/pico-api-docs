import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observers = ref<IntersectionObserver[]>([])

  const createScrollObserver = (
    elements: NodeListOf<Element> | Element[],
    options: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  ) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, options)

    elements.forEach((el) => observer.observe(el))
    observers.value.push(observer)
    
    return observer
  }

  const initScrollAnimations = () => {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    if (animateElements.length > 0) {
      createScrollObserver(animateElements)
    }

    // Slide in from left
    const slideLeftElements = document.querySelectorAll('.animate-slide-left')
    if (slideLeftElements.length > 0) {
      createScrollObserver(slideLeftElements)
    }

    // Slide in from right
    const slideRightElements = document.querySelectorAll('.animate-slide-right')
    if (slideRightElements.length > 0) {
      createScrollObserver(slideRightElements)
    }

    // Stagger animations for child elements
    const staggerContainers = document.querySelectorAll('.animate-stagger')
    staggerContainers.forEach((container) => {
      const children = container.querySelectorAll('.stagger-item')
      children.forEach((child, index) => {
        (child as HTMLElement).style.animationDelay = `${index * 0.1}s`
      })
    })
  }

  const cleanupObservers = () => {
    observers.value.forEach(observer => observer.disconnect())
    observers.value = []
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollAnimations, 100)
  })

  onUnmounted(cleanupObservers)

  return {
    initScrollAnimations,
    createScrollObserver,
    cleanupObservers
  }
}