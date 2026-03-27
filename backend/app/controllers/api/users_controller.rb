class UsersController < ApplicationController

  #GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/:id, plus error handling if user not found
  def show
    user = User.find(params[:id])
    render json: user

    rescue ActiveRecord::RecordNotFound
      render json: {error: 'No user found'}, status: :not_found
  end

  #POST /users, allows user creation
  def create
    user = User.new(
      username: params[:username],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    if user.save
      render json: { user: user, message: 'User created successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messaeges }, status: :unprocessable_entity
    end
  end

  #PATCH/PUT /users/:id
  def update
    user = User.find_by(id: params[:id])

    render json: { message: 'User not found' }, status: :not_found unless user

    if user && (params[:password] === params[:password_confirmation])
      user.update(username: params[:username], email: params[:email], password: params[:password])
    elsif user && (params[:password] !== params[:password_confirmation])
      render json: { errors: ['Password and password confirmation must match'] }, status: :unprocessable_entity
    else
      render json: { error: 'User not found' }, status: :not_found
    end

    render json: {user: user, message: 'User successfully updated'}, status: :ok
  end

  #DELETE /users/:id
  def destroy
    user = User.find_by(id: params[:id])

    if user
      user.destroy
      render json: {message: 'User deleted successfully'}, status: :ok
    else
      render json: {message: 'User not found'}, status: :not_found
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
