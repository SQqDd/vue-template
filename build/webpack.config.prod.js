const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.config.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasureWebpackPlugin()
const env = require('../config/prod.env')

/** @type {import('webpack').Configuration} */

const prodWebpackConfig = {
  mode: 'production',

  devtool: 'nosources-source-map',

  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dist/dll/manifest.json')
    }),
    // 不删除 dll 目录
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**']
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dist/dll/*.dll.js')
    }),
    new webpack.DefinePlugin({
      'process.env': env
    })
  ],

  module: {
    rules: [
      {
        test: /\.(css|sass|scss)/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ["autoprefixer", {}]
              ]
            }
          }
        }, 'sass-loader']
      },
    ]
  }
}

module.exports = merge(baseWebpackConfig, prodWebpackConfig)

// SpeedMeasureWebpackPlugin 不能与 AddAssetHtmlWebpackPlugin 同时使用
// module.exports = smp.wrap(merge(baseWebpackConfig, prodWebpackConfig))
