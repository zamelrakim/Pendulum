class Job < ApplicationRecord
  has_and_belongs_to_many :tools
  has_many :engineers, class_name: "User", foreign_key: "job_id"
  # accepts_nested_attributes_for :engineers, :tools
end
