const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')
const config = require('../config')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devConfig = merge(baseConfig, {
  mode: 'development',
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
      contentBase: false,
      stats: 'errors-only',
      host: HOST || config.dev.host,
      port: PORT || config.dev.port,
      open: config.dev.autoOpenBrowser,
      overlay: config.dev.errorOverlay
        ? { warnings: false, errors: true }
        : false,
      publicPath: config.dev.assetsPublicPath,
      proxy: config.dev.proxyTable,
      // quiet: true, // necessary for FriendlyErrorsPlugin
      watchOptions: {
        poll: config.dev.poll,
      }
  },
  devtool: config.dev.devtool,
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devConfig.devServer.port = port
      resolve(devConfig)
    }
  })
})
