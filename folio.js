var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/app'));
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

var port = Number(process.env.PORT || 8000)
app.listen(port, function(){
	console.log("Listening on " + port);
});