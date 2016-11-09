var express = require('express');

var app = express();

var connections = [];
var users = [];

app.use(express.static('./public'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

  socket.once('disconnect', function(){
    users = users.filter( user => user.id !== this.id);

    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log('Client disconnected');
    io.emit('disconnect', users);
  });

  socket.on('messageAdded', function(payload){
    io.emit('messageAdded', payload);
  });

  socket.on('userJoined', function(payload){
    var newUser = {
      id: this.id,
      name: payload.name
    };

    users.push(newUser);
    io.emit('userJoined', users);
  })

  connections.push(socket);
  console.log('connected: %s socket connected', connections.length);
});


console.log('server is running on 3000');
