'use strict';
angular.module('resumeApp', [
  'ngRoute',
  'resumeApp.filters',
  'resumeApp.services',
  'resumeApp.directives',
  'resumeApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/grid', {
    templateUrl: 'partials/grid-example.html',
    controller: 'GridCtrl'
  });
  $routeProvider.when('/2', {
    templateUrl: 'partials/f2.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.when('/1', {
    templateUrl: 'partials/f1.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.when('/3', {
    templateUrl: 'partials/f3.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.when('/4', {
    templateUrl: 'partials/f4.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.when('/5', {
    templateUrl: 'partials/f5.html',
    controller: 'ResumeCtrl'
  });
  $routeProvider.when('/', {
    templateUrl: 'partials/simple.html',
    controller: 'ResumeCtrl'
  });

  // $routeProvider.otherwise({redirectTo: '/'});
}]);
