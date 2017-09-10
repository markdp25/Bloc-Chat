(function() {
    function MessageCtrl ($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        return Message;
    }
    var home= this;
    home.setCurrentRoom = function(room) {
      home.currentRoom = room;
      home.messages = Message.getByRoomId(home.currentRoom.$id);
      console.log(home.messages);
    };

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message','$firebaseArray', MessageCtrl]);
})();
