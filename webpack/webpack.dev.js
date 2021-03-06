const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');
const ImgMinifyWebpackPlugin = require('../my_plugins/img_minify_webpack_plugin');
const CrudeTimingPlugin = require('../my_plugins/crude_time_plugin');
const fs = require('fs');
module.exports = merge(commonWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 9004,
    overlay: true,
    historyApiFallback: true, // 支持history路由模式
    hot: true,
    hotOnly:true,
    open: true,
    inline: true,
    disableHostCheck: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname,  '../cert/ca.key')),
      cert: fs.readFileSync(path.resolve(__dirname,  '../cert/ca.crt')),
      ca: fs.readFileSync(path.resolve(__dirname,  '../cert/ca.csr')),
    },
    host: '192.168.82.204',
    proxy: {
      '/react/api': {
        target: 'http://www.dell-lee.com', // 地址代理
        pathRewrite: {
          'header.json': 'demo.json' // 路径转发 header.json -> demo.json
        },
        changeOrigin: true, // 允许不同的origin，进行访问
        header: {
          // cookie
        }
      }
    }
  },
  plugins: [
    new CrudeTimingPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ImgMinifyWebpackPlugin({
      enabled: true,
      logged: true,
      cacheFolder: path.resolve('./cache'),
    })
  ],
});









