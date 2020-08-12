
const Fs = require("fs");
const Path = require("path");
const Chalk = require("chalk");
const Figures = require("figures");
const { ByteSize, RoundNum } = require("trample/node");

const { UploadImg, DownloadImg } = require('./down_up_load_img');

async function CompressImg(assets, path) {
  try {
    const file = assets[path].source(); // 获取图片资源
    const obj = await UploadImg(file);
    const data = await DownloadImg(obj.output.url);
    console.log('obj......', obj);
    const oldSize = Chalk.redBright(ByteSize(obj.input.size));
    const newSize = Chalk.greenBright(ByteSize(obj.output.size));
    const ratio = Chalk.blueBright(RoundNum(1 - obj.output.ratio, 2, true));
    const dpath = assets[path].existsAt;
    const msg = `${Figures.tick} Compressed [${Chalk.yellowBright(path)}] completed: Old Size ${oldSize}, New Size ${newSize}, Optimization Ratio ${ratio}`;
    Fs.writeFileSync(dpath, data, "binary");
    return Promise.resolve(msg);
  } catch (err) {
    const msg = `${Figures.cross} Compressed [${Chalk.yellowBright(path)}] failed: ${Chalk.redBright(err)}`;
    return Promise.resolve(msg);
  }
}

module.exports = CompressImg;