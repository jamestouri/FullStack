class Group < ApplicationRecord
  validates :title, :location, :about, :category, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

end
