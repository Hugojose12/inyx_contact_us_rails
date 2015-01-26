angular.module('contact_us', [])
  .controller('indexContact', ['$scope','contactModel', function($scope, contactModel) {
		
		$scope.read = function(object){
			if(object.read == false){
				contactModel.read($scope, object);		        
		    }
		}

	}]);