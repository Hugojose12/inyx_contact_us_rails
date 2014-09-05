ContactUs::Engine.routes.draw do
	post "contact/send_contact_message" 	
	get 'contact', to: 'contact#index'
	scope :admin do
		get "messages", to: 'contact#messages'
		get 'contact/angular_index', to: 'contact#all_messages'
		post 'contact/destroy', to: 'contact#destroy', as: "destroy"
  	end
end
