/// <reference types="histoire" />
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  histoire: {
    theme: {
      title: 'Acme Inc.',
      logo: {
        // square: './assets/koala.png',
        // light: './assets/koala.png',
        // dark: 'assets/koala.png',
      },
      colors: {
        // gray: defaultColors.zinc,
        // primary: defaultColors.cyan
      },
      logoHref: 'https://google.com',
      // favicon: './assets/koala.png',
    }
  }
})