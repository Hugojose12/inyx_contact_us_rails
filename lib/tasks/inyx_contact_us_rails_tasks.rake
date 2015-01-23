# desc "Explaining what the task does"
# task :inyx_contact_us_rails do
#   # Task goes here
# end
require File.expand_path('../../inyx_contact_us_rails/tasks/install', __FILE__)

namespace :contact_us do
	desc "Copiar inicializador para la configuración"
	task :copy_initializer do
		InyxContactUsRails::Tasks::Install.copy_initializer_file
	end

  desc "Copiar vistas al proyecto"
  task :copy_views do
    InyxContactUsRails::Tasks::Install.copy_view_files
  end
end