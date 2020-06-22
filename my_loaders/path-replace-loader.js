const fs = require('fs');
const loaderUtils = require('loader-utils')

module.exports = function(source) {
  this.cacheable && this.cacheable()

  const callback = this.async()
  const options = loaderUtils.getOptions(this) // 获取options参数

  if (source.indexOf(options.path) > -1) {
    console.log(this.resourcePath);
    const newPath = source.replace(options.path, options.resourcePath)

    fs.readFile(newPath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') return callback(null, source)
      }
      this.addDependency(newPath);
      callback(null, data);
    })
  } else {
    callback(null, source)
  }
}

module.exports.raw = true;