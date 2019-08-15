const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: './index.tsx',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
        extensions: ['.js', '.json', '.scss', '.tsx']
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
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  '../index.html'
        })
    ],
};


