// webpack 基础配置
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const loaders = require('./loaders')
const basePlugins = require('./base.plugins')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function join(dir) {
  return path.join(__dirname, '..', dir)
}

/** @type {import('webpack').Configuration} */
const baseWebpackConfig = {
  mode: 'production',

  entry: './src/index.js',

  output: {
    path: join('dist'),
    filename: 'bundle.[hash:6].js'
  },

  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join('public/index.html'),
      filename: 'index.html',
      config: {}
    }),
    // new AddAssetHtmlCdnWebpackPlugin(true, cdnConfig),
    new CopyWebpackPlugin({
      patterns: ['public']
    })
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: ['vue-loader']
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}

module.exports = merge(baseWebpackConfig, loaders, basePlugins)
