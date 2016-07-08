'use strict';

$(() => {
  let socket = io.connect();

  $('#sendButton').on('click', function() {
    let name = $('#name').val();
    let message = $('#message').val();
    $('#message').val('');
    socket.emit('sendMessage', {
      message: message,
      name: name
    });
  });

  socket.on('newMessage', function(message) {
    // new message sent from server
    // console.log('message:', message);
    let $li = $('<li>').text(`${message.name} - ${message.message}`);
    $('#chat').append($li);
  });
});

