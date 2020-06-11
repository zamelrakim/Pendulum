class AddCreatorRefToTools < ActiveRecord::Migration[6.0]
  def change
    add_reference :tools, :creator, null: false, foreign_key: {to_table: :users}
  end
end
