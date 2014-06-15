'use strict';
/* Resume Service based on JSON data  */
angular.module('resumeApp.services')
.value('companies', [
	"booz",
	"army"
])
.factory('resumeData', ['$resource', function($resource) {
	var CompanyExperience = $resource('/resume/js/:company.json', { company: '@id'});
	function getExperience(company){
		if (angular.isString(company)) {
			return getExperience({company: company});
		} else if (angular.isArray(company)) {
			return company.map(getExperience);
		} else if (angular.isObject(company)) {
			return CompanyExperience.get(company);
		} else {
			throw "Invalid argument to getExperience: " + typeof(company);
		}
	}
	return { getExperience: getExperience };
}])
.factory('resume', ['resumeData', 'companies', function(resumeData, companies) {
   return { experience: resumeData.getExperience(companies) };
}]);
;