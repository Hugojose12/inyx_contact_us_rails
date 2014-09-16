angular.module('contact', [])
	.controller('indexCtrl', ['$scope','contact', function($scope, contact) {			

		$scope.init = function(){
			ctrl.pages = {};
			contact.load();
			$scope.messages = contact;
			$scope.count = 0;
			$scope.interval_a = ctrl.interval_a;
			$scope.interval_b = ctrl.interval_b;
			$scope.page = ctrl.page;
			$scope.btnDelete = false;
			$scope.btnAllSelect = false;			
			contact.count_reads($scope);
			//Alerts
			$scope.alert = false;
			$scope.msnAlert = "Exitosamente!";
			$scope.statusAlert="success";
		}

		$scope.destroy = function() {
			if (confirm("¿Deseas eliminar los mensajes seleccionados?") == true) {				
			 	$scope.alert = true;
				ctrl.removeItemTable($scope.messages);				
			 	contact.destroy(ctrl.selected, $scope);
				contact.count_reads($scope);	 	
			 	ctrl.pageInit($scope);			 		 	
			 	ctrl.selected = [];
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

		$scope.alertClose = function(){
			$scope.alert = false;
		}
	}])

	.controller('showCtrl', ['$scope','contact', function($scope, contact) {
		
		$scope.init = function(){
			
		}

		$scope.index = function(){
			route.index_path();
		}

		$scope.destroy = function(id) {
		    if (confirm("¿Deseas eliminar este mensaje?") == true) {
		    	ctrl.selected.push(id);
			 	contact.destroy(ctrl.selected);
			 	ctrl.selected = [] /*incializa el array luego de eliminar*/
			 	route.index_path();
		    } 			
		};
	}]);

