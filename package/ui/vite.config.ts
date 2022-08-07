import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import svgLoader from 'vite-svg-loader'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import { readJSONSync } from 'fs-extra'
// import glob from 'fast-glob'

const { resolve } = require('path')

const componentDir = resolve(__dirname, 'src/atoms')

const { source } = readJSONSync(
  resolve(__dirname, './package.json'),
  'utf-8'
)

export default defineConfig(async () => {
  // file traversal list
  // const input = await glob('src/atoms/**/*.{ts,vue}', {
  //   cwd: __dirname,
  //   absolute: true,
  //   onlyFiles: true
  // })

  return {
    plugins: [
      vue(),
      svgLoader(),
      WindiCSS({
        preflight: false
      }),
      dts({
        exclude: ['node_modules'],
        entryRoot: componentDir,
        outputDir: 'dist/components'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      // cssCodeSplit: true, TODO: 將不同的 css 放進 component 內
      lib: {
        entry: source,
        name: 'index' // required when output formats include "umd" or "iife".
      },
      rollupOptions: require('./rollup.config')
    }
  }
})
