import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue(), 
    WindiCSS()
  ],
})