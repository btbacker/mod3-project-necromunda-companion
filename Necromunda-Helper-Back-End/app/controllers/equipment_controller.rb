class EquipmentController < ApplicationController

    def index
        equipments = Equipment.all
        render json: equipments
    end

    def show
        equipment = Equipment.find(params[:id])
        render json: equipment
    end

    def create
        equipment = Equipment.create(equipmentParams)
    end

    private

    def equipmentParams
        params.require(:equipment).permit(:name, :cost, :squad_id)
    end
end
