InyxContactUsRails::Engine.routes.draw do
	get "contact_us", to: "messages#new" if InyxContactUsRails::messages_new
	post "contact_us/send_contact_message", to: "messages#send_contact_message"
	scope :admin do
		resources :messages, except: [:new, :edit, :update, :create] do
			collection do
				post '/delete', to: 'messages#delete'
			end
		end	
		get "messages/read/:id", to: "messages#read"
	end
end
