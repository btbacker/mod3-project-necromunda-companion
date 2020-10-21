class Squad < ApplicationRecord
  belongs_to :user
  has_many :fighters
  has_many :equipments

  attribute :credits, :integer, default: 1000
end
