<template>
  <div class="mt-16 md:mt-20 text-center">
    <p class="text-sm font-medium text-gray-500 uppercase tracking-wide mb-6 md:mb-8">
      {{ $t('dataSources.trustedBy') }}
    </p>
    <div
      class="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 opacity-60 hover:opacity-80 transition-opacity duration-300">
      <div v-for="source in dataSources" :key="source.alt"
        class="flex items-center justify-center h-12 w-28 md:w-32 grayscale hover:grayscale-0 transition-all duration-300 group">
        <a :href="source.url" target="_blank" rel="noopener noreferrer"
          class="flex w-full h-full items-center justify-center hover:scale-110 transition-transform duration-300"
          :title="source.alt">
          <img :src="source.image" :alt="source.alt" class="max-h-6 md:max-h-8 w-auto object-contain" loading="lazy">
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
</script>
