'use strict';
/* Filters */
angular.module('resumeApp.filters', [])
.filter('toDate', ['moment', function(moment) {
	return function(input, fmt) {
		if (moment) {
			var d = moment(input, ["YYYY", "YYYY-MM", "YYYY-MM-DD"]);
			if (!d.isValid()) {
				return input;
			} else {
				return d.format(fmt || "MMM YYYY");
			}
		} else {
			return input;
		}
	}
}])
;