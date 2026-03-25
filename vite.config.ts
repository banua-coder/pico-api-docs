import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    target: 'esnext',
    reportCompressedSize: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Vue core
            if (id.includes('vue/') && !id.includes('vue-router') && !id.includes('vue-i18n')) {
              return 'vue-vendor'
            }
            // Vue ecosystem
            if (id.includes('vue-router') || id.includes('vue-i18n')) {
              return 'vue-ecosystem'
            }
            // prismjs + all language plugins MUST stay in same chunk
            // to avoid "Prism is not defined" runtime error
            if (id.includes('prismjs') || id.includes('vue-prism-component')) {
              return 'prism-vendor'
            }
            // katex separately is fine
            if (id.includes('katex')) {
              return 'katex-vendor'
            }
            // Animation and UI libraries
            if (id.includes('aos')) {
              return 'ui-vendor'
            }
            // Other vendor libraries
            return 'vendor'
          }

          // Components chunks
          if (id.includes('src/components/documentation/')) {
            return 'docs-components'
          }
          if (id.includes('src/components/')) {
            return 'components'
          }

          // Locale chunks
          if (id.includes('src/locales/')) {
            return 'locales'
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vue-i18n',
      'prismjs',
      'katex',
      'aos'
    ],
  },
})
