'use strict';
/* Controllers */
angular.module('resumeApp.controllers', [])
  .controller('GridCtrl', [function() {

  }])
  .controller('ResumeCtrl', ['$scope','resume',function($scope,resume) {
    $scope.resume = resume;
  }])

;
