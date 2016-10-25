var express = require('express');

var app = express();

var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('connected: %s socket connected', connections.length);
});


console.log('server is running on 3000');
