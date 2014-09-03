// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
//= require_self
//= require_tree ./services/main
//= require_tree ./controllers/main

angular.module('Contact', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider	
	.when('/:readId', { 
		templateUrl: '../assets/contactRead.html', 
		controller: 'MessagesCtrl' 
	})
	.otherwise({
		templateUrl: '../assets/contactIndex.html',
		controller: 'IndexCtrl'
	});
})

.config([
  "$httpProvider", function(provider) {
    return provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);


