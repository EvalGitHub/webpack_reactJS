// 对于长久不变的第三方库，使用dll打包，优化打包速度
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    'thirdlibrary': ['react', 'react-router', 'react-dom', 'react-router-dom', 'axios']
  },

  output: {
    path: path.resolve(__dirname, '..', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]',
    libraryTarget: 'this'
  },

  plugins: [
    new webpack.DllPlugin({
      // 定义程序中打包公共文件的入口文件vendor.js
      context: process.cwd(),
      path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),
      name: '[name]_[hash]'
    })
  ]
}

