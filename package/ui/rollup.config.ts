const { resolve } = require('path')

module.exports = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    },
    dir: resolve(__dirname, 'dist'),
    format: 'esm'
  }
}
