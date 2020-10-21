# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_19_175556) do

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.integer "cost"
    t.integer "squad_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["squad_id"], name: "index_equipment_on_squad_id"
  end

  create_table "fighters", force: :cascade do |t|
    t.string "name"
    t.string "position"
    t.integer "level"
    t.integer "experience"
    t.integer "cost"
    t.integer "squad_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["squad_id"], name: "index_fighters_on_squad_id"
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "fighter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fighter_id"], name: "index_skills_on_fighter_id"
  end

  create_table "squads", force: :cascade do |t|
    t.string "name"
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_squads_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "equipment", "squads"
  add_foreign_key "fighters", "squads"
  add_foreign_key "skills", "fighters"
  add_foreign_key "squads", "users"
end
