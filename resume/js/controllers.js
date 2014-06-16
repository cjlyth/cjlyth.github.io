'use strict';
/* Controllers */
angular.module('resumeApp.controllers', ['resumeApp.services'])
  .controller('GridCtrl', [function() {}])
  .controller('ResumeCtrl', ['$scope', 'resumeData', 'companies', 
  	function($scope, resumeData, companies) {
    	$scope.resume = { experience: resumeData.getExperience(companies) };
  	}])

;
