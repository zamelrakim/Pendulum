class CreateJoinTableToolUser < ActiveRecord::Migration[6.0]
  def change
    create_join_table :tools, :users do |t|
      # t.index [:tool_id, :user_id]
      # t.index [:user_id, :tool_id]
    end
  end
end
