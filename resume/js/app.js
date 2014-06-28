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
    console.error('$window.moment was not defined!');
  }
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/2', {
    templateUrl: 'partials/resume_v2.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.when('/', {
    templateUrl: 'partials/resume.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.otherwise({
    redirectTo: '/'
  });

}])
.run(['$rootScope', '$cookieStore', function($rootScope, $cookieStore) {
  $rootScope.$cookieStore = $cookieStore;
}])
;
