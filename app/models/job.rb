class Job < ApplicationRecord
  has_and_belongs_to_many :tools
  has_many :employees, class_name: "User", foreign_key: "job_id"
end
