<template>
  <div class="mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-center">
    <p class="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-4 sm:mb-6 md:mb-8">
      {{ $t('dataSources.trustedBy') }}
    </p>
    <div class="grid grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 max-w-md sm:max-w-lg md:max-w-5xl mx-auto opacity-60 hover:opacity-80 transition-opacity duration-300">
      <div v-for="source in dataSources" :key="source.alt"
        class="flex items-center justify-center h-16 sm:h-20 md:h-24 grayscale hover:grayscale-0 transition-all duration-300 group">
        <a :href="source.url" target="_blank" rel="noopener noreferrer"
          class="flex w-full h-full items-center justify-center hover:scale-110 transition-transform duration-300 p-2"
          :title="source.alt">
          <img :src="source.image" :alt="source.alt" 
               class="max-h-8 sm:max-h-10 md:max-h-12 w-auto object-contain"
               :class="getImageDarkModeClass(source.image)" 
               loading="lazy">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface DataSource {
  image: string
  alt: string
  url: string
}

const dataSources: DataSource[] = [
  {
    image: '/inacovid.webp',
    alt: 'INACOVID-19',
    url: 'https://covid19.go.id/peta-sebaran'
  },
  {
    image: '/dinkes-sulteng.webp',
    alt: 'Dinkes Sulteng',
    url: 'https://dinkes.sultengprov.go.id/category/covid-19/'
  },
  {
    image: '/sulteng-lawan-covid.webp',
    alt: 'Sulteng Lawan COVID',
    url: 'https://www.instagram.com/sultenglawancovid/'
  },
  {
    image: '/detexi.webp',
    alt: 'Detexi',
    url: 'https://detexi.id'
  },
  {
    image: '/banua-coder.webp',
    alt: 'Banua Coder',
    url: 'https://banuacoder.com'
  },
  {
    image: '/ethical-hacker-indonesia.webp',
    alt: 'Ethical Hacker Indonesia',
    url: 'https://hack.co.id'
  }
]

const getImageDarkModeClass = (imagePath: string): string => {
  // Images that need background removal (non-transparent white backgrounds)
  if (imagePath.includes('inacovid')) {
    return 'image-remove-bg'
  }
  
  // Images with government logos that need selective typography color inversion
  if (imagePath.includes('dinkes-sulteng')) {
    return 'image-gov-logo'
  }
  
  // Images that should remain unchanged in dark mode
  if (imagePath.includes('sulteng-lawan-covid')) {
    return ''
  }
  
  // Default: apply standard logo dark mode treatment for other logos
  return 'logo-dark-mode'
}
</script>
