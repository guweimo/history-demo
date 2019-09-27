const merge = require('webpack-merge')
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prodConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin()
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ],
  optimization: {
    splitChunks: {
        minSize: 0,
        cacheGroups: {
            commons: {
                name: 'commons',
                chunks: 'all',
                minChunks: 2
            }
        }
    }
  },
}

module.exports = merge(baseConfig, prodConfig)
