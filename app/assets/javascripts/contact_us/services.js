angular.module('contact').factory('contact', [
  '$http', function($http) {
  var contact = {};

  contact.load = function() {
    Model.all(route.index_json_path, $http, function(output){
      contact.data = output;
    });
  };

  contact.find_by_message = function(id) {
    $http.get('../contact/angular_message/'+id+'.json').success(function(data) {
      contact.data = data;
      console.log('Successfully loaded messages.');
    }).error(function() {
      console.error('Failed to load messages.');
    });
  };

  contact.read_message = function(id) {
    $http.get('/admin/contact/angular_read/'+id+'.json').success(function(data) {
      contact.data = data;
      console.log('Successfully loaded messages.');
    }).error(function() {
      console.error('Failed to load messages.');
    });
  };

  contact.destroy = function(ids) {    
    Model.destroy(route.destroy_path, $http, ids, function(output){
      Model.all(route.index_json_path, $http, function(output){
        contact.data = output;
      });
    });    
  };  

  return contact;
  }
]);