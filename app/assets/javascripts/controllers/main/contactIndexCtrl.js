this.IndexCtrl = function($scope, $location, messageData){
	
	$scope.data = messageData.data;

	messageData.loadMessages();

	$scope.viewMessage = function(readId) {
	  $location.url('/'+readId);
	};
	/*el arreglo selected permite crear una lista de mensajes seleccionados 
	para que puedan realizar alguna accion*/
	//materner empty dentro del arr para que splice funcione
	var selected = ["empty"];
	//funcion para agregar o eliminar items del arreglo selected
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
		if(selected.length>1){
			msnDelete.css("opacity", "1");
			msnDelete.removeAttr("disabled");
		}else{
			msnDelete.css("opacity", "0");
			msnDelete.attr("disabled", "disabled");
		}	
	};

	var clickAll = false;

	$scope.msnSelect = function(data){
		var msnDelete = $("#msn-delete");
		selected=["empty"];	
		if(clickAll==false){		
			$(".msn-check").prop('checked', true);
			msnDelete.css("opacity", "1");
			for(var i=0; i<data.messages.length; i++){
				selected.push(data.messages[i].id);	
				$("#msn-"+data.messages[i].id).css("background", "#fcf8e3");
			}
			clickAll = true;
		}else{
			$(".msn-check").prop('checked', false);
			msnDelete.css("opacity", "0");
			selected=["empty"];
			for(var i=0; i<data.messages.length; i++){	
				$("#msn-"+data.messages[i].id).css("background", "#ffffff");
			}
			clickAll = false;
		}
	};
};
this.IndexCtrl.$inject = ['$scope', '$location', 'messageData'];