const { compilation } = require("webpack");

let CrudeTimePlugin = function() {};

CrudeTimePlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', (compilation) => {
    let startOptimizePhase;

    compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
      startOptimizePhase = Date.now();
      callback();
    });

    compilation.plugin('after-optimize-chunk-assets', () => {
      const optimizePhaseDuartion = Date.now() - startOptimizePhase;
      console.log('optimize-chunk-assets phase duation: ' + optimizePhaseDuartion);
    })
  })
} 

module.exports = CrudeTimePlugin;