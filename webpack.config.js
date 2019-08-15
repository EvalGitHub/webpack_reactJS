let webpackConfig = {
  "development": require('./webpack/webpack.dev.js'),
  "production": require('./webpack/webpack.pro'),
  "stage": require('./webpack/webpack.stage'),
  "test": require('./webpack/webpack.test'),
}

module.exports = env => {
  return webpackConfig[env.NODE_ENV]
}
