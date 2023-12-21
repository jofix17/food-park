# frozen_string_literal: true

FIVE_RECORDS = 5

puts 'Starting seed...'

puts 'Creating Administrator...'

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: 'admin@example.com',
  password: 'password',
  role: :admin
)

puts 'Creating buyers...'

buyers = Array.new(FIVE_RECORDS) do
  {
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email(domain: 'gmail.com'),
    password: 'password',
    role: :buyer,
    photo_attributes: { remote_image_url: 'https://loremflickr.com/300/300?random=2' }
  }
end

User.create!(buyers)

puts 'Creating merchants...'

merchants = Array.new(FIVE_RECORDS) do
  {
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email(domain: 'gmail.com'),
    password: 'password',
    role: :merchant,
    photo_attributes: { remote_image_url: 'https://loremflickr.com/300/300?random=2' }
  }
end

User.create!(merchants)

puts 'Creating stores...'

stores = Merchant.includes(:store).reject(&:store).map do |merchant|
  {
    merchant_id: merchant.id,
    name: Faker::Company.name,
    address: Faker::Address.full_address,
    photo_attributes: { remote_image_url: 'https://loremflickr.com/300/300?random=2' }
  }
end

Store.create!(stores)

puts 'Creating categories...'

categories = Merchant.includes(:categories).reject { |merchant| merchant.categories.any? }.flat_map do |merchant|
  num_records = rand(1..FIVE_RECORDS)

  Array.new(num_records) do
    {
      name: Faker::Food.ethnic_category,
      store_id: merchant.store.id
    }
  end
end

Category.create!(categories)

puts 'Creating products...'

products = Category.includes(:products).reject { |category| category.products.any? }.flat_map do |category|
  num_records = rand(1..FIVE_RECORDS)

  Array.new(num_records) do
    {
      name: Faker::Food.dish,
      description: Faker::Food.description,
      price: Faker::Commerce.price,
      category_id: category.id,
      photos_attributes: [{ remote_image_url: 'https://loremflickr.com/300/300?random=2' },
                          { remote_image_url: 'https://loremflickr.com/300/300?random=3' }]
    }
  end
end

Product.create!(products)

puts 'Seeding complete!'
