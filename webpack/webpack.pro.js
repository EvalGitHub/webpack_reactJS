const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob-all');
const PurifyCSSPlugin = require('purifycss-webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const SentryPlugin = require('@sentry/webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
module.exports = merge(commonWebpackConfig, {
  mode: 'production',
  // devtool: 'chep-module-source-map',
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    publicPath: '/',
    path: path.resolve(__dirname, '../dist'),
    sourceMapFilename: "[name].js.map"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        safe: true,
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, '../dist'),
      // 需要进行预渲染的路由路径 我这里做的是首页
      routes: ['/', '/css_grid_usage'],
      // html文件压缩
      minify: {
          minifyCSS: true, // css压缩
          removeComments: true // 移除注释
      },
      renderer: new Renderer({
          // Optional - The name of the property to add to the window object with the contents of `inject`.
          injectProperty: '__PRERENDER_INJECTED',
          // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
          inject: {
            foo: 'bar'
          },
          renderAfterDocumentEvent: 'render-event'
          // 在 main.js 中 new Vue({ mounted () {document.dispatchEvent(new Event('render-event'))}})，两者的事件名称要对应上。
          // renderAfterDocumentEvent: 'render-event'
      })
    }),
    // new PurifyCSSPlugin({
    //     paths: glob.sync([
    //       path.join(__dirname, '../src/**/*.tsx'),
    //       // path.join(__dirname, './src/components/*/*.html')
    //     ]),
    //     styleExtensions:['.css']
    // }),
   /*  new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        ie8: false,
        output: {
          comments: false,
          beautify: false,
        },
        warnings: false
      }
    }), */
    // new SentryPlugin({
    //   include: './dist',
    //   release: 'release@1.4',
    //   ignore: ['node_modules', 'webpack.config.js','webpack'],
    //   urlPrefix: '~/'
    // })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});