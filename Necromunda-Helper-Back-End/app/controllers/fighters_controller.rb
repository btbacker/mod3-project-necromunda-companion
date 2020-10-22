class FightersController < ApplicationController

    def create
        if params[position:] == "Leader"
            fighter = Fighter.create(name: params[:name], position: params[:position], cost: 120, movement: 4, weapon_skill: 4, ballistic_skill: 4, strength: 4, toughness: 4, wounds: 1, initiative: 4, attacks: 1, leadership: 8)
          elsif params[position:] == "Ganger"
            fighter = Fighter.create(name: params[:name], position: params[:position], cost: 50, movement: 4, weapon_skill: 3, ballistic_skill: 3, strength: 3, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 7)
          elsif params[position:] == "Heavy"
            fighter = Fighter.create(name: params[:name], position: params[:position], cost: 60, movement: 4, weapon_skill: 3, ballistic_skill: 3, strength: 3, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 7)
          else
            fighter = Fighter.create(name: params[:name], position: params[:position], cost: 25, movement: 4, weapon_skill: 2, ballistic_skill: 2, strength: 3, toughness: 3, wounds: 1, initiative: 3, attacks: 1, leadership: 6)
        end
    end

    def update
    end

    def destroy
        
    end
end
