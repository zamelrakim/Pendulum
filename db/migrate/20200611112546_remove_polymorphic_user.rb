class RemovePolymorphicUser < ActiveRecord::Migration[6.0]
  def up
    remove_reference :users, :job, polymorphic: true, null: true
    add_reference :users, :job, null: true
  end

  def down
    remove_reference :users, :job, null: true
    add_reference :users, :job, polymorphic: true, null: true
  end
end
