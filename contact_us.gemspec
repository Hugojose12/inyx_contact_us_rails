$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "contact_us/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "contact_us"
  s.version     = ContactUs::VERSION
  s.authors     = ["Gabriel Morillo"]
  s.email       = ["gbrlmrllo@gmail.com"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of ContactUs."
  s.description = "TODO: Description of ContactUs."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.1.4"
  s.add_dependency "recaptcha"
  
  s.add_development_dependency "sqlite3"
end
