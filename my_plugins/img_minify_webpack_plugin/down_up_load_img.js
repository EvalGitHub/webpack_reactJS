const Https = require('https');
const Url = require('url');

const {RandomHeader} = require('./random_header');

exports.UploadImg = function(file) {
  const opts = RandomHeader();
  return new Promise((resolve, reject) => {
    const req = Https.request(opts, res => res.on('data', data => {
      const obj = JSON.parse(data.toString());
      obj.error ? reject(obj.message) : resolve(obj);
    }))
    req.write(file, "binary");
    req.on("error", e => reject(e));
    req.end();
  })
}

exports.DownloadImg = function(url) {
  const opts = new Url.URL(url); 
  return new Promise((resolve, reject) => {
    const req = Https.request(opts, res => {
      let file = " ";
      res.setEncoding('binary');
      res.on('data', chunk => file += chunk);
      res.on('end', () => resolve(file));
    })
    req.on('error', e => reject(e));
    req.end();
  })
}
