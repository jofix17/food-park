# frozen_string_literal: true

class StoreBlueprint < Blueprinter::Base
  identifier :id

  fields :name, :slug, :address, :lat, :lng, :kind, :status

  association :merchant, blueprint: MerchantBlueprint

  field :image do |store|
    store.photo.image_url
  end
end
