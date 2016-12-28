var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var users = {};

server.listen(3000);

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function(socket){
  socket.on('new user', function(data, callback){
    if(data in users){
      callback(false);
    } else {
      callback(true);
      socket.nickname = data;
      users[socket.nickname] = socket;
      updateNickNames();
    }
  });
  socket.on('send message', function(data, callback){
    var msg = data.trim();
    if(msg.substr(0,3) === '/w '){
      msg = msg.substr(3);
      var index = msg.indexOf(' ');
      if(index != -1){
        var name = msg.substr(0, index);
        var msg = msg.substring(index + 1);
        if(name in users){
          users[name].emit('whisper', {msg: msg, nick: socket.nickname})
        } else {
          callback('Error! Enter a valid user');
        }
      } else {
        callback('Error! PLease entera message for your user');
      }
    } else {
        io.sockets.emit('new message', {msg: msg, nick: socket.nickname});
    }
  });
  socket.on('disconnect', function(data){
    if(!socket.nickname) return;
    delete users[socket.nickname];
    updateNickNames();
  });
  function updateNickNames(){
    io.sockets.emit('usernames', Object.keys(users));
  }
});
