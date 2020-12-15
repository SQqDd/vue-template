const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    vue: ['vue', 'vue-router']
  },

  mode: 'production',

  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../dist/dll'),
    library: '[name]_dll' // 暴露给外部使用
  },

  plugins: [
    new webpack.DllPlugin({
      // name 和 library 一致
      name: '[name]_dll',
      path: path.resolve(__dirname, '../dist/dll/manifest.json')
    })
  ]
}
