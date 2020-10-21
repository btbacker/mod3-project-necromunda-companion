class CreateFighters < ActiveRecord::Migration[6.0]
  def change
    create_table :fighters do |t|
      t.string :name
      t.string :position
      t.integer :level
      t.integer :experience
      t.integer :cost
      t.integer :movement
      t.integer :weapon_skill
      t.integer :ballistic_skill
      t.integer :strength
      t.integer :toughness
      t.integer :wounds
      t.integer :initiative
      t.integer :attacks
      t.integer :leadership
      t.references :squad, null: false, foreign_key: true

      t.timestamps
    end
  end
end
