this.MessagesCtrl = function($scope, $routeParams, $location, messageData){
	$scope.data = {
	  messageData: messageData.data
	};

	messageData.loadMessages();
	
	$scope.viewHome = function(){
	  $location.url('/');
	};

	$scope.getMessage = function(data){
		var readId = $routeParams.readId;
		var message;
		for(var i=0; i<data.length; i++){
			if(data[i].id == readId){
				message = {
					id:data[i].id,
					name:data[i].name,
					email:data[i].email,
					message:data[i].message,
					read:data[i].read,
					created_at:data[i].created_at,
					updated_at:data[i].updated_at,
				}
				return message;
			}
		}
	}
};
this.MessagesCtrl.$inject = ['$scope', '$routeParams', '$location', 'messageData'];