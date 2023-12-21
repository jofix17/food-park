class Merchant < ApplicationRecord
  belongs_to :user

  has_one :store, dependent: :destroy

  has_many :categories, through: :store
  has_many :products, through: :categories
end
