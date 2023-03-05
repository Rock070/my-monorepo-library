import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
  },
  modules: ['@unocss/nuxt'],

  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {

    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/themes.css',
  ],

  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      title: 'rock070 project',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
          '',
        },
        {
          property: 'og:title',
          content: 'Rock070 的部落格',
        },
        {
          property: 'og:description',
          content:
          '',
        },
        {
          property: 'og:url',
          content: '',
        },
        {
          property: 'og:image',
          content: '',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:locale',
          content: 'zh_TW',
        },
        {
          property: 'og:site_name',
          content: '',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:image',
          content: '',
        },
        {
          name: 'twitter:site',
          content: '',
        },
        {
          name: 'twitter:creator',
          content: '',
        },
        {
          name: 'twitter:description',
          content: '',
        },
        {
          name: 'twitter:title',
          content: '',
        },
      ],
    },
  },
})
