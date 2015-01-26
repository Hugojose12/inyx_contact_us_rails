module InyxContactUsRails
  class ContactMailer < ActionMailer::Base
    def contact(client)
	    @client = client
	    mail(from: "no-reply@inyxtech.com", to: InyxContactUsRails.mailer_to, subject: @client[:subject])
	  end
  end
end