// use express(node) create server to see the files after "npm run build"
const express = require('express');
const app = express();
const env = process.env.front_env || 'development';
const initialContent = {
  development: 'development',
  production: 'production',
  staging: 'staging',
  test: 'test'
};
app.use(express.static('./dist'));
app.get('/config', function(req, res){
  res.json(initialContent[env]);
});

function startApp () {
  app.listen(5000,function(err){
    if(err){
      console.log(err);
      return;
    }
    console.log('> Listening at  http://localhost: '+ 5000 + '\n')
  });
};
startApp();