class Category < ApplicationRecord
  belongs_to :store

  has_many :products, dependent: :destroy
end
