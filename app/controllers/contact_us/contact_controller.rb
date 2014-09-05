require_dependency "contact_us/application_controller"

module ContactUs
  class ContactController < ApplicationController
  	layout :resolve_layout
    
  	def index
    end

    def send_contact_message
			if true #verify_recaptcha(attribute: "contact", message: "Oh! It's error with reCAPTCHA!")
		  	#ContactMailer.contact(params).deliver
        ContactUs::Message.create!(:name=>params[:name], :email=>params[:email], :message=>params[:comment])
		  	redirect_to main_app.contact_path,  flash: { notice: params[:name]+', ¡Tu mensaje ha sido en enviado!' }
		  else
		  	redirect_to main_app.contact_path
		  end
    end

    def messages
      authorize! :index, @user, :message => 'Not authorized as an administrator.'
    end

    def all_messages
      messages = ContactUs::Message.all
      respond_to do |format|
        format.html
        format.json { render :json => messages.as_json }
      end
    end

    def show
      message = ContactUs::Message.find(params[:id])  
      respond_with(message) do |format|
        format.json { render :json => message.as_json }
      end 
    end

    def destroy
      ContactUs::Message.destroy( redefine_destroy params[:ids].split(",") )
      respond_to do |format|
        format.html { redirect_to messages_path, notice: 'Mensajes eliminados.' }
      end
      
    end

    private 

    #metodo para redefinir el array de los elementos selecionados que se van a eliminar
    def redefine_destroy(params)
      params.sort.each do |id|
        params.delete id unless ContactUs::Message.exists? id
      end
      print params
      params
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
