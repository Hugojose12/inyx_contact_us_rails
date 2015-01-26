angular.module('contact_us').factory('contactModel', [
  '$http', function($http) {
  var model = {};

  model.read = function($scope, object) {
    $http({
      url: $scope.route_path+"/read/"+object.id+".json", 
      method: "GET"
    }).success(function(data) {
      object.read = true;
    }).error(function() {
    });
  };

  return model;

}]);