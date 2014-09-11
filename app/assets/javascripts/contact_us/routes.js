var route = {};
(function(){

	/*Rutas App*/
	this.index_path = function(){
		document.location ='/admin/messages/';
	}

	this.show_path = function(id){
		document.location ='/admin/messages/'+id;
	}
	/*end*/

	/*Rutas Ajax*/
  	this.index_json_path = '/admin/contact/angular_index.json';
  
  	this.destroy_path = "/admin/contact/destroy/";

  	this.reads_path = '/admin/contact/angular_reads.json'
  	
  	this.find_message_path = function(id){
  		return '/admin/contact/angular_message/'+id+'.json'
  	}  	
  	/*end*/

}).apply(route);