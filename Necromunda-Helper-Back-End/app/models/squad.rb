class Squad < ApplicationRecord
  belongs_to :user
  has_many :fighters, dependent: :destroy
  has_many :equipments

  validates :name, presence: true

end