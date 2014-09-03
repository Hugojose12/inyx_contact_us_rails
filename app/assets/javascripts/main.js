// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
//= require_self
//= require_tree ./services/global
//= require_tree ./services/main
//= require_tree ./filters/global
//= require_tree ./filters/main
//= require_tree ./controllers/global
//= require_tree ./controllers/main
//= require_tree ./directives/global
//= require_tree ./directives/main

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

