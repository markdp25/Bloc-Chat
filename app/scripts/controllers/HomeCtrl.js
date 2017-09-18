(function() {
    function HomeCtrl(Message, Room, $uibModal) {
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
        home.setCurrentRoom = function(room) {
          home.currentRoom = room;
          home.messages = Message.getByRoomId(home.currentRoom.$id);
          console.log(home.messages);
        };

}

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room','$uibModal', HomeCtrl]);
})();
