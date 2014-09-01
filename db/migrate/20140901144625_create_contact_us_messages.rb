class CreateContactUsMessages < ActiveRecord::Migration
  def change
    create_table :contact_us_messages do |t|
      t.string :name
      t.string :email
      t.text :message
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
