class Store < ApplicationRecord
  include SlugTitle

  belongs_to :merchant

  has_one :photo, as: :imageable, dependent: :destroy

  has_many :categories, dependent: :destroy
  has_many :products, through: :categories

  accepts_nested_attributes_for :photo, allow_destroy: true

  slug :title_for_slug

  enum status: {
    available: 0,
    unavailable: 1
  }
end
