class CreateStores < ActiveRecord::Migration[7.1]
  def change
    create_table :stores, id: :uuid do |t|
      t.belongs_to :merchant, type: :uuid
      t.string :name
      t.string :slug
      t.string :address
      t.float :lat, default: 0
      t.float :lng, default: 0
      t.integer :kind, default: 0
      t.integer :status, default: 0
      t.timestamps
    end
    add_index :stores, :slug, unique: true
  end
end
