class CreateTaskGroups < ActiveRecord::Migration[8.0]
  def change
    drop_table :task_groups, if_exists: true
    create_table :task_groups do |t|
      t.string :name, default: "New Group"
      t.integer :user_id, null: false
      t.string :color
      t.string :icon

      t.timestamps
    end
  end
end
