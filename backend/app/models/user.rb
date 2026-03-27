class User < ApplicationRecord
  has_secure_password

  has_many :task_groups, dependent: :destroy
  has_many :tasks, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  #Check if the user is a new record or if the password is present. 
  #If either of those conditions are true, then the password and password confirmation are required. 
  #This is to ensure that when updating user information, the password is not required unless it is being changed.
  validates :password, presence: true, confirmation: true, if: -> { new_record? || password.present? }
  validates :password_confirmation, presence: true, unless: -> { new_record? || password.present? }
end
