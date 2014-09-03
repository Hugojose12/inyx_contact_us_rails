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

Para agregar `config/initializers/contact_us.rb` y asi estabelecer los datos de configuración debe ejecutar

```ruby
rake contact_us:copy_initializer
```

Seguido a esto debemos cargar los assets de la gema, agregando lo siguiente

en Application.js

```
//= require contact_us/application
```
en application.css

```
*= require contact_us/application
```

Luego importar migraciones y crear las tablas de contactos desde la consola

```
rake contact_us:install:migrations 
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