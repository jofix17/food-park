# frozen_string_literal: true

CarrierWave.configure do |config|
  asset_host = ENV.fetch('RAILS_CARRIERWAVE_ASSET_HOST', 'http://localhost:3001')

  case ENV.fetch('RAILS_CARRIERWAVE_STORAGE').to_s.to_sym
  when :fog
    # fog config here
  else
    config.storage = :file
    config.asset_host = asset_host
    config.root = ENV['RAILS_CARRIERWAVE_FILE_ROOT'] if ENV['RAILS_CARRIERWAVE_FILE_ROOT'].present?
  end
end
