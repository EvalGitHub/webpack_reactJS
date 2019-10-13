// use express(node) create server to see the files after "npm run build"
const express = require('express');
const app = express();
const cors = require('cors');
// const proxy = require('http-proxy-middleware');


const env = process.env.front_env || 'development';
const initialContent = {
  development: 'development',
  production: 'production',
  staging: 'staging',
  test: 'test'
};

// cors setting [must before route setting]
const loginAdress = ['http://localhost:8004','http://192.168.1.103:8004']
const corsConfig = {
  "origin": loginAdress,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
  "credentials": true
}
app.options('*',cors(corsConfig))
app.all('*', cors(corsConfig));

app.use(express.json());

// route
app.use(express.static('./dist'));
app.get('/config', function(req, res){
  res.json(initialContent[env]);
});

// start app
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