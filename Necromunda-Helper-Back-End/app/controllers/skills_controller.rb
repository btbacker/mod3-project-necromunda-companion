class SkillsController < ApplicationController

    def index
        skills = Skill.all
        render json: skills
    end

    def show
        skill = Skill.find(params[:id])
        render json: skill
    end

    def create
        skill = Skill.create(skillParams)
        render json: skill
    end

    def destroy
        skill = Skill.find(params[:id])
        skill.destroy()
    end

    private

    def skillParams
        params.require(:skill).permit(:name, :description, :fighter_id)
    end
end
