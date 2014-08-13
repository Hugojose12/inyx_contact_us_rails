# Agregar datos de configuración
ContactUs.setup do |config|
	config.mailer_to = "gbrlmrllo@gmail.com"
	config.mailer_from = "no-reply@inyxtech.com"
	config.name_web = "Inyxtech"

	# Agregar keys de google recaptcha
	Recaptcha.configure do |config|
	  config.public_key  = "6LcigfgSAAAAAIPoJOj57Myb8qn7H8p2X7n7S6R9"
	  config.private_key = "6LcigfgSAAAAAFJvjSSYaL2RyiEukdthGTrNZvVy"
	end
end
