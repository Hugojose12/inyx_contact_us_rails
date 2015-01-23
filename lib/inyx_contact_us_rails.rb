require "inyx_contact_us_rails/engine"

module InyxContactUsRails	
  #Route redirection after send
  mattr_accessor :redirection
	# Dirección de correo electronico que recibirá
  mattr_accessor :mailer_from
  # Dirección de correo electronico que enviará
  mattr_accessor :mailer_to
  # Activar o Desactivar la ruta especificada ("messages/new")
  mattr_accessor :messages_new

  # Ubicación de la gema
  mattr_accessor :name_web
  SITEBAR = {'contact' => '/messages'}
  # Default way to setup ContactUs. Run rake contact_us:install to create
  # a fresh initializer with all configuration values.
  def self.setup
    yield self
  end
end
