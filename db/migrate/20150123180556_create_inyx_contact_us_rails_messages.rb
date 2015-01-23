class CreateInyxContactUsRailsMessages < ActiveRecord::Migration
  def change
    create_table :inyx_contact_us_rails_messages do |t|
      t.string :name
      t.string :subject
      t.string :email
      t.text :content
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
