class Task < ApplicationRecord
  has_and_belongs_to_many :task_groups, optional: true
  belongs_to :user
end
