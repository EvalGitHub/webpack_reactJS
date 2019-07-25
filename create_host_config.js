let componentName = process.argv.slice(2);
var fs = require("fs");
const initialContent = {
    production: `export const envConfig = {
        host: 'www.baidu.com/product',
        port: '8080',
    }`,
    development: `export const envConfig = {
        host: 'www.wangyi.com/dev/',
        port: '9090',
    }`
}

if (componentName[0]) {
    initCreateComponent(componentName[0])
}

function initCreateComponent(contenKey) {
    let fileName = './config.js'
    fs.open(fileName, 'w+', function (err, fd) {
        if (err) {
          return false;
        }
        addContent(fileName, initialContent[contenKey], fd)
    });
}

function addContent(fileName, initialContent, fd) {
    fs.appendFile(fileName, initialContent, (err) => {
      if (err) {
        console.log("appendFile fail");
        return false;
      }
      // getContentSync(componentFileName)
      closeFile(fd)
    })
}

// close file 
function closeFile(fd) {
    fs.close(fd, () => {
      return true
    })
}

