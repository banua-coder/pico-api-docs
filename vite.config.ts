import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
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
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        manualChunks: (id) => {
          // Node modules vendor chunks
          if (id.includes('node_modules')) {
            // Vue core
            if (id.includes('vue/') && !id.includes('vue-router') && !id.includes('vue-i18n')) {
              return 'vue-vendor'
            }
            // Vue ecosystem
            if (id.includes('vue-router') || id.includes('vue-i18n')) {
              return 'vue-ecosystem'
            }
            // Code syntax highlighting and math
            if (id.includes('prismjs') || id.includes('vue-prism-component') || id.includes('katex')) {
              return 'syntax-vendor'
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
    // Increase chunk size warning limit to 1000kB for vendor chunks
    chunkSizeWarningLimit: 1000,
    // Split chunks more aggressively
    cssCodeSplit: true,
  },
  // Performance optimizations
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
