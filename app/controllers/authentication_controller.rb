class AuthenticationController < ApplicationController
  before_action :authorize_req, except: :login

  def login
    @user = User.find_by_username(login_params[:username])
    if @user.authenticate(login_params[:password])
      @token = encode({ user_id: user.id })
      render json: { user: @user, token: @token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  def verify
    render json: @curr_user, status: :ok
  end

  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end
end
