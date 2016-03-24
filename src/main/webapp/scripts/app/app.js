var app = angular.module('pop-it', [
    'ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer',

    'pop-it.router',
    'pop-it.controller'

]);

app.config(function($authProvider) {

    $authProvider.facebook({
      clientId: '1090940347593289'
    });

    $authProvider.google({
      clientId: '373328618363-p4p5vje6oldkp8319mb7blajqlfv6lq1.apps.googleusercontent.com'
    });

   function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.reject();
        } else {
          deferred.resolve();
        }
        return deferred.promise;
      }

      function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
          deferred.resolve();
        } else {
          $location.path('/login');
        }
        return deferred.promise;
      }
  });
