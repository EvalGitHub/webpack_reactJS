// 对于长久不变的第三方库，使用dll打包，优化打包速度
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    // 定义程序中打包公共文件的入口文件vendor.js
    'react': ['react', 'react-dom'],
    'react-router': ['react-router', 'react-router-dom']
  },

  output: {
    path: path.resolve(__dirname, '..', 'dll'),
    filename: '[name].dll.js',
    library: '[name]_[hash]', // 暴露这个库,
    libraryTarget: 'this'
  },

  plugins: [
    new webpack.DllPlugin({
      // 定义程序中打包公共文件的入口文件vendor.js
      context: process.cwd(),
      // 分析库文件的映射关系
      path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),
      name: '[name]_[hash]' // 与output的library同名
    })
  ]
}

