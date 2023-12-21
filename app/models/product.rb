class Product < ApplicationRecord
  belongs_to :category

  has_many :photos, as: :imageable, dependent: :destroy

  accepts_nested_attributes_for :photos, allow_destroy: true
end
