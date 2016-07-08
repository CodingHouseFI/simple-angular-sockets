'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, socket) {
  console.log('mainCtrl!');

  $scope.messages = [];

  $scope.sendMessage = () => {
    socket.emit('sendMessage', $scope.newMessage);
  };

  socket.on('newMessage', function(message) {
    console.log('message:', message);
    $scope.messages.push(message);
  });
});
