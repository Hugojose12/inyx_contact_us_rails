module ContactUs
  class ContactMailer < ActionMailer::Base
    def contact(client)
	    @client = client
	    mail(from: "no-reply@inyxtech.com", to: ContactUs.mailer_to, subject: @client[:name]+' ha contactado con '+ContactUs.name_web)
	  end
  end
end
