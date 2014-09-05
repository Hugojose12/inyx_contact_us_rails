angular.module('employee').factory('contact', [
  '$http', function($http) {
  var contact = {};

  /*Metodo para traer todos los mensajes de la base de datos*/
  MessageAll = function() {
    $http.get('../admin/contact/angular_index.json').success(function(data) {
      contact.data = data;
      console.log('Successfully loaded messages.');
    }).error(function() {
      console.error('Failed to load messages.');
    });
  }

  contact.load = function() {
    MessageAll();
  };

  contact.destroy = function(messages) {
    console.log(JSON.stringify(messages))
    $http({
      url: "../admin/contact/destroy/", 
      method: "POST",
      params: { ids: messages.toString() }
    }).success(function(data) {
      MessageAll(); /*carga los datos luego de eliminar*/
    }).error(function() {
      console.error('Fail :(.');
      MessageAll(); /*carga los datos si no consigue eliminarlos, luego te explico del porque colocarlo aqui tambien*/
    });
  };  

  return contact;
  }
]);