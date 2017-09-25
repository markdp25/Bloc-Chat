(function() {
    function UserModalInstanceCtrl($uibModalInstance, $cookies) {
      
// this.setUserName will save the username the user enters in the prompt
    this.setUserName = function() {
        $cookies.put('blocChatCurrentUser', this.username);
        $uibModalInstance.close();
        console.log(this.username);
      };
    }

  angular
    .module('blocChat')
    .controller('UserModalInstanceCtrl', ['$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
