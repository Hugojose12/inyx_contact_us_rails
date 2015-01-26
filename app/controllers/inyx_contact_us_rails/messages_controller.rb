require_dependency "inyx_contact_us_rails/application_controller"

module InyxContactUsRails
  class MessagesController < ApplicationController
    before_action :set_message, only: [:show, :edit, :update, :destroy]
    layout :resolve_layout
    # GET /messages


    # GET /messages/1
    def show
    end

    # GET /messages/new
    def new
      @message = Message.new
    end

    # GET /messages/1/edit
    def edit
    end

    # POST /messages
    def create
      @message = Message.new(message_params)

      if @message.save
        redirect_to InyxContactUsRails::redirection, notice: 'Message was successfully created.'
      else
        render :new
      end
    end

    # PATCH/PUT /messages/1
    def update
      if @message.update(message_params)
        redirect_to @message, notice: 'Message was successfully updated.'
      else
        render :edit
      end
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
           "application"
         else 
           "admin/application"
       end
     end
  end
end
