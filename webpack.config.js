const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// module.export = {
//     mode: 'development',
//     context: path.resolve(__dirname, './src'),
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].js',
//     },
//     devServer: {
//         contentBase: path.join(__dirname, 'dist'),
//         port: 9000,
//         hot: true, // 热重载
//         overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
//       },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template:  '../index.html'
//         })
//     ],

// }
 

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, './src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                  }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true, // 热重载
        overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  '../index.html'
        })
    ],
};


