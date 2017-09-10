(function() {
     function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
             .state('chat', {
                  url: '/chat',
                  controller: 'MessageCtrl as chat',
                  templateUrl: '/templates/message.html'
             });




     }

     angular
         .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
         .config(config);
 })();
