class Admin::UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  # GET /users
  def index
    @users = filtered_users

    if @users.nil?
      render json: { error: "Invalid role specified. Valid roles: #{valid_roles.join(', ')}" },
             status: :unprocessable_entity

    else
      render json: UserBlueprint.render_as_hash(@users)
    end
  end

  # GET /users/1
  def show
    render json: UserBlueprint.render_as_hash(@user)
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: UserBlueprint.render_as_hash(@user), status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: UserBlueprint.render_as_hash(@user)
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy!
  end

  private

  def filtered_users
    users = User.regular_users.includes(:photo)

    if params[:role].present?
      return nil unless valid_roles.include?(params[:role])

      users = User.includes(:photo).where(role: params[:role])
    end

    users
  end

  def valid_roles
    User.roles.keys
        .reject { |role| role == 'admin' }
        .map(&:to_s)
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.fetch(:user, {}).permit(:first_name, :last_name)
  end
end
