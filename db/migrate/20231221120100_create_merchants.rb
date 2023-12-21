class CreateMerchants < ActiveRecord::Migration[7.1]
  def change
    create_table :merchants, id: :uuid do |t|
      t.references :user, type: :uuid
      t.string :name
      t.string :phone_number
      t.integer :kind, default: 0
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
