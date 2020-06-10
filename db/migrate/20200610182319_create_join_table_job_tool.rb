class CreateJoinTableJobTool < ActiveRecord::Migration[6.0]
  def change
    create_join_table :jobs, :tools do |t|
      # t.index [:job_id, :tool_id]
      # t.index [:tool_id, :job_id]
    end
  end
end
