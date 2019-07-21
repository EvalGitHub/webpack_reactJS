// use express(node) create server to see the files after "npm run build"
var  express = require('express')
var app = express();
app.use(express.static('./dist'));
module.exports = app.listen(9002,function(err){
  if(err){
    return
  }
  console.log('> Listening at  http://localhost: '+ 9002 + '\n')
});