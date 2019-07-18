const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config')

module.exports = merge(commonWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
    ],
});
