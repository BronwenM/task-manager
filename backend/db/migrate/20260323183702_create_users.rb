class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    drop_table :users, if_exists: true
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      
      t.timestamps
    end
  end
end
