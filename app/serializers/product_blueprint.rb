class ProductBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :description, :sku, :price

  field :images do |product|
    product.photos.map(&:image_url)
  end
end
