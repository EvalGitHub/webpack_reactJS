const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config')

module.exports = merge(commonWebpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 9004,
        overlay: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        inline: true,
        host: '192.168.1.103'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
});
