class CreatePhotos < ActiveRecord::Migration[7.1]
  def change
    create_table :photos, id: :uuid do |t|
      t.references :imageable, polymorphic: true, type: :uuid
      t.string :image
      t.timestamps
    end
  end
end
