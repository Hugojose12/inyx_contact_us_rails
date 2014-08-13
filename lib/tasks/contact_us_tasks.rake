require File.expand_path('../../contact_us/tasks/install', __FILE__)

namespace :contact_us do
	desc "Copiar inicializador para la configuración"
	task :copy_initializer do
		ContactUs::Tasks::Install.copy_initializer_file
	end

  desc "Copiar vistas al proyecto"
  task :copy_views do
    ContactUs::Tasks::Install.copy_view_files
  end
end