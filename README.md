## ContactUs

Es un Engine que proporciona un formulario de contacto básico

## Caracteristicas

- Envío de correo
- Recaptcha para evitar el span
- Configuración para personalización

## Requerimientos

* Ruby >= 2.0.0
* Rails >= 4.0.0

## Instalación

Añadir la siguiente linea a su Gemfile

```ruby
gem 'inyx_contact_us_rails', git: "https://github.com/inyxtech/inyx_contact_us_rails.git"
gem "recaptcha"
```

La siguiente linea habilitará las rutas del engine, debe ser colocada en el archivo `config/initializers/routes.rb`

```ruby
mount InyxContactUsRails::Engine, :at => '', as: 'messages'
```

Para agregar `config/initializers/contact_us.rb` y asi estabelecer los datos de configuración debe ejecutar

```ruby
rake contact_us:copy_initializer
```

Seguido a esto debemos cargar los assets de la gema, agregando lo siguiente

en application.js

```
//= require inyx_contact_us_rails/application
```

Luego importar migraciones y crear las tablas de contactos desde la consola

```
rake inyx_contact_us_rails:install:migrations 
```
```
rake db:migrate
```

Ubicarse en la ruta del proyecto desde la terminal y ejecutar

```ruby
Bundle install
```

## Configuración

Para agregar `config/initializers/contact_us.rb` y asi estabelecer los datos de configuración debe ejecutar

```ruby
rake contact_us:copy_initializer
```

Nota: Puede obtener las llaves de Recaptcha desde esta dirección [Recaptcha Keys](https://www.google.com/recaptcha/admin)

## Vistas

Para copiar las vistas en `app/views/contact_us` y asi personalizarlas para adaptarlas a sus necesidades debe ejecutar

```ruby
rake contact_us:copy_views
```
