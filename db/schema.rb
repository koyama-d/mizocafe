ActiveRecord::Schema.define(version: 2020_02_03_120503) do

  enable_extension "plpgsql"

  create_table "posts", force: :cascade do |t|
    t.text "content"
  end

end
