class User < ApplicationRecord
  has_and_belongs_to_many :tools
  has_many :packages, class_name: "Tool", foreign_key: "creator_id", inverse_of: :creator
  belongs_to :job, optional: true
end
