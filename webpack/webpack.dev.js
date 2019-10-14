const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');
 
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
    // host: '192.168.0.6',
    // host: '192.168.108.64'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
});