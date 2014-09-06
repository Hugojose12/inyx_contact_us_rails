module ContactUs
  class Message < ActiveRecord::Base
  	def self.add
  		50.times do |i|
  			Message.create name:"Inyxtech #{Random.rand(1..100)}", email:"inyxtech_#{Random.rand(1..100)}@gmail.com", message:"Development Group"
  		end
  	end
  end
end
