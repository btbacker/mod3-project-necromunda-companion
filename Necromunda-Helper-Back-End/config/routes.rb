Rails.application.routes.draw do
  resources :skills, only: :index
  resources :fighters, except: [:index, :show]
  resources :equipment, only: :index
  resources :squads, except: :show
  resources :users, except: :show
end