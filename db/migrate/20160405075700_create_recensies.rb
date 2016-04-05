class CreateRecensies < ActiveRecord::Migration
  def change
    create_table :recensies do |t|
      t.string :name
      t.text :message

      t.timestamps null: false
    end
  end
end
