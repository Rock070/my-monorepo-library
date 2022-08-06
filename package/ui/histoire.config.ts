import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: './histoire.setup.ts',
  plugins: [
    HstVue()
  ],
  theme: {
    title: 'Acme Inc.',
    logo: {
      // square: './assets/koala.png',
      // light: './assets/koala.png',
      // dark: './src/assets/koala.png',
    },
    colors: {
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        750: '#323238',
        800: '#27272a',
        850: '#1f1f21',
        900: '#18181b',
        950: '#101012'
      }
      // gray: defaultColors.zinc,
      // primary: defaultColors.cyan
    },
    logoHref: 'https://google.com'
    // favicon: './assets/koala.png',
  }
})
