$(function($){

  var socket = io.connect();


  /*var $messageForm = $('#send-message');
  var $messageBox = $('#message');
  var $chat = $('#chat');

  $messageForm.submit(function(e){
    e.preventDefault();
    socket.emit('send message', $messageBox.val(), function(data){
      $chat.append('<span class="error"><b>' + data + '</span></br>');
    });
    $messageBox.val('');
  });

  socket.on('load old msgs', function(docs){
    for(var i=0;i<docs.length;i++){
      displayMessages(docs[i]);
    }
  });

  socket.on('new message', function(data){
    displayMessages(data);
  });

  socket.on('whisper', function(data){
    $chat.append('<span class="whisper"><b>' + data.nick + ': </b>' + data.msg + '</span></br>');
  });

  function displayMessages(data){
    $chat.append('<span class="message"><b>' + data.nick + ': </b>' + data.msg + '</span></br>');
  }*/

  /*socket.on('load old msgs', function(data){
    for(var i=0;i<data.length;i++){
      usrMsg.append('<span class="message"><b>' + data[i].userid + ': </b>' + data[i].msg + '</span></br>');
    }
  });*/

});
