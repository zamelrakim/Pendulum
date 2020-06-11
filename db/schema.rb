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

ActiveRecord::Schema.define(version: 2020_06_11_114351) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.string "company"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "jobs_tools", id: false, force: :cascade do |t|
    t.bigint "job_id", null: false
    t.bigint "tool_id", null: false
  end

  create_table "tools", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "creator_id", null: false
    t.index ["creator_id"], name: "index_tools_on_creator_id"
  end

  create_table "tools_users", id: false, force: :cascade do |t|
    t.bigint "tool_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "job_id"
    t.index ["job_id"], name: "index_users_on_job_id"
  end

  add_foreign_key "tools", "users", column: "creator_id"
end
