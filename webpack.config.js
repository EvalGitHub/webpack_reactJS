let webpackConfig = {
  'development': require('./webpack/webpack.dev.js'),
  'production': require('./webpack/webpack.pro')
}
module.exports = env => {
  return webpackConfig[env.NODE_ENV || 'development']
}
