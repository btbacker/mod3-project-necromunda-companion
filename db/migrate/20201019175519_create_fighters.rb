class CreateFighters < ActiveRecord::Migration[6.0]
  def change
    create_table :fighters do |t|
      t.string :name
      t.string :position
      t.integer :level
      t.integer :experience
      t.integer :cost
      t.references :squad, null: false, foreign_key: true

      t.timestamps
    end
  end
end
