class CreateSquads < ActiveRecord::Migration[6.0]
  def change
    create_table :squads do |t|
      t.string :name
      t.string :house
      t.integer :credits
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
