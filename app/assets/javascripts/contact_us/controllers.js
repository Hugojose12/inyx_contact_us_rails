angular.module('contact', [])
  .controller('conctactCtrl', ['$scope', 'contact', function($scope, contact) {
 			
    	contact.load();
    	$scope.messages = contact;

    	var clickAll = false;

			var selected = [];

			$scope.destroy = function() {	
			 	contact.destroy(selected);
			 	selected = [] /*incializa el array luego de eliminar*/
			};

			$scope.msnSelected = function(id){
				var found = 0;
				var msnId = $("#msn-"+id);
				var msnDelete = $("#msn-delete");
				var checkMsn = $("#checkmsn-"+id);
				for(var i=0;i<selected.length;i++){
					if(selected[i]==id){				
						msnId.css("background", "#ffffff");
						checkMsn.prop('checked', false);
						selected.splice(i,1);	
						found = 1;
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
						$("#msn-"+messages.data[i].id).css("background", "#ffffff");
					}
					clickAll = false;
				}
				console.log(selected);	
			};

  }]);

  $(document).on('ready page:load', function(arguments) {
	  angular.bootstrap(document.body, ['inyxmater'])
	});

