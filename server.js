var express = require('express');

var app = express();

var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

  socket.once('disconnect', function(){
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Client disconnected');
  });

  socket.on('messageAdded', function(payload){
    io.emit('messageAdded', payload);
  });

  connections.push(socket);
  console.log('connected: %s socket connected', connections.length);
});


console.log('server is running on 3000');
