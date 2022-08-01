import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite'

const { resolve } = require('path')

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      // entry: resolve(__dirname, '/index.ts'),
      entry: resolve(__dirname, 'index.ts'),
      name: 'dist',
      // the proper extensions will be added
      fileName: 'atomic'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: resolve(__dirname, 'dist'),
        format: 'esm'
      }
    }
  }
})
