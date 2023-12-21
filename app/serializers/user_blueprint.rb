class UserBlueprint < Blueprinter::Base
  identifier :id

  fields :first_name, :last_name, :email, :role, :status

  field :image do |user|
    user.photo.image_url
  end
end
