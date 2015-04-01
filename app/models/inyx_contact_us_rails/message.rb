require 'elasticsearch/model'
module InyxContactUsRails
  class Message < ActiveRecord::Base
  	include Elasticsearch::Model
  	include Elasticsearch::Model::Callbacks
  
  validates_presence_of :name, :subject, :email, :content
  
  
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
	   { query: { multi_match:  { query: query, fields: [:name, :subject, :email, :created_at], operator: :and }  }, sort: { id: "desc" }, size: Message.count}
	 end

   def self.index(current_user)
     Message.order("created_at Desc")
   end

    def self.index_total(objects, current_user)
      objects.records.count
    end

    def self.index_search(objects, current_user)
      objects.records.order("created_at Desc")
    end

    def self.route_index
      "/admin/messages"
    end

    def self.multiple_destroy(ids, current_user)
      Message.destroy ids
    end

  end
  Message.import
end

