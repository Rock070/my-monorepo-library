import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

const { resolve } = require('path')

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    dts()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
