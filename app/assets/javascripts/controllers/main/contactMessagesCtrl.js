this.MessagesCtrl = function($scope, $routeParams, messageData){
	$scope.data = {
	  messageData: messageData.data
	};

	messageData.loadMessages();
	

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
this.MessagesCtrl.$inject = ['$scope', '$routeParams', 'messageData'];