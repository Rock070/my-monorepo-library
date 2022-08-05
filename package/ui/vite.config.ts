import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'

const { resolve } = require('path')

export default defineConfig({
  plugins: [
    vue(),
    WindiCSS()
    // dts({
    //   rollupTypes: true // 匯總 type
    // })
  ],
  // external: [], // 排除的依赖包
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'main.ts'),
      name: 'ui', // required when output formats include "umd" or "iife".
      // the proper extensions will be added
      fileName: 'index',
      formats: ['cjs', 'es', 'iife', 'umd']
    }
    //  rollupOptions: {
    //     input,
    //     external,
    //     https://github.com/qmhc/vexip-ui/blob/main/vite.config.ts
    //     output: [
    //       {
    //         format: 'cjs',
    //         preserveModules: true,
    //         preserveModulesRoot: componentsDir,
    //         dir: 'lib',
    //         entryFileNames: '[name].js'
    //       },
    //       {
    //         format: 'es',
    //         preserveModules: true,
    //         preserveModulesRoot: componentsDir,
    //         dir: 'es',
    //         entryFileNames: '[name].mjs'
    //       }
    //     ],
    //     treeshake: false
    //   },
    // rollupOptions: require('./rollup.config')
  }
})
