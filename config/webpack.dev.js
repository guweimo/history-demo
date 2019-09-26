const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpack = require('webpack')

const devConfig = {
  mode: 'development',
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
      contentBase: './dist',
      host: true,
      stats: 'errors-only',
  },
  devtool: 'cheap-source-map',
}

module.exports = merge(baseConfig, devConfig)
