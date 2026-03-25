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
            // katex
            if (id.includes('katex')) {
              return 'katex-vendor'
            }
            // Animation
            if (id.includes('aos')) {
              return 'ui-vendor'
            }
            // NOTE: prismjs is intentionally NOT assigned to a manual chunk.
            // Rollup will co-locate it with its importer (prism-setup.ts →
            // components chunk), ensuring the singleton and language plugins
            // share the same module instance at runtime.
            return 'vendor'
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
    include: ['vue', 'vue-router', 'vue-i18n', 'prismjs', 'katex', 'aos'],
  },
})
