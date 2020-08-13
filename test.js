const MemoryFileSystem = require('memory-fs');
const fs = new MemoryFileSystem({});

fs.mkdirpSync("/a/test/dir");
fs.writeFileSync("/a/test/dir/file.txt", "Hello World");
fs.readFileSync("/a/test/dir/file.txt"); 

console.log(fs.statSync("/a/test/dir").isDirectory());