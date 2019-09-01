const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
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
    extensions: ['.js', '.json', '.scss', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|libs)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              namedExport: true
            }
          },
        ],
      },
      {
        test: /\.scss|.css$/,
        // exclude: /(node_modules|libs)/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            }
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              parser: 'postcss-scss',
              plugin: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, '../src/scss/mixin.scss')
              ]
            }
          }
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'assets/',
              limit: 20024, // 20kb(20*1024)
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].css',
    }),
    new AddAssetHtmlPlugin(
      // 对应的 dll 文件路径
      { 
        filepath: path.resolve(__dirname, '../dll/thirdlibrary.dll.js'),
        includeSourcemap: false,
        hash: true
      },
    ),
    new webpack.DllReferencePlugin(
      {
        manifest: path.resolve(__dirname, '..', 'dll/thirdlibrary-manifest.json')
      }
    )
  ],
};


