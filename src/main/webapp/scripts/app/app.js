var app = angular.module('pop-it', [
    'ngCookies',
    'ui.router',
    'angular-google-gapi',

    'pop-it.router',
    'pop-it.controller'

]);

app.run(['GAuth', 'GApi', 'GData', '$state', '$rootScope', '$window', '$cookies',
    function(GAuth, GApi, GData, $state, $rootScope, $window, $cookies) {

        $rootScope.gdata = GData;

        var CLIENT = '373328618363-p4p5vje6oldkp8319mb7blajqlfv6lq1.apps.googleusercontent.com';
        var BASE;
        if($window.location.hostname == 'localhost') {
            BASE = '//localhost:8080/_ah/api';
        }

        GApi.load('myContactApi', 'v1', BASE);
        GAuth.setClient(CLIENT);
        GAuth.setScope('https://www.googleapis.com/auth/userinfo.email');

        var currentUser = $cookies.get('userId');
        if(currentUser) {
            GData.setUserId(currentUser);
            GAuth.checkAuth().then(
                function () {
                    if($state.includes('login'))
                        $state.go('home');
                },
                function() {
                    $state.go('login');
                }
            );
        } else {
            $state.go('login');
        }



        $rootScope.logout = function() {
            GAuth.logout().then(function () {
                $cookies.remove('userId');
                $state.go('login');
            });
        };
    }
]);
