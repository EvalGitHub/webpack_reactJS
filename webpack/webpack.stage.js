const {CleanWebpackPlugin}= require('clean-webpack-plugin')
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config')
const webpack = require('webpack')
module.exports = merge(commonWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "'staging'" 
         })
    ],
});
