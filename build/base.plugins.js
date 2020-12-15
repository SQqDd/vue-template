const TinyimgWebpackPlugin = require('tinyimg-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  plugins: [
    new TinyimgWebpackPlugin({
      enabled: isDev ? false : true,
      logged: true
    })
  ]
}
