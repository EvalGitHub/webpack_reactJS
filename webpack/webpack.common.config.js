const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
        extensions: ['.js', '.json', '.scss']
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
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|libs)/,
                use: [
                  'style-loader',
                  'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|libs)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  '../index.html'
        })
    ],
};


