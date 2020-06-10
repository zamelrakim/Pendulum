class User < ApplicationRecord
  belongs_to :job, polymorphic: true, optional: true
end
