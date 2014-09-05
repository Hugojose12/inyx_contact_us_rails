angular.module('contact', [])
	.controller('indexCtrl', ['$scope','contact', function($scope, contact) {				
		contact.load();
		$scope.messages = contact;

		var clickAll = false;

			var selected = [];

			$scope.destroy = function() {
				if (confirm("¿Deseas eliminar los mensajes seleccionados?") == true) {
					var msnDelete = $("#msn-delete");	
				 	contact.destroy(selected, 1);
				 	selected = [] /*incializa el array luego de eliminar*/
				 	msnDelete.css("opacity", "0");
					msnDelete.attr("disabled", "disabled");
				}
			};

			$scope.msnSelected = function(id){
				var found = 0;
				var msnId = $("#msn-"+id);
				var msnDelete = $("#msn-delete");
				var checkMsn = $("#checkmsn-"+id);
				for(var i=0;i<selected.length;i++){
					if(selected[i]==id){				
						checkMsn.prop('checked', false);
						selected.splice(i,1);	
						found = 1;
						msnId.removeAttr("style");
					}
				}
				if(found==0){
					selected.push(id);
					msnId.css("background", "#fcf8e3");
					checkMsn.prop('checked', true);
				}
				if(selected.length>0){
					msnDelete.css("opacity", "1");
					msnDelete.removeAttr("disabled");
				}else{
					msnDelete.css("opacity", "0");
					msnDelete.attr("disabled", "disabled");
				}
				console.log(selected);	
			};	

			$scope.msnSelect = function(messages){
				var msnDelete = $("#msn-delete");
				selected=[];	
				if(clickAll==false){		
					$(".msn-check").prop('checked', true);
					msnDelete.css("opacity", "1");
					msnDelete.removeAttr("disabled");
					for(var i=0; i<messages.data.length; i++){
						selected.push(messages.data[i].id);	
						$("#msn-"+messages.data[i].id).css("background", "#fcf8e3");
					}
					clickAll = true;
				}else{
					$(".msn-check").prop('checked', false);
					msnDelete.css("opacity", "0");
					msnDelete.attr("disabled", "disabled");
					selected=["empty"];
					for(var i=0; i<messages.data.length; i++){	
						$("#msn-"+messages.data[i].id).removeAttr("style");
					}
					clickAll = false;
				}
				console.log(selected);	
			};

			$scope.msnRefresh = function(){
				refresh = $("#icon-refresh");
				refresh.prop("class", "fa fa-refresh fa-spin");
				contact.load();
				$scope.messages = contact;
				refresh.prop("class", "fa fa-refresh");
			}

			$scope.viewMessage = function(id){
				document.location ='/admin/messages/'+id;
			}

	}])
	.controller('showCtrl', ['$scope','contact', function($scope, contact) {

		var selected = [];
		
		$scope.init = function(id){
			contact.find_by_message(id);
			$scope.message = contact;
		}

		$scope.viewHome = function(){
			document.location ='/admin/messages';
		}

		$scope.destroy = function(id) {
		    if (confirm("¿Deseas eliminar este mensaje?") == true) {
		    	selected.push(id);
			 	contact.destroy(selected, 2);
			 	selected = [] /*incializa el array luego de eliminar*/
			 	document.location ='/admin/messages';
		    } 			
		};
	}]);

  $(document).on('ready page:load', function(arguments) {
	  angular.bootstrap(document.body, ['inyxmater'])
	});

