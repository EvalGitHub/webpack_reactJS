
const RawSource = require('webpack-sources/lib/RawSource');
const Fs = require("fs");
const Path = require("path");
const Chalk = require("chalk");
const Figures = require("figures");
// const MemoryFileSystem = require('memory-fs');
// const myFs = new MemoryFileSystem();
const { ByteSize, RoundNum } = require("trample/node");

const { UploadImg, DownloadImg } = require('./down_up_load_img');

const {exists, getFromCacheIfPossible} = require('./file_handle');

function setMemoryFsFun(compiler) {
  const isMemoryFs = compiler.outputFileSystem instanceof MemoryFileSystem;
  fileSystem = !isMemoryFs && new MemoryFileSystem();
  context.fs = fileSystem;
}

async function CompressImg(compilation, path) {
  let assets = compilation.assets;
  try {
    const file = assets[path].source(); // 获取图片资源
    const obj = await UploadImg(file); // 返回文件的信息{size, type, width, height, ratio, url, }
    const oldSize = Chalk.redBright(ByteSize(obj.input.size));
    const newSize = Chalk.greenBright(ByteSize(obj.output.size));
    const ratio = Chalk.blueBright(RoundNum(1 - obj.output.ratio, 2, true));

    const data = await DownloadImg(obj.output.url); 
    const dpath = assets[path].existsAt;
    
    let optimizedImageBuffer = await getFromCacheIfPossible(cacheFolder = null, file, () => {
      if (Buffer.from(data, 'utf8').length > Buffer.from(file, 'utf8').length) {
        return Buffer.from(file, 'utf8');
      }
      return Buffer.from(data, 'utf8');
    });

    compilation.assets[path] = new RawSource(optimizedImageBuffer); // 更换资源内容
    Fs.existsSync(dpath, async (exists) => {
      if (!exists) {
        await Fs.mkdirSync(dpath);
      }
      Fs.writeFileSync(dpath, data); // 将文件写到硬盘
    });
    const msg = `${Figures.tick} Compressed [${Chalk.yellowBright(dpath)}] completed: Old Size ${oldSize}, New Size ${newSize}, Optimization Ratio ${ratio}`;
    return Promise.resolve(msg);
  } catch (err) {
    const msg = `${Figures.cross} Compressed [${Chalk.yellowBright(dpath)}] failed: ${Chalk.redBright(err)}`;
    return Promise.resolve(msg);
  }
}

module.exports = CompressImg;