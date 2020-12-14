const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime'],
            cacheDirectory: true
          }
        }
      },

      // {
      //   test: /\.(css|less)/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', {
      //     loader: 'postcss-loader',
      //     options: {
      //       postcssOptions: {
      //         plugins: [
      //           ["autoprefixer", {}]
      //         ]
      //       }
      //     }
      //   }, 'less-loader']
      // },

      // {
      //   test: /\.(css|sass|scss)/,
      //   exclude: /node_modules/,
      //   use: ['style-loader', 'css-loader', {
      //     loader: 'postcss-loader',
      //     options: {
      //       postcssOptions: {
      //         plugins: [
      //           ["autoprefixer", {}]
      //         ]
      //       }
      //     }
      //   }, 'sass-loader']
      // },

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

      {
        test: /\.(jpe?g|png|webp|svg|gif)/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            esModule: false,
            name: 'assets/img/[name]_[hash:6].[ext]'
          }
        }
      },

      {
        test: /\.(eot|ttf|woff|woff2)/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            esModule: false,
            name: 'assets/fonts/[name]_[hash:6].[ext]'
          }
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}
