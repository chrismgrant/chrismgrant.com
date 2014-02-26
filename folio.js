var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/app'));
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});


app.listen(8000);