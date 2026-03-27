class TaskGroup < ApplicationRecord
  has_many :tasks, dependent: :nullify
  belongs_to :user
end
