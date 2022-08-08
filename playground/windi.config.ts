import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // attributify: true,
  extract: {
    include: ['**/*.{vue,ts}'],
    exclude: ['node_modules', '.git']
  }
})
