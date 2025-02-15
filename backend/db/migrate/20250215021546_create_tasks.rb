class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.timestamp :due_date
      t.boolean :is_complete

      t.timestamps
    end
  end
end
