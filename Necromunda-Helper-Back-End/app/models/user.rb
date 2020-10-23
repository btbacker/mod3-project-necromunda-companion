class User < ApplicationRecord
    has_many :squads, dependent: :destroy
    validates :name, uniqueness: true, on: :create
    validates :name, presence: true
end
