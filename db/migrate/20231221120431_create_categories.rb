class CreateCategories < ActiveRecord::Migration[7.1]
  def change
    create_table :categories, id: :uuid do |t|
      t.belongs_to :store, type: :uuid
      t.string :name
      t.string :slug
      t.integer :kind, default: 0
      t.integer :status, default: 0
      t.timestamps
    end
    add_index :categories, %i[store_id slug], unique: true
  end
end
