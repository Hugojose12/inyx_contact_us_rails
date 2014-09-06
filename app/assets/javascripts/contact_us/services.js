angular.module('contact').factory('contact', [
  '$http', function($http) {
  var contact = {};
  var route_index = '/admin/contact/angular_index.json';
  var route_destroy = "/admin/contact/destroy/";

  contact.load = function() {
    Model.all(route_index, $http, function(output){
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
    Model.destroy(route_destroy_index, $http, ids, function(output){
      Model.all(route_index, $http, function(output){
        contact.data = output;
      });
    });    
  };  

  return contact;
  }
]);