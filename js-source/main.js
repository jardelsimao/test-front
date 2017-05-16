var app = angular.module("trezo", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/js/templates/home.html',
            controller: 'homeCtrl'
        })

        .state('profile', {
            url: '/profile',
            templateUrl: '/js/templates/profile.html',
            controller: 'profileCtrl'
        });

});
