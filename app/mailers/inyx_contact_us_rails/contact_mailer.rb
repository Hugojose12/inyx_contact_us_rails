module InyxContactUsRails
  class ContactMailer < ActionMailer::Base
    def contact(client)
	    @client = client
	    mail(from: InyxContactUsRails.mailer_from, to: InyxContactUsRails.mailer_to, subject: @client[:subject])
	  end
  end
end
