var route = {};
(function(){	

	this.index_path = function(){
		document.location ='/admin/messages/';
	}

	this.show_path = function(id){
		document.location ='/admin/messages/'+id;
	}

}).apply(route);