class Admin::CategoriesController < AdminController
  before_action :set_category, only: %i[show update destroy]

  # GET /admin/categories
  def index
    @categories = Category.all.includes(products: [:photos])

    render json: CategoryBlueprint.render_as_hash(@categories)
  end

  # GET /admin/categories/1
  def show
    render json: CategoryBlueprint.render_as_hash(@category)
  end

  # POST /admin/categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: CategoryBlueprint.render_as_hash(@category), status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /admin/categories/1
  def update
    if @category.update(category_params)
      render json: CategoryBlueprint.render_as_hash(@category)
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /admin/categories/1
  def destroy
    @category.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def category_params
    params.fetch(:category, {})
  end
end
