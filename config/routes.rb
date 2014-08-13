ContactUs::Engine.routes.draw do
	root :to => 'contact#index'
	post "contact/send_contact_message"
end
