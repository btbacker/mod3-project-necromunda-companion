class User < ApplicationRecord
    has_many :squads
    validates :name, uniqueness: true
end
