const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const HappyPack = require('happypack');
const ImageminPlugin = require('../my_plugins/img_webpack_plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const os = require('os');
const fs = require('fs'); 
// 获取系统cpu的最大核数
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const CopyPlugin = require('copy-webpack-plugin');
let config = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: [ 'react-hot-loader/patch', './index.tsx'],
    list: ['react-hot-loader/patch', './list.tsx']
  },
  output: {
    filename: '[name].js', // entry中入口文件，匹配filename
    chunkFilename: '[name].chunk.js', // 对于其他的非入口文件（间接引用的）
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    sourceMapFilename: "[name].js.map",
    globalObject: 'this'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'), // 路劲简写
    },
    extensions: ['.js', '.json', '.tsx', '.ts'], // 引入文件时候可省略的文件后缀
    mainFiles: ['index', 'indx'] // 可省略的文件名
  },
  optimization: {
    splitChunks: {
      chunks: "all", 
      name: 'vendors'
    }
  },
  resolveLoader: {
    modules: ['node_modules', path.join(__dirname, '../', 'my_loaders')]
  },
  module: {
    noParse: /lodash/,
    rules: [
      {
        test: /\.ext$/,  //  loader 的编译结果写入硬盘缓存，再次构建如果文件没有发生变化则会直接拉取缓存
        use: {
          loader: 'cache-loader', 
          // loader: 'happypack/loader?id=cache-loader', 
          options:{
            cacheDirectory: path.resolve('node_modules/.cache')
          }
        },
        include: path.resolve('src'),
      },
      {
        test: /\.worker\.tsx$/,
        use: { 
          loader: 'worker-loader',
          options: {
            inline: true
            // fallback: false
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          // loader: 'happypack/loader?id=babel-loader', 
          options: {
            presets: [
              [
                '@babel/preset-env', 
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                  },
                  corejs: 2,
                  useBuiltIns: 'usage'
                }
            ], '@babel/preset-react', '@babel/preset-typescript', ],
            plugins: ['react-hot-loader/babel']
          }
        }
      },
      // 自己写的loader
      {
        test: /\.js$/,
        loader: 'path-replace-loader',
        exclude: /(node_modules)/,
        options: {
          path: '@/assets/work.jpg',
          replacePath: 'https://kn-cdn.codemao.cn/nemoy/assets/breakf3c49ced.jpg'
        }
      },
      {
        test: /\.scss|.css$/,
        // exclude: /(node_modules|libs)/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
            // loader: 'happypack/loader?id=css-loader', 
            options: {
              importLoaders: 2,
              modules: true,
            }
          },
         // 'happypack/loader?id=sass-loader',
         'sass-loader',
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
        test: /\.(t|j)s(x?)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            // loader: 'happypack/loader?id=url-loader', 
            options: {
              outputPath: 'assets/',
              limit: 20024, // 20kb(20*1024)
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // new HappyPack({
    //   id: 'cache-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['cache-loader']
    // }),
    // new HappyPack({
    //   id: 'babel-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['babel-loader']
    // }),
    // new HappyPack({
    //   id: 'css-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['css-loader']
    // }),
    // new HappyPack({
    //   id: 'sass-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['sass-loader']
    // }),
    // new HappyPack({
    //   id: 'postcss-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['postcss-loader']
    // }),
    // new HappyPack({
    //   id: 'sass-resources-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['sass-resources-loader']
    // }),
    // new HappyPack({
    //   id: 'ts-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['ts-loader']
    // }),
    // new HappyPack({
    //   id: 'url-loader',
    //   threadPool: happyThreadPool,
    //   loaders: ['url-loader']
    // }),
  ],
};

const plugins = [
  new CleanWebpackPlugin(),
  new WebpackBuildNotifierPlugin({
    title: "My Project Webpack Build",
    logo: path.resolve("../assets/favicon.png"),
    suppressSuccess: true
  }),
  // new HtmlWebpackPlugin({
  //   template: '../index.html', // 文件模板
  //   filename: 'index.html', // 生成的文件名
  //   chunks: ['vendors~main', 'main'] // 需要引入的模块js
  // }),
  // new MiniCssExtractPlugin({
  //   filename: '[name].css',
  //   chunkFilename: '[name].[chunkhash:8].css',
  // }),
/*   new ImageminPlugin({
    plugins: [
      imageminMozjpeg({
        quality: 70,
        progressive: true
      })
    ]
  }),  */ 
  new CopyPlugin(
    {
      patterns:[
        {
          from: path.resolve(__dirname, '../sw.js'), 
          to:  path.resolve(__dirname, '../dist'),
        },
        {
          from: path.resolve(__dirname, '../404.html'), 
          to:  path.resolve(__dirname, '../dist'),
        },
        {
          from: path.resolve(__dirname, '../manifest.json'), 
          to:  path.resolve(__dirname, '../dist'),
        },
       /*  {
          from: path.resolve(__dirname, '../src/assets'), 
          to:  path.resolve(__dirname, '../dist'),
        }, */
      ]
    }
  ),
];

function mutipleEntry (config) {
  Object.keys(config.entry).forEach((item) => {
    plugins.push(
      new HtmlWebpackPlugin({
        template: '../index.html', // 文件模板
        filename: `${item}.html`, // 生成的文件名
        chunks: ['vendors', `${item}`] // 需要引入的模块js
      }),
    )
  })
  return plugins;
}

function createWebpackDll (plugins) {
  const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
  files.forEach(file => {
    if (/.*\.dll.js/.test(file)) {
      plugins.push(
        new AddAssetHtmlPlugin(
          { 
            filepath: path.resolve(__dirname, '../dll', file),
            includeSourcemap: false,
            hash: true
          },
        )
      )
    };
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(
        new webpack.DllReferencePlugin(
          { 
            manifest: path.resolve(__dirname, '../dll', file)
          },
        )
      )
    }
  });
  return plugins;
}

config.plugins = mutipleEntry(config);
config.plugins = createWebpackDll(plugins);

module.exports = config;
