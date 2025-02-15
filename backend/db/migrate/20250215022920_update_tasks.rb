class UpdateTasks < ActiveRecord::Migration[8.0]
  def change
    change_column_default :tasks, :is_complete, from: nil, to: false
  end
end
