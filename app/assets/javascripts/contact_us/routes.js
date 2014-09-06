var route = {};
(function(){	
	
  	this.index_json_path = '/admin/contact/angular_index.json';
  
  	this.destroy_path = "/admin/contact/destroy/";

	this.index_path = function(){
		document.location ='/admin/messages/';
	}

	this.show_path = function(id){
		document.location ='/admin/messages/'+id;
	}

}).apply(route);