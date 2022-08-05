/**
 * TODO: terser 壓縮
 * TODO: windi => uno
 * TODO: css 不用單獨引入
 * TODO: dts 另外打包
 * TODO: 拆分 historie 為另一個 repo，拿掉 vite
 */

import { readJSONSync } from 'fs-extra'
import { resolve } from 'path'
const { source, main, module } = readJSONSync(
  resolve(__dirname, './package.json'),
  'utf-8'
)

const basicConfig = {
  output:
  [
    // { file: main, format: 'cjs' },
    // {
    //   file: module,
    //   format: 'esm',
    //   globals: {
    //     vue: 'Vue' // 宣告全域變數
    //   }
    // }
    // { file: 'dist/bundle.js', format: 'iife', name: 'ui' } // 給瀏覽器
    // {
    //   file: 'dist/index.umd.js',
    //   format: 'umd'
    // }
  ]
}

export default [basicConfig]
