angular.module('contact', [])
	.controller('indexCtrl', ['$scope','contact', function($scope, contact) {				
		contact.load();
		$scope.messages = contact;
		$scope.interval_a = 0;
		$scope.interval_b = 10;
		$scope.page = 1;

		$scope.destroy = function() {
			if (confirm("¿Deseas eliminar los mensajes seleccionados?") == true) {
				ctrl.deleteBtnStatus("#btn-delete", 0);
			 	contact.destroy(ctrl.selected);
			 	ctrl.selected = [] /*incializa el array luego de eliminar*/
			}
		};

		$scope.selected = function(id){
			ctrl.itemSelected(id, "#row-", "#btn-delete", "#check-");
		};	

		$scope.allSelected = function(messages){
			ctrl.allItemsSelected("#row-", "#btn-delete", ".check", messages);
		};

		$scope.refresh = function(){
			contact.load();
			$scope.messages = contact;
		}

		$scope.show = function(id){			
			contact.read_message(id);
			route.show_path(id);
		}

		$scope.nextList = function(){
			ctrl.paginateControl($scope, "next");
		}

		$scope.lastList = function(){
			ctrl.paginateControl($scope, "last");			
		}
	}])
	.controller('showCtrl', ['$scope','contact', function($scope, contact) {

		var selected = [];
		
		$scope.init = function(id){
			contact.find_by_message(id);
			$scope.message = contact;
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

