const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HappyPack = require('happypack');
const os = require('os');
// 获取系统cpu的最大核数
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

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
    extensions: ['.js', '.json', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.ext$/,  //  loader 的编译结果写入硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存
        use: {
          // loader: 'cache-loader', 
          loader: 'happypack/loader?id=cache-loader', 
          options:{
            cacheDirectory: path.resolve('node_modules/.cache')
          }
        },
        include: path.resolve('src'),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          // loader: 'babel-loader',
          loader: 'happypack/loader?id=babel-loader', 
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
            // loader: 'css-loader',
            loader: 'happypack/loader?id=css-loader', 
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
            // loader: 'happypack/loader?id=css-loader', 
            options: {
              importLoaders: 2,
              modules: true,
            }
          },
         'happypack/loader?id=sass-loader',
          // 'sass-loader',
          {
            loader: 'postcss-loader',
            // loader: 'happypack/loader?id=postcss-loader', 
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
        // use: 'happypack/loader?id=ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            // loader: 'url-loader',
            loader: 'happypack/loader?id=url-loader', 
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
    new HappyPack({
      id: 'cache-loader',
      threadPool: happyThreadPool,
      loaders: ['cache-loader']
    }),
    new HappyPack({
      id: 'babel-loader',
      threadPool: happyThreadPool,
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'css-loader',
      threadPool: happyThreadPool,
      loaders: ['css-loader']
    }),
    new HappyPack({
      id: 'sass-loader',
      threadPool: happyThreadPool,
      loaders: ['sass-loader']
    }),
    new HappyPack({
      id: 'postcss-loader',
      threadPool: happyThreadPool,
      loaders: ['postcss-loader']
    }),
    new HappyPack({
      id: 'sass-resources-loader',
      threadPool: happyThreadPool,
      loaders: ['sass-resources-loader']
    }),
    new HappyPack({
      id: 'ts-loader',
      threadPool: happyThreadPool,
      loaders: ['ts-loader']
    }),
    new HappyPack({
      id: 'url-loader',
      threadPool: happyThreadPool,
      loaders: ['url-loader']
    }),

    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      // logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    }),
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


