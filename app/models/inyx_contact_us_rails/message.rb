require 'elasticsearch/model'
module InyxContactUsRails
  class Message < ActiveRecord::Base
  	include Elasticsearch::Model
  	include Elasticsearch::Model::Callbacks

  	 def as_json(options = {})
      {
        id: self.id,
        name: self.name,
        subject: self.subject,
        email: self.email,
        content: self.content,
        created_at: self.created_at.strftime("%d-%m-%Y"),
        read: self.read
      }
    end

  	def self.query(query)
	   { query: { multi_match:  { query: query, fields: [:name, :subject, :email, :created_at] }  }, sort: { id: "desc" }, size: 10 }
	 end

  end
  Message.import
end

