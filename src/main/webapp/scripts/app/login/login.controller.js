'use strict';

var module = angular.module('LoginController',[]);

module.controller('LoginController', ['$scope', 'GAuth', 'GData', '$state', '$cookies', function clientList($scope, GAuth, GData, $state, $cookies) {
    	if(GData.isLogin()){
    		$state.go('home');
    	}

        var ifLogin = function() {
            $cookies.put('userId', GData.getUserId());
            $state.go('home');
        };

        $scope.doLogin = function() {
            GAuth.checkAuth().then(
                function () {
                    ifLogin();
                },
                function() {
                    GAuth.login().then(function(){
                        ifLogin();
                    });
                }
            );
        };
    }
]);
