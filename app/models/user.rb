class User < ApplicationRecord
  belongs_to :job, optional: true
end
