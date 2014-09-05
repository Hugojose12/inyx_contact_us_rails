angular.module('contact')
	.filter('interval', function() {
	  return function(arr, start, end) {
	    return (arr || []).slice(start, end);
	  };
	});