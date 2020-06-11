class Tool < ApplicationRecord
  has_and_belongs_to_many :jobs
  has_and_belongs_to_many :users
  belongs_to :creator, class_name: "User", inverse_of: :packages
end
