class PhotoBlueprint < Blueprinter::Base
  identifier :id

  field :image_url, name: :image
end
