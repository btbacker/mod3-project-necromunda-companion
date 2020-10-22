class SquadsController < ApplicationController

    def index
        squads = Squad.all
        render json: squads
    end
    
    def show
        squad = Squad.find(params[:id])
        render json: squad, include: [:equipments, :fighters]
    end

    def create
        squad = Squad.create(squadParams)
        render json: squad, include: [:equipments, :fighters]
    end

    def update
        squad = Squad.find(params[:id])
        squad.update(squadParams)
        render json: squad, include: [:equipments, :fighters]
    end

    def destroy
        squad = Squad.find(params[:id])
        squad.destroy()
    end

    private

    def squadParams
        params.require(:squad).permit(:name, :house, :credits)
    end
end
