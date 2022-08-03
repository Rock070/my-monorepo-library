/**
 * TODO: terser 壓縮
 * TODO: windi => uno
 * TODO: css 不用單獨引入
 * TODO: dts 另外打包
 */

import { readJSONSync } from 'fs-extra'
import { resolve } from 'path'
import WindiCSS from 'rollup-plugin-windicss'
import vue from 'rollup-plugin-vue'
import dts from 'rollup-plugin-dts'
import typescript from 'rollup-plugin-typescript2'

const { source } = readJSONSync(
  resolve(__dirname, './package.json'),
  'utf-8'
)

const basicConfig = {
  plugins: [
    WindiCSS(
      { preflight: false }
    ),
    vue(),
    typescript(
      {
        clean: true,
        useTsconfigDeclarationDir: true
      }
    )
  ],
  external: ['vue'],
  input: source,
  output:
  [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ]
}

const dtsConfig = {
  input: source,
  output: {
    file: 'dist/index.d.ts',
    format: 'es'
  },
  plugins: [
    WindiCSS(
      { preflight: false }
    ),
    dts(),
    vue(),
    typescript()
  ]
}

export default [basicConfig]
