const { resolve } = require('path')
const { readJSONSync } = require('fs-extra')

const componentDir = resolve(__dirname, 'src/atoms')

const { source } = readJSONSync(
  resolve(__dirname, './package.json'),
  'utf-8'
)

module.exports = {
  input: [source],
  external: ['vue', '@vueuse/core'], // 不打包進去的外部依賴
  output: [
    /**
     * 打包一個 index.esm 給全局引入
     */
    {
      format: 'esm',
      dir: 'dist',
      entryFileNames: 'index.mjs'
    },
    /**
     * 打包一個 components/*.mjs 可以單獨引入
     */
    {
      format: 'esm',
      preserveModules: true, // 保留原始檔案結構
      preserveModulesRoot: componentDir,
      dir: 'dist/components',
      entryFileNames: '[name].mjs'
    }
  ]
}
