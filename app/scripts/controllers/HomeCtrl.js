(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
        var home = this;
        home.rooms = Room.all;
        home.currentRoom = null;

        home.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };

        home.setCurrentRoom = function (room) {
            home.currentRoom = room;
            home.messages = Message.getByRoomId(home.currentRoom.$id);
        };

        home.sendMessage = function () {
            home.newMessage.roomId = home.currentRoom.$id;
            home.newMessage.username = home.$cookies.get('blocChatCurrentUser');
            Message.send(home.newMessage);
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', '$uibModal', '$cookies', HomeCtrl]);
})();
