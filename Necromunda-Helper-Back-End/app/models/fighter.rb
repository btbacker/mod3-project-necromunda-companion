class Fighter < ApplicationRecord
  belongs_to :squad
  has_many :skills
  has_many :equipments, through: :squad


#   def setAttributes()
#   if self.position = "leader"
#     attribute :cost, :integer, default: 120
#     attribute :movement, :integer, default: 4
#     attribute :weapon_skill, :integer, default: 4
#     attribute :ballistic_skill, :integer, default: 4
#     attribute :strength, :integer, default: 3
#     attribute :toughness, :integer, default: 3
#     attribute :wounds, :integer, default: 1
#     attribute :initiative, :integer, default: 4
#     attribute :attacks, :integer, default: 1
#     attribute :leadership, :integer, default: 8
#   elsif self.position = "ganger"
#     attribute :cost, :integer, default: 50
#     attribute :movement, :integer, default: 4
#     attribute :weapon_skill, :integer, default: 3
#     attribute :ballistic_skill, :integer, default: 3
#     attribute :strength, :integer, default: 3
#     attribute :toughness, :integer, default: 3
#     attribute :wounds, :integer, default: 1
#     attribute :initiative, :integer, default: 3
#     attribute :attacks, :integer, default: 1
#     attribute :leadership, :integer, default: 7
#   elsif self.position = "heavy"
#     attribute :cost, :integer, default: 60
#     attribute :movement, :integer, default: 4
#     attribute :weapon_skill, :integer, default: 3
#     attribute :ballistic_skill, :integer, default: 3
#     attribute :strength, :integer, default: 3
#     attribute :toughness, :integer, default: 3
#     attribute :wounds, :integer, default: 1
#     attribute :initiative, :integer, default: 3
#     attribute :attacks, :integer, default: 1
#     attribute :leadership, :integer, default: 7
#   else
#     attribute :cost, :integer, default: 25
#     attribute :movement, :integer, default: 4
#     attribute :weapon_skill, :integer, default: 2
#     attribute :ballistic_skill, :integer, default: 2
#     attribute :strength, :integer, default: 3
#     attribute :toughness, :integer, default: 3
#     attribute :wounds, :integer, default: 1
#     attribute :initiative, :integer, default: 3
#     attribute :attacks, :integer, default: 1
#     attribute :leadership, :integer, default: 6
#   end
    

# end
