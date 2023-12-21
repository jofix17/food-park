# frozen_string_literal: true

module SlugTitle # rubocop:disable Style/Documentation
  extend ActiveSupport::Concern

  def title_for_slug
    name
  end
end
