class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user, include: :squads
    end

    def create
        user = User.find_or_create_by(name: params[:name])
        render json: user, include: :squads
    end

    private

    def userParams
        params.require(:user).permit(:name)
    end

end