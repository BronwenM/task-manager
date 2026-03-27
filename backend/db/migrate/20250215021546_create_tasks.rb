class CreateTasks < ActiveRecord::Migration[8.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.timestamp :due_date
      t.boolean :is_complete
      t.string :priority, default: "low"
      t.string :tags, array: true, default: []
      t.integer :user_id, null: false
      t.integer :task_group_id, null: true

      t.timestamps
    end
  end
end
