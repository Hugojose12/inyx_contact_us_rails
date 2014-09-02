this.IndexCtrl = function($scope, $location, messageData){
	
	$scope.data = messageData.data;

	messageData.loadMessages();

	$scope.viewMessage = function(readId) {
	  $location.url('/messages/'+readId);
	};
};
this.IndexCtrl.$inject = ['$scope', '$location', 'messageData'];