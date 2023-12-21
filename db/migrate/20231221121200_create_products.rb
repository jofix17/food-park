class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products, id: :uuid do |t|
      t.belongs_to :category, type: :uuid
      t.string :name
      t.string :description
      t.string :sku
      t.integer :kind, default: 0
      t.integer :status, default: 0
      t.float :price
      t.timestamps
    end
  end
end
