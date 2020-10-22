class UsersController < ApplicationController

    def index
        render json: User.all
    end

    def create
        user = User.find_or_create_by(name: params[:name])
        render json: user, include: :squads
    end

end