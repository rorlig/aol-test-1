var express = require('express')
var app = express()

app.get('/', function (req, res) {
  console.log('got request from nginx');
  res.send('Hello World!');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})
