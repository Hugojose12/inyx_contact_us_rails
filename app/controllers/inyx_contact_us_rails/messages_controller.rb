require_dependency "inyx_contact_us_rails/application_controller"

module InyxContactUsRails
  class MessagesController < ApplicationController
    before_action :set_message, only: [:show, :edit, :update, :destroy]
    layout :resolve_layout
    load_and_authorize_resource except: [:new, :send_contact_message]
    before_filter :authenticate_user!, except: [:new, :send_contact_message]
    # GET /messages


    # GET /messages/1
    def show
    end

    # GET /messages/new
    def new
      @message = Message.new
    end
   

    # DELETE /messages/1
    def destroy
      @message.destroy
      redirect_to messages_url, notice: 'Mensaje ha sido borrado satisfactoriamente.'
    end

    def read
      @message = Message.find(params[:id])
      @message.update_attribute(:read, true) if @message.read == false
      respond_to do |format|
        format.html
        format.json { render :json => @message.as_json }
      end
    end

    def send_contact_message
      @message = Message.new(:name=>params[:name], :subject=>params[:subject], :email=>params[:email], :content=>params[:content])      if verify_recaptcha(attribute: "contact", message: "Oh! It's error with reCAPTCHA!") and @message.save
      if verify_recaptcha(attribute: "contact", message: "Oh! It's error with reCAPTCHA!") and @message.save
        ContactMailer.contact(params).deliver
        redirect_to InyxContactUsRails::redirection,  flash: { notice: params[:name]+', ¡Tu mensaje ha sido en enviado!' }
      else
        redirect_to InyxContactUsRails::redirection,  flash: { alert: 'Error, debe llenar todos los campos.' }
      end
    end

    private

      # Use callbacks to share common setup or constraints between actions.
      def set_message
        @message = Message.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def message_params
        params.require(:message).permit(:name, :subject, :email, :content, :read)
      end

      def resolve_layout
       case action_name
         when "new"
           "frontend/application"
         else 
           "admin/application"
       end

    end
  end
end
