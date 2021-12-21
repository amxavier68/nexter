const path = require('path');

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

console.log(__dirname);

const prodConfig = {
  mode: 'production',

  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },

  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
          ],
        },
      },
    })
  ],

  optimization: {
    concatenateModules: true,
    flagIncludedChunks: true,
    minimize: true,
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },

}

module.exports = merge(commonConfig, prodConfig);