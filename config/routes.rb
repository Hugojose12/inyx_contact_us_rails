ContactUs::Engine.routes.draw do
	post "contact/send_contact_message" 	
	get 'contact', to: 'contact#index'
	scope :admin do
		#rails
		get "messages", to: 'contact#messages'		
		get "messages/:id", to: 'contact#show_message'		
		#angular
		post 'contact/destroy', to: 'contact#destroy', as: "destroy"
		get "contact/angular_message/:id", to: 'contact#one_message'		
		get 'contact/angular_index', to: 'contact#all_messages'
  	end
end
