class User < ApplicationRecord
  has_one :photo, as: :imageable, dependent: :destroy
  has_one :merchant

  has_secure_password

  accepts_nested_attributes_for :photo, allow_destroy: true

  scope :regular_users, -> { where.not(role: [:admin]) }

  after_create :create_merchant_record, if: :merchant?

  enum role: {
    buyer: 0,
    merchant: 1,
    admin: 2
  }

  enum status: {
    inactive: 0,
    active: 1
  }

  def name
    "#{first_name} #{last_name}"
  end

  private

  def create_merchant_record
    create_merchant!(name:)
  end
end
