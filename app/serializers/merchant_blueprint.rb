# frozen_string_literal: true

class MerchantBlueprint < Blueprinter::Base
  identifier :id

  fields :name

  view :full_details do
    fields :phone_number, :kind, :status
  end
end
