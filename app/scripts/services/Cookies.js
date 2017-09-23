
(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
          var modalInstance= $uibModal.open({
                templateUrl: '/templates/username.html',
                size: 'sm',
                controller: 'UserModalInstanceCtrl as User',
            });

            modalInstance.result.then(function(name) {
               this.username = name;
               $uibModal.create(this.username);
           }, function() {
               console.log('Modal dismissed at ' + new Date());
           });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
