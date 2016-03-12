var router = angular.module('pop-it.router', []);

router
    .config(['$urlRouterProvider',
        function($urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");
        }]);

router
    .config(['$stateProvider',
        function($stateProvider) {

            $stateProvider

                .state('login', {
                    url :'/login',
                    views :  {
                        '': {
                            templateUrl: 'partials/login.html',
                            controller: 'pop-it.controller.login',
                        },
                    },
                })

                .state('home', {
                    url :'/',
                    views :  {
                        '': {
                            controller: 'pop-it.controller.home',
                            templateUrl: 'partials/home.html',
                        },
                    },
                })

                .state('add', {
                    url :'/add',
                    views :  {
                        '': {
                            controller: 'pop-it.controller.add',
                            templateUrl: 'partials/add.html',
                        },
                    },
                })

                .state('edit', {
                    url :'/edit/{id}',
                    views :  {
                        '': {
                            controller: 'pop-it.controller.edit',
                            templateUrl: 'partials/edit.html',
                        },
                    },
                })

    }])