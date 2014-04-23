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
    controller: 'GridCtrl'});

  $routeProvider.otherwise({redirectTo: '/grid'});
}]);
