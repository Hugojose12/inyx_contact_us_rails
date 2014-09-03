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
		for(var i=0;i<selected.length;i++){
			if(selected[i]==id){
				console.log(i);
				selected.splice(i,i);				
				console.log(selected);
				found = 1;
				$("#msn-"+id).css("background", "#ffffff");
			}
		}
		if(found==0){
			selected.push(id);
			console.log(selected);
			$("#msn-"+id).css("background", "#fcf8e3");
		}	
	}
};
this.IndexCtrl.$inject = ['$scope', '$location', 'messageData'];