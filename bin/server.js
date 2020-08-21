// use express(node) create server to see the files after "npm run build"
const express = require('express');
const app = express();
const cors = require('cors');
const history = require('connect-history-api-fallback');
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');

// const proxy = require('http-proxy-middleware');


const env = process.env.front_env || 'development';
const initialContent = {
  development: 'development',
  production: 'production',
  staging: 'staging',
  test: 'test'
};

// cors setting [must before route setting]
const loginAdress = ['http://localhost:9004','http://192.168.1.103:8004']
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
app.use(history());
// route
app.use(express.static('./dist'));

app.get('/message', function(req, res) {
  res.header('Content-Type','text/event-stream'),
  res.header('Cache-Control','no-cache'),
  res.header('Connection','keep-alive'),
  // res.write(200, {
  //   'Content-Type': 'text/event-stream',
  //   'Cache-Control': 'no-cache',
  //   'Connection': 'keep-alive'
  // }); 
  // 
  setInterval(function(){
    res.write('data: ' + +new Date() + '\n\n');
  }, 1000);
})

app.get('/config', function(req, res){
  res.json(initialContent[env]);
});

app.get('/get_data', function(req, res) {
  res.json({
    data: [1,2,3,4,5,555,6, 777],
    msg: 'this is array data',
  });
})

let ketPath = path.resolve(__dirname,  '../cert/ca.key');
let certPath = path.resolve(__dirname,  '../cert/ca.crt');
const options = {
  key: fs.readFileSync(ketPath),
  cert: fs.readFileSync(certPath),
}

// start app
function startApp () {
  spdy
  .createServer(options, app).listen(5001,function(err){
    if(err){
      console.log(err);
      return;
    }
    console.log('> Listening at  https://localhost: '+ 5001 + '\n')
  });
};
startApp();