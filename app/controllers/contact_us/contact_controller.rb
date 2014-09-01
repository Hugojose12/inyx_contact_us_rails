require_dependency "contact_us/application_controller"

module ContactUs
  class ContactController < ApplicationController
  	layout :resolve_layout
    respond_to :json
  	def index
    end

    def send_contact_message
			if verify_recaptcha(attribute: "contact", message: "Oh! It's error with reCAPTCHA!")
		  	ContactMailer.contact(params).deliver
        ContactUs::Message.create!(:name=>params[:name], :email=>params[:email], :message=>params[:comment])
		  	redirect_to main_app.contact_us_path,  flash: { notice: params[:name]+', ¡Tu mensaje ha sido en enviado!' }
		  else
		  	redirect_to main_app.contact_us_path
		  end
    end

    def messages
      authorize! :index, @user, :message => 'Not authorized as an administrator.'
    end

    private

    def resolve_layout
      case action_name
        when "index"
          "application"
        else 
          "admin/application"
      end
    end

  end
end
