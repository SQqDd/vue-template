const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.config.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = require('../config/dev.env')

function join(dir) {
  return path.join(__dirname, '..', dir)
}

/** @type {import('webpack').Configuration} */
const devWebpackConfig = {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join('public/index.html'),
      filename: 'index.html',
      config: {},
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false,
        // removeComments: true, // 删除注释
        // removeRedundantAttributes: true, // 删除冗余属性
        // removeScriptTypeAttributes: true, // 删除脚本类型属性
        // useShortDoctype: true, // 使用短的Doctype
      },
      hash: true // 破坏缓存，默认为false
    }),
    new webpack.DefinePlugin({
      'process.env': env
    })
  ],

  devServer: {
    port: 3000,
    compress: true,
    hotOnly: true,
    stats: 'errors-only',
    clientLogLevel: "silent",
    historyApiFallback: true, // 使用 HTML 5 History 的时候要开启
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        // pathRewrite: {
        //   '^/api': '/api'
        // },
        changeOrigin: true
      }
    }
  }
}

module.exports = merge(baseWebpackConfig, devWebpackConfig)
