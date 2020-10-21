class Squad < ApplicationRecord
  belongs_to :user
  has_many :fighters
  has_many :equipments

  validates :name, presence: true

end
