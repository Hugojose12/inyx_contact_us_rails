this.IndexCtrl = function($scope, messageData){
	$scope.data = messageData.data;

	messageData.loadMessages();
};
this.IndexCtrl.$inject = ['$scope', 'messageData'];