(function() {
    function BlocChatCookies($cookies, $uibModal) {

      //gets stored username if applicable
        var currentUser = $cookies.get('blocChatCurrentUser');

        //if no stored username then prompt opens up to get a username
        if (!currentUser || currentUser === '') {
          $uibModal.open({
                templateUrl: '/templates/username.html',
                size: 'sm',
                controller: 'UserModalInstanceCtrl as User',
                backdrop: 'static' //prevents backdrop click error
            });
    }
}
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
