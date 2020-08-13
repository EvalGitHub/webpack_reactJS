const SchemaUtils = require('schema-utils');
const ora = require('ora');
const map = require('lodash.map')

const { PLUGIN_NAME, IMG_REGEXP } = require('./getting');

const Schema = require('./schema.json');
const { compilation } = require('webpack');

const CompressImg = require( './comprocess_img');

module.exports = class ImgMinifyWebpackPlugin {
  constructor(opts) {
    this.opts = opts;
  }
  apply(compiler) {
    const {enabled, logged} = this.opts;
    SchemaUtils(Schema, this.opts, {name: PLUGIN_NAME});

    const onEmit = async (compilation, callback) => {
      const imgs = Object.keys(compilation.assets).filter(v => IMG_REGEXP.test(v));
      if (!imgs.length) return Promise.resolve();
      
      const promises = imgs.map(v => CompressImg(compilation, v));
      try {
        const spinner = ora("Image is compressing......").start();
        await Promise.all([...promises]).then(res => {
          spinner.stop();
          logged && res.forEach(v => console.log(v));
        });
        callback();
      } catch(err) {
        callback(err);
      }
    };

    enabled && compiler.hooks.emit.tapAsync(PLUGIN_NAME, onEmit);
  }
}