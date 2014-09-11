angular.module('contact', [])
	.controller('indexCtrl', ['$scope','contact', function($scope, contact) {				
		contact.load();
		$scope.messages = contact;
		$scope.interval_a = 0;
		$scope.interval_b = 10;
		$scope.page = 1;
		$scope.btnDelete = false;
		$scope.btnAllSelect = false;
		$scope.count = 0;

		$scope.init = function(){
			ctrl.pages = {};
			contact.count_reads($scope);	
		}

		$scope.destroy = function() {
			if (confirm("¿Deseas eliminar los mensajes seleccionados?") == true) {
			 	contact.destroy(ctrl.selected);
			 	ctrl.pageInit($scope); 	
				contact.load();
 				$scope.messages = contact; 				
				contact.count_reads($scope);
			}
		};

		$scope.selected = function(id){
			ctrl.itemSelected(id, $scope);
		};	

		$scope.allSelected = function(){
			ctrl.allItemsSelected($scope, $scope.messages);
		};

		$scope.refresh = function(){
			contact.load();
			$scope.messages = contact;							
			ctrl.pageInit($scope);
			contact.count_reads($scope);
		}

		$scope.show = function(id){	
			route.show_path(id);
		}

		$scope.nextList = function(){
			ctrl.paginateControl($scope, $scope.messages.data.length,"next");
		}

		$scope.lastList = function(){
			ctrl.paginateControl($scope, "last");			
		}
	}])
	.controller('showCtrl', ['$scope','contact', function($scope, contact) {

		var selected = [];
		
		$scope.init = function(){
			//init function
		}

		$scope.index = function(){
			route.index_path();
		}

		$scope.destroy = function(id) {
		    if (confirm("¿Deseas eliminar este mensaje?") == true) {
		    	selected.push(id);
			 	contact.destroy(selected);
			 	selected = [] /*incializa el array luego de eliminar*/
			 	document.location ='/admin/messages';
		    } 			
		};
	}]);

