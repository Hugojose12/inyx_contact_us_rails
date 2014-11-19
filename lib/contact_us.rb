require "contact_us/engine"
require 'recaptcha'

module ContactUs
	# Dirección de correo electronico que recibirá
  mattr_accessor :mailer_from
  # Ruta de envio de contactos
  mattr_accessor :route_send
  # Dirección de correo electronico que enviará
  mattr_accessor :mailer_to
  # activar el front
  mattr_accessor :active_form

  # Ubicación de la gema
  mattr_accessor :name_web
  SITEBAR = {'contact' => '/messages'}
  # Default way to setup ContactUs. Run rake contact_us:install to create
  # a fresh initializer with all configuration values.
  def self.setup
    yield self
  end
end
