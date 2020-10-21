# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Squad.destroy_all
Equipment.destroy_all
Fighter.destroy_all
Skill.destroy_all


u1 = User.create(name: "Davis")
u2 = User.create(name: "Brandon")

s1 = Squad.create(name: "Delaque1", user_id: u1.id)
s2 = Squad.create(name: "Escher1", user_id: u2.id)

e1 = Equipment.create(name: "LasPistol", cost: 20, squad_id: s1.id)
e2 = Equipment.create(name: "LasGun", cost: 40, squad_id: s2.id)

f1 = Fighter.create(name: "D-Man", position: "Gang Leader", level: 1, experience: 0, cost: 75, squad_id: s1.id)
f2 = Fighter.create(name: "D-Boy", position: "Ganger", level: 1, experience: 0, cost: 75, squad_id: s1.id)
f3 = Fighter.create(name: "B-Man", position: "Gang Leader", level: 1, experience: 0, cost: 75, squad_id: s2.id)
f4 = Fighter.create(name: "B-Boy", position: "Ganger", level: 1, experience: 0, cost: 75, squad_id: s2.id)

sk1 = Skill.create(name: "Combat Master", description: "If the model is attacked by multiple opponents in hand-to-hand combat then it can use the enemies’ numbers against them. For each opponent over one, add +1 to the model’s Weapon Skill.", fighter_id: f1.id)
sk2 = Skill.create(name: "Disarm" , description: "The model may use this skill against one close combat opponent at the start of the hand-to-hand combat phase. Roll a D6. On a roll of 4+ the enemy automatically loses one weapon of your choice. This weapon is destroyed and can no longer be used – it is deleted permanently from the gang roster. A model is always assumed to have a knife, even if he has been disarmed of all his other weapons", fighter_id: f2.id )
sk3 = Skill.create(name: "Feint", description: "The model may ‘convert’ any parries it is allowed to use into extra attacks at +1 A per parry. The attack is used instead of the parry. The model may choose to feint or parry each time it attacks (eg, you could parry one time and feint the next).", fighter_id: f3.id )
sk4 = Skill.create(name: "Parry", description: "A model with the Parry skill may parry in hand-tohand combat even if he does not have a sword or another weapon suitable for parrying. The model knocks aside blows using the flats of his hands or the haft of his weapon. If the model has a weapon that may parry, it may force an opponent to re-roll up to 2 Attack dice when parrying, rather than just 1.", fighter_id: f4.id )