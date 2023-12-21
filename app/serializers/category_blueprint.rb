class CategoryBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :slug, :kind, :status

  view :with_product do
    association :products, blueprint: ProductBlueprint
  end
end
