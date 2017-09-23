
(function() {
  function UserModalInstanceCtrl($uibModalInstance, $cookies){}
      var user= this;
      this.setUsername = function () {
        this.blocChatCurrentUser= this.username;

        $uibModalInstance.close();
      };
  angular
      .module('blocChat')
      .controller('UserModalInstanceCtrl', ['$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
