module ContactUs
  class Message < ActiveRecord::Base
  	def self.add
  		50.times do |i|
  			Message.create name:"Inyxtech #{Random.rand(1..100)}", email:"inyxtech_#{Random.rand(1..100)}@gmail.com", message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates similique porro, quia deleniti quae iure laboriosam maxime eum sequi quaerat ex. Quidem quam officia, numquam tenetur est nisi mollitia ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sed ducimus deserunt molestiae alias voluptates neque aliquam animi magnam sapiente, aliquid ab, eius dolorum vel voluptatem, quaerat temporibus explicabo pariatur."
  		end
  	end
  end
end
