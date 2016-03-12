'use strict';

var router = angular.module('pop-it.router', []);

router.config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
}]);

router.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('login', {
            url :'/login',
            data: {
                authorities: [],
                pageTitle: 'Sign in'
            },
            views :  {
                '': {
                    templateUrl: 'scripts/app/login/login.html',
                    controller: 'LoginController',
                },
            },
        })

        .state('home', {
            url :'/',
            data: {
                authorities: [],
                pageTitle: 'Home'
            },
            views :  {
                '': {
                    templateUrl: 'scripts/app/home/home.html',
                    controller: 'HomeController',
                },
            },
        })
}]);
