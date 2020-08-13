const fs = require("fs");
const path = require('path')
const mkdirp = require('mkdirp')
const promisify = require('util.promisify')
const writeFileAsync = promisify(fs.writeFile)
const crypto = require('crypto');
const readFile = promisify(fs.readFile)

const mkdirpAsync = promisify(mkdirp)

async function writeFile (filename, buffer) {
  const directory = path.dirname(filename)
  // if the directory doesn't exist, create it
  if (!(await exists(directory))) {
    await mkdirpAsync(directory)
  }

  return writeFileAsync(filename, buffer)
}

function hashContent (content) {
  return crypto.createHash('sha1').update(content).digest('hex')
}

async function getFromCacheIfPossible (cacheFolder, content, elseFunc) {
  let cacheFilePath
  if (cacheFolder !== null) {
    cacheFilePath = path.resolve(cacheFolder, hashContent(content))
    if (await exists(cacheFilePath)) {
      return readFile(cacheFilePath)
    }
  }

  const fileBuffer = await elseFunc()
  if (cacheFolder !== null) {
    await writeFile(cacheFilePath, fileBuffer)
  }
  return fileBuffer
}

async function exists (directory) {
  return new Promise((resolve, reject) => {
    fs.access(directory, fs.constants.R_OK | fs.constants.W_OK, (err) => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

module.exports = {
  writeFile, getFromCacheIfPossible, exists
};