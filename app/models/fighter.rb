class Fighter < ApplicationRecord
  belongs_to :squad
  has_many :skills
  has_many :equipments, through: :squad
end
