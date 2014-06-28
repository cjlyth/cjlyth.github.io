'use strict';

angular.module('resumeApp', [
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'resumeApp.filters',
  'resumeApp.controllers'
])

.factory('moment', ['$window', '$q', function ($window, $q) {
  if ($window.moment) {
    return $window.moment;
  } else {
    console.log('$window.moment was not defined!');
    var deferred = $q.defer();
    setTimeout(function() {
        if ($window.moment) {
          deferred.resolve($window.moment);
        } else {
          deferred.reject('$window.moment was not defined!');
        }
    }, 0);
    return deferred.promise;
  }
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/resume.html',
    controller: 'ResumeCtrl'
  });
}])
.run(['$rootScope', '$cookieStore', function($rootScope, $cookieStore) {
  $rootScope.$cookieStore = $cookieStore;
}])
;
