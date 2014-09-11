angular.module('contact').factory('contact', [
  '$http', function($http) {
  var contact = {};
  var count = 0;

  contact.load = function() {
    Model.get(route.index_json_path, $http, function(output){
      contact.data = output;
    });
  };

  contact.find_by_message = function(id) {
    Model.get(route.find_message_path(id), $http, function(output){
      contact.data = output;
    });
  };

  contact.count_reads = function($scope){
    Model.get(route.reads_path, $http, function(output){
      $scope.count = output;
    })
  }

  contact.destroy = function(ids) {    
    Model.destroy(route.destroy_path, $http, ids, function(output){
      Model.get(route.index_json_path, $http, function(output){
        contact.data = output;
      });
    });    
  };  

  return contact;
  }
]);