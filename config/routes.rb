Rails.application.routes.draw do
  resources :skills
  resources :fighters
  resources :equipment
  resources :squads
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
