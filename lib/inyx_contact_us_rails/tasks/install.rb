require 'rails/generators'

module InyxContactUsRails
  module Tasks
    class Install
      class << self

        def run
          copy_initializer_file
          puts "Done!"
        end

        def copy_initializer_file
          print "Agregado archivo de configuración...\n"
          app_path = Rails.root.join("config/initializers")
          copier.copy_file File.join(gem_path, 'lib/templates/inyx_contact_us_rails.rb'), File.join(app_path, 'inyx_contact_us_rails.rb')
        end

        def copy_locales_files
          print "Copying locales files...\n"
          locales_path = gem_path + "/config/locales/*.yml"
          app_path = Rails.root.join("config/locales")

          unless File.directory?(app_path)
            app_path.mkdir
          end

          Dir.glob(locales_path).each do |file|
            copier.copy_file file, File.join(app_path, File.basename(file))
          end
        end

        def copy_view_files
          print "Vistas agregadas al proyecto...\n"
          origin = File.join(gem_path, 'app/views')
          destination = Rails.root.join('app/views')
          copy_files(['.'], origin, destination)
        end

        private

        def copy_files(directories, origin, destination)
          directories.each do |directory|
            Dir[File.join(origin, directory, 'inyx_contact_us_rails', '**/*')].each do |file|
              relative  = file.gsub(/^#{origin}\//, '')
              dest_file = File.join(destination, relative)
              dest_dir  = File.dirname(dest_file)

              if !File.exist?(dest_dir)
                FileUtils.mkdir_p(dest_dir)
              end

              copier.copy_file(file, dest_file) unless File.directory?(file)
            end
          end
        end

        def gem_path
          File.expand_path('../../..', File.dirname(__FILE__))
        end

        def copier
          unless @copier
            Rails::Generators::Base.source_root(gem_path)
            @copier = Rails::Generators::Base.new
          end
          @copier
        end
      end
    end
  end
end