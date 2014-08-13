## ContactUs

Es un Engine que proporciona un formulario de contacto básico

## Caracteristicas

- Envío de correo
- Recaptcha para evitar el span
- Configuración para personalización

## Requerimientos

* Ruby >= 1.9.3
* Rails >= 3.0.0

## Instalación

Añadir la siguiente linea a su Gemfile

```ruby
gem 'contact_us', git: "https://github.com/inyxtech/inyx_contact_us_rails.git"
```

Ubicarse en la ruta del proyecto desde la terminal y ejecutar

```ruby
Bundle install
```

## Configuración

Agregar `config/initializers/contact_us.rb` el siguiente bloque para estabelecer datos de configuración

```ruby
ContactUs.setup do |config|
	config.mailer_to = "email_receptor"
	config.mailer_from = "email_emisor"
	config.name_web = "nombre_del_sitio_web"

	# Agregar keys de google recaptcha
	Recaptcha.configure do |config|
	  config.public_key  = "public_key"
	  config.private_key = "private_key"
	end
end
```

Nota: Puede obtener las llaves de Recaptcha desde esta dirección [Recaptcha Keys]("https://www.google.com/recaptcha/admin") 