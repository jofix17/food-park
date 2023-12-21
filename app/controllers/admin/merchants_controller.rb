class Admin::MerchantsController < AdminController
  before_action :set_merchant, only: %i[show update destroy]

  # GET /merchants
  def index
    @merchants = Merchant.all

    render json: MerchantBlueprint.render_as_hash(@merchants, view: :full_details)
  end

  # GET /merchants/1
  def show
    render json: MerchantBlueprint.render_as_hash(@merchant, view: :full_details)
  end

  # POST /merchants
  def create
    @merchant = Merchant.new(merchant_params)

    if @merchant.save
      render json: MerchantBlueprint.render_as_hash(@merchant, view: :full_details), status: :created,
             location: @merchant
    else
      render json: @merchant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /merchants/1
  def update
    if @merchant.update(merchant_params)
      render json: MerchantBlueprint.render_as_hash(@merchant, view: :full_details)
    else
      render json: @merchant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /merchants/1
  def destroy
    @merchant.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_merchant
    @merchant = Merchant.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def merchant_params
    params.fetch(:merchant, {})
  end
end
