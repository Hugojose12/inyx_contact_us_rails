InyxContactUsRails::Engine.routes.draw do
	get "contact_us", to: "messages#new" if InyxContactUsRails::messages_new
	scope :admin do
		resources :messages, except: [:new, :edit, :update] do
			collection do
				post '/delete', to: 'messages#delete'
			end
		end		
	end
end
