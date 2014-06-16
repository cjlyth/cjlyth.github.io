'use strict';
/* Controllers */
angular.module('resumeApp.controllers', ['ngCookies', 
																				 'resumeApp.services'])
  .controller('GridCtrl', [function() {}])
  .controller('ResumeCtrl', ['$scope', '$cookieStore', 'resumeData', 'companies', 
  	function($scope, $cookieStore, resumeData, companies) {
			$scope.selectedRole = $scope.$eval("$cookieStore.get('selectedRole')");
			$scope.selectRole = function(role){
				console.log('role',role);
				$scope.$evalAsync('selectedRole = "' + role + '"');
			}
			$scope.$watch('selectedRole', "$cookieStore.put('selectedRole', selectedRole)");
    	$scope.resume = { experience: resumeData.getExperience(companies) };
  	}])

;
