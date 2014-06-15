'use strict';
angular.module('resumeApp', [
  'ngRoute',
  'resumeApp.filters',
  'resumeApp.services',
  'resumeApp.directives',
  'resumeApp.controllers',
  'angularMoment'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/f5.html',
    controller: 'ResumeCtrl'
  });
}]);
