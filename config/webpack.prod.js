const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
  ]
}

module.exports = merge(baseConfig, prodConfig)
