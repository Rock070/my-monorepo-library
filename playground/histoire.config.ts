import { defineConfig, defaultColors } from 'histoire'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [
    HstNuxt(),
  ],
  theme: {
    title: 'Acme Inc.',
    logo: {
      square: 'assets/koala.png',
      light: 'assets/koala.png',
      dark: 'assets/koala.png',
    },
    colors: {
      // gray: defaultColors.zinc,
      // primary: defaultColors.cyan
    },
    logoHref: 'https://google.com',
    favicon: 'assets/koala.png',
  }
})