class User < ApplicationRecord
  has_secure_password

  has_and_belongs_to_many :tools
  has_many :packages, class_name: "Tool", foreign_key: "creator_id", inverse_of: :creator
  belongs_to :job, optional: true

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
